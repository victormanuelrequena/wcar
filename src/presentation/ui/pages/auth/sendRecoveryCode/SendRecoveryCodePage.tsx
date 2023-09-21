import './SendRecoveryCodePageStyles.scss';
import { FC, useContext } from "react";
import Layout from "../../../layout/Layout";
import { useForm } from "react-hook-form";
import Validators from "../../../../utils/Validators";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../../assets/Icons';
import SocialLoginComponent from '../../../components/socialLogin/SocialloginComponent';
import di from '../../../../../di/DependencyInjection';
import { Either, isRight, left } from "fp-ts/lib/Either";
import { routes } from '../../../routes/RoutesComponent';
import ModalsContext from '../../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../../domain/providers/modal/ModalsContextType';
import SendRecoveryPasswordCodeUseCase, { SendRecoveryPasswordCodeUseCaseName } from '../../../../../domain/use_cases/auth/SendRecoveryPasswordCodeUseCase';

const SendRecoveryCodePage: FC<{}> = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const _handleSubmit = async (data: any) => {
        const response = await di.get<SendRecoveryPasswordCodeUseCase>(SendRecoveryPasswordCodeUseCaseName).call(data.email);
        if (isRight(response)) {
            navigate(routes.updatePasswordRecovery.relativePath + '/' + data.email);
        } else {
            addToast(response.left.message ?? 'Error enviando el código', 'error', undefined);
        }
    }

    return <div className="send_recovery_code_page">
        <Layout>
            <div className="container py-4">
                <div className="row d-flex flex-md-row-reverse">
                    <div className="col-md-6 px-0 px-md-3 mb-4">
                        <img src="/assets/pages/signIn/bg_sign_in.jpeg" className="img-fluid h-100 object_cover" alt="Wcar" title="Wcar" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 content_page">
                        <h2 className="text_bold mb-3">Recuperar contraseña</h2>
                        <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. </p>
                        <form onSubmit={handleSubmit(_handleSubmit)}>
                            <div className="form-group my-3">
                                <label className="mandatory">
                                    Email
                                </label>
                                <input type="text" placeholder='ejemplo@gmail.com' className="form-control" {...register("email", Validators({
                                    email: true,
                                    required: true,
                                }))} />
                                <ErrorMessage as="aside" errors={errors} name="email" />
                            </div>
                            <div className="w-100 d-flex justify-content-center">
                                <Link to={routes.signIn.relativePath} className="text-center text_orange my-3">¿Ya tienes una cuenta?</Link>
                            </div>
                            <div className="w-100 d-flex justify-content-center">
                                <button className="btn btn_orange" type='submit'>
                                    REGISTRARSE
                                    <Icons.PersonRounded />
                                </button>
                            </div>
                        </form>
                        <SocialLoginComponent />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Layout>
    </div>
}

export default SendRecoveryCodePage;