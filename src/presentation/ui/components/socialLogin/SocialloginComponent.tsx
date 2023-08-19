import './SocialloginComponentStyles.scss';
import { FC, useContext } from "react";
import Icons from "../../assets/Icons";
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/RoutesComponent';
import di from '../../../../di/DependencyInjection';
import SignInWithGoogleUseCase, { SignInWithGoogleUseCaseName } from '../../../../domain/use_cases/auth/SignInWithGoogleUseCase';
import { isRight } from 'fp-ts/lib/Either';
import ModalsContext from '../../../../domain/providers/modal/ModalsContext';
import ModalsContextType from '../../../../domain/providers/modal/ModalsContextType';
import SignInWithFacebookUseCase, { SignInWithFacebookUseCaseName } from '../../../../domain/use_cases/auth/SignInWithFacebookUseCase';

const SocialLoginComponent: FC<{}> = () => {
    const { addToast } = useContext(ModalsContext) as ModalsContextType;
    const navigate = useNavigate();

    const _handleSignInWithGoogle = async () => {
        const response = await di.get<SignInWithGoogleUseCase>(SignInWithGoogleUseCaseName).call();
        if (isRight(response)) {
            navigate(routes.home.relativePath);
        } else {
            addToast(response.left.message ?? 'Error al iniciar con Google', 'error', undefined);
        }
    }

    const _handleSignInWithFacebook = async () => {
        const response = await di.get<SignInWithFacebookUseCase>(SignInWithFacebookUseCaseName).call();
        if (isRight(response)) {
            navigate(routes.home.relativePath);
        } else {
            addToast(response.left.message ?? 'Error al iniciar con Facebook', 'error', undefined);
        }
    }

    return <div className="social_login_component">
        <div className="py-3 o_container text-center">
            <div>o</div>
        </div>
        <div className="btn btn_gray_light w-100 my-2" onClick={_handleSignInWithGoogle}>
            <Icons.Google />
            <span className='ms-3'>Inicia sesión con Google</span></div>
        <div className="btn btn_gray_light w-100 my-2" onClick={_handleSignInWithFacebook}>
            <Icons.Facebook />
            <span className='ms-3'>Inicia sesión con Facebook</span></div>
        {window.location.pathname != routes.signUp.relativePath &&
            <div className="d-flex justify-content-center my-4">
                <span>
                    ¿No tienes una cuenta? <Link to={routes.signUp.relativePath} className='text_orange text_bold' >
                        Regístrate aquí
                    </Link>
                </span>
            </div>}
    </div>
}

export default SocialLoginComponent;