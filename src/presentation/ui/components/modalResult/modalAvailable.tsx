import "./modalStyles.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";

export const ModalAvailable = () => {
    const Navigate = useNavigate();

    return (
        <>
            <div className="modal_container position-relative">
                <div className="position-absolute" style={{ top: "30px", right: "30px", cursor: "pointer" }}>
                    <img src="./assets/icons_contact/close_icon.svg" alt="" />
                </div>
                <div className="top">
                    <img src="./assets/icons_contact/success_icon.svg" alt="success_icon" />
                </div>
                <div className="middle">
                    <p className="text-center">
                        <strong className="mb-3">Mensaje de confirmación</strong>
                    </p>
                    <br />
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu mauris, tempus iaculis
                    </p>
                </div>
                <div className="bottom">
                    <button onClick={() => Navigate(routes.Videoasistencia.relativePath)} className="btn btn_orange">
                        IR
                    </button>
                </div>
            </div>
        </>
    );
};
