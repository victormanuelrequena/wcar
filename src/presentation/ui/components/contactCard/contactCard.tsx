import "./contactCardStyles.scss";
import { useState } from "react";

export const ContactCard = ({ setOpenModal, setOpenForm }) => {
    const [check, setCheck] = useState(1);

    const SelectedOption = () => {
        if (check === 1) {
            setOpenModal(false);
            setOpenForm(true);
        } else if (check === 2) {
            window.open(
                "https://api.whatsapp.com/send/?phone=573018063302&text=%C2%A1Hola%21+Quiero+recibir+asesor%C3%ADa+%EF%BF%BD&type=phone_number&app_absent=0",
                "_blank"
            );
            setOpenModal(false);
        } else if (check === 3) {
            window.open("https://calendar.app.google/9Ak2MQecfkFpdCjG7", "_blank");
            setOpenModal(false);
        } else {
            setOpenModal(false);
        }
    };

    return (
        <>
            <div className="contact_card text-white">
                <div className="top position-relative">
                    <div
                        className="position-absolute"
                        onClick={() => setOpenModal(false)}
                        style={{ top: "30px", right: "30px", cursor: "pointer" }}
                    >
                        <img src="./assets/icons_contact/close_icon.svg" alt="" />
                    </div>
                    <img className="wanda_icon" src="./assets/icons_contact/wanda.svg" alt="wanda" />
                    <p className="text-center">
                        <span className="contact_text_uno">¡Hola, soy Wanda!</span>
                        <br />
                        <span className="contact_text_dos">¿Por que medio deseas comunicarte con un asesor?</span>
                    </p>
                </div>
                <div className="middle">
                    <div
                        className="options"
                        style={{ border: check === 1 ? "1px solid #00FEFE" : "1px solid #90A3BF" }}
                        onClick={() => setCheck(1)}
                    >
                        <div className="d-flex align-items-center">
                            <img src="./assets/icons_contact/camera.svg" alt="Videoasistencia" />
                            <p>Videoasistencia</p>
                        </div>
                        <img
                            src={
                                check === 1
                                    ? "./assets/icons_contact/check_true.svg"
                                    : "./assets/icons_contact/check_false.svg"
                            }
                            style={{ justifySelf: "end" }}
                        />
                    </div>
                    <div
                        className="options"
                        style={{ border: check === 2 ? "1px solid #00FEFE" : "1px solid #90A3BF" }}
                        onClick={() => setCheck(2)}
                    >
                        <div className="d-flex align-items-center">
                            <img src="./assets/icons_contact/whatsapp.svg" alt="Whatsapp" />
                            <p>Whatsapp</p>
                        </div>
                        <img
                            src={
                                check === 2
                                    ? "./assets/icons_contact/check_true.svg"
                                    : "./assets/icons_contact/check_false.svg"
                            }
                            style={{ justifySelf: "end" }}
                        />
                    </div>
                    <div
                        className="options"
                        style={{ border: check === 3 ? "1px solid #00FEFE" : "1px solid #90A3BF" }}
                        onClick={() => setCheck(3)}
                    >
                        <div className="d-flex align-items-center">
                            <img src="./assets/icons_contact/phone.svg" alt="Solicita una llamada" />
                            <p>Solicita una llamada</p>
                        </div>
                        <img
                            src={
                                check === 3
                                    ? "./assets/icons_contact/check_true.svg"
                                    : "./assets/icons_contact/check_false.svg"
                            }
                            style={{ justifySelf: "end" }}
                        />
                    </div>
                </div>
                <div className="botton">
                    <button className="btn btn_orange_transparent" onClick={() => setOpenModal(false)}>
                        CANCELAR
                    </button>
                    <button className="ms-3 btn btn_orange" onClick={SelectedOption}>
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </>
    );
};
