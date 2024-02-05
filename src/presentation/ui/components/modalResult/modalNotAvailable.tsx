import "./modalStyles.scss";

export const ModalNotAvailable = ({ setAlert, setOpenForm }) => {
    return (
        <>
            <div className="modal_container position-relative">
                <div
                    onClick={() => setAlert(false)}
                    className="position-absolute"
                    style={{ top: "30px", right: "30px", cursor: "pointer" }}
                >
                    <img src="./assets/icons_contact/close_icon.svg" alt="" />
                </div>
                <div className="top">
                    <img src="./assets/icons_contact/not_success_icon.svg" alt="success_icon" />
                </div>
                <div className="middle">
                    <p className="text-center">
                        <strong className="mb-3">En este momento no te podemos atender</strong>
                    </p>
                    <br />
                    <p className="text-center">
                        Nuestro horaio de atención va de 8:00am a 5:00pm. Déjanos tus datos y con gusto nos
                        comunicaremos contigo.
                    </p>
                </div>
                <div className="bottom">
                    <button
                        className="btn btn_orange_transparent"
                        onClick={() => {
                            setAlert(false);
                            setOpenForm(true);
                        }}
                    >
                        VOLVER
                    </button>
                    <button className="btn btn_orange ms-3" onClick={() => setAlert(false)}>
                        CONTINUAR
                    </button>
                </div>
            </div>
        </>
    );
};
