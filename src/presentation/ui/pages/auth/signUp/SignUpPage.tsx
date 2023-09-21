import './SignUpPageStyles.scss';
import { FC, useContext } from "react";
import Layout from "../../../layout/Layout";
import { useForm } from "react-hook-form";
import Validators from "../../../../utils/Validators";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../../assets/Icons';
import SocialLoginComponent from '../../../components/socialLogin/SocialloginComponent';
import di from '../../../../../di/DependencyInjection';
import SignUpUseCase, { SignUpUseCaseName } from '../../../../../domain/use_cases/auth/SignUpUseCase';
import { Either, isRight, left } from "fp-ts/lib/Either";
import { routes } from '../../../routes/RoutesComponent';
import ModalsContext from '../../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../../domain/providers/modal/ModalsContextType';

const SignUpPage: FC<{}> = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const _handleSubmit = async (data: any) => {
        const response = await di.get<SignUpUseCase>(SignUpUseCaseName).call(data.email, data.password, data.name);
        if (isRight(response)) {
            navigate(routes.home.relativePath);
        } else {
            addToast(response.left.message ?? 'Credenciales erradas', 'error', undefined);
        }
    }

    return <div className="sign_up_page">
        <Layout>
            <div className="container py-4">
                <div className="row d-flex flex-md-row-reverse">
                    <div className="col-md-6 px-0 px-md-3 mb-4">
                        <img src="/assets/pages/signIn/bg_sign_in.jpeg" className="img-fluid h-100 object_cover" alt="Wcar" title="Wcar" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 content_page">
                        <h2 className="text_bold mb-3">Crea una cuenta</h2>
                        <p>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. </p>
                        <form onSubmit={handleSubmit(_handleSubmit)}>
                            <div className="form-group my-3">
                                <label className="mandatory">
                                    Nombre
                                </label>
                                <input type="text" placeholder='Joe Doe' className="form-control" {...register("name", Validators({
                                    noNumber: true,
                                    required: true,
                                }))} />
                                <ErrorMessage as="aside" errors={errors} name="name" />
                            </div>
                            <div className="form-group my-3">
                                <label className="mandatory">
                                    Email
                                </label>
                                <input type="email" placeholder='ejemplo@gmail.com' className="form-control" {...register("email", Validators({
                                    email: true,
                                    required: true,
                                }))} />
                                <ErrorMessage as="aside" errors={errors} name="email" />
                            </div>
                            <div className="form-group my-3">
                                <label className="mandatory">
                                    Contraseña
                                </label>
                                <input type="password" className="form-control" placeholder={"Contraseña"}
                                    {...register('password', Validators({ isPassword: true, required: true }))} />
                                <ErrorMessage as="aside" errors={errors} name="password" />
                            </div>
                            <div className="form-group my-3">
                                <label className="mandatory">
                                    Confirmar Contraseña
                                </label>
                                <input type="password" {...register("confirm_password", Validators({
                                    isPassword: true,
                                    required: true, minLength: 6, validate: (val: string) => {
                                        console.log('validator pass', val, watch('password'));
                                        if (watch('password') != val) {
                                            return "Las contraseñas no coinciden"
                                        }
                                    },
                                }))} className="form-control" placeholder="Confirmar contraseña" />
                                <ErrorMessage as="aside" errors={errors} name="confirm_password" />
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

export default SignUpPage;