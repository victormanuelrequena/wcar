import "./CardContactComponentStyles.scss";
import { FC, useState } from "react";
import Icons from "../../assets/Icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";
import ModalGarantie from "../../pages/car/detailedCar/component/ModalGarantie";

const CardContactComponent: FC<{}> = () => {
    const [showGaratieModal, setShowGarantieModal] = useState(false);
    const [srvCode, setSrvCode] = useState("");
    return (
        <div className="bg_black card_contact">
            <div className="left_line left_line_blue_neon text-white">Hablemos</div>
            <h4 className="text-white">¿Necesitas asesoría? </h4>
            <a href="tel:573018063302" className="d-flex align-items-center pe-4 mt-3">
                <Icons.Phone width={80} />
                <span className="text-white ps-1">
                    Si tienes alguna pregunta <br />
                    (+57) 301 8063302
                </span>
            </a>
            <div></div>
            <div>
                <Link to={routes.contact.relativePath} className="btn btn_orange mt-4">
                    CONTACTA A UN ASESOR <Icons.Contact />{" "}
                </Link>
            </div>
            <button
                className="btn btn_cyan my-1 me-3 btn-detailed-car mt-3"
                onClick={() => {
                    setSrvCode("1002");
                    setShowGarantieModal(true);
                }}
            >
                ADQUIERE TU SEGURO
            </button>
            <button
                className="btn btn_cyan my-1 me-3 btn-detailed-car mt-3"
                onClick={() => {
                    setSrvCode("1003");
                    setShowGarantieModal(true);
                }}
            >
                ADQUIERE TU GARANTIA
            </button>
            {showGaratieModal && (
                <ModalGarantie
                    id={"185"}
                    close={() => setShowGarantieModal(false)}
                    carValue={100000}
                    SrvCode={srvCode}
                />
            )}
        </div>
    );
};

export default CardContactComponent;
