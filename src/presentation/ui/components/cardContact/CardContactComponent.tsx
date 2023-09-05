import './CardContactComponentStyles.scss';
import { FC } from "react";
import Icons from "../../assets/Icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";

const CardContactComponent: FC<{}> = () => {
    return <div className="bg_black card_contact">
        <div className="left_line left_line_blue_neon text-white">Hablemos</div>
        <h4 className="text-white">¿Necesitas asesoría? </h4>
        <a href="tel:573018063302" className="d-flex align-items-center pe-4 mt-3">
            <Icons.Phone width={80} />
            <span className="text-white ps-1">Si tienes alguna pregunta <br />
                (+57) 301 8063302</span>
        </a>
        <Link to={routes.contact.relativePath} className='btn btn_orange mt-4'>CONTÁCTA A UN ASESOR <Icons.Contact /> </Link>
    </div>
}

export default CardContactComponent;