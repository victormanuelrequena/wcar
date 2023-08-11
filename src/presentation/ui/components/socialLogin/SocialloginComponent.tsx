import './SocialloginComponentStyles.scss';
import { FC } from "react";
import Icons from "../../assets/Icons";
import { Link } from 'react-router-dom';

const SocialLoginComponent: FC<{}> = () => {
    const _handleSignInWithGoogle = () => { }
    const _handleSignInWithFacebook = () => { }

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
        <div className="d-flex justify-content-center my-4">
            <span>
                ¿No tienes una cuenta? <Link to={"#"} className='text_orange text_bold' >
                    Regístrate aquí
                </Link>
            </span>
        </div>
    </div>
}

export default SocialLoginComponent;