import "./applicationFormStyles.scss";

export const ApplicationForm = ({ setOpenForm, setOpenModal }) => {
    return (
        <>
            <div className="application_form text-white">
                <form className="form">
                    <p className="title">Formulario de solicitud</p>
                    <div className="input_container form-group">
                        <label htmlFor="name" className="label_input mandatory">
                            Nombre
                        </label>
                        <input type="text" id="name" placeholder="nombre" className="input form-control" />
                    </div>
                    <div className="input_container form-group">
                        <label htmlFor="last_name" className="label_input mandatory">
                            Apellido
                        </label>
                        <input type="text" id="last_name" placeholder="apellido" className="input form-control" />
                    </div>
                    <div className="input_container form-group">
                        <label htmlFor="phone" className="label_input mandatory">
                            Teléfono
                        </label>
                        <input type="text" id="phone" placeholder="número de teléfono" className="input form-control" />
                    </div>
                    <div className="input_container form-group">
                        <label htmlFor="email" className="label_input mandatory">
                            Email
                        </label>
                        <input type="email" id="email" placeholder="ejemplo@gmail.com" className="input form-control" />
                    </div>
                    <div className="input_container last_input_container form-group">
                        <label htmlFor="name" className="label_input mandatory">
                            Horario de llamada
                        </label>
                        <input type="text" id="name" className="input form-control" />
                    </div>
                    <div className="botton">
                        <button
                            className="btn btn_orange_transparent"
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenForm(false);
                                setOpenModal(true);
                            }}
                        >
                            CANCELAR
                        </button>
                        <button className="ms-3 btn btn_orange">CONTINUAR</button>
                    </div>
                </form>
            </div>
        </>
    );
};
