import "./joinTheCallStyles.scss";

export const JoinTheCall = () => {
    return (
        <>
            <div className="call_container">
                <div className="card">
                    <div className="top">
                        <img src="./assets/icons/wcar_icon.svg" alt="icono de wcar" />
                        <p>
                            <strong>Bienvenid@</strong>
                            <br />
                            Ajusta tu video y audio antes de unirte
                        </p>
                    </div>
                    <div
                        className="middle mt-3"
                        style={{ height: "360px", background: "red", width: "100%", borderRadius: "16px" }}
                    ></div>
                    <div>
                        <div className="d-flex justify-content-between w-100 mt-3">
                            <div>
                                <img src="./assets/icons_contact/mic_icon.svg" alt="microfono" />
                                <img className="ms-3" src="./assets/icons_contact/camera_icon.svg" alt="camara" />
                            </div>
                            <div>
                                <img className="m-0" src="./assets/icons_contact/tools_icon.svg" alt="ajustes" />
                            </div>
                        </div>
                        <div className=" bottom d-flex w-100 justify-content-between mt-3">
                            <input type="text" placeholder="Catalina Henao" />
                            <button className="btn btn_orange">UNIRSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
