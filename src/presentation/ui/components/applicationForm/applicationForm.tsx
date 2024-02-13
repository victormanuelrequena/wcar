import "./applicationFormStyles.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";

export const ApplicationForm = ({ setOpenForm, setOpenModal, setAlert }) => {
    const Navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const url = "https://api.wcaronline.com/api";

    const onSubmit = handleSubmit((data) => {
        console.log(data);

        fetch(`${url}/video-assistances/create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                setOpenForm(false);
                setAlert(true);
            })
            .catch((e) => console.error(e));
    });

    return (
        <>
            <div className="application_form text-white">
                <form className="form" onSubmit={onSubmit}>
                    <p className="title">Formulario de solicitud</p>
                    <div className="input_container form-group">
                        <label htmlFor="name" className="label_input mandatory">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="nombre"
                            className="input form-control"
                            {...register("name")}
                        />
                    </div>
                    <div className="input_container form-group">
                        <label htmlFor="last_name" className="label_input mandatory">
                            Apellido
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            placeholder="apellido"
                            className="input form-control"
                            {...register("last_name")}
                        />
                    </div>
                    <div className="input_container form-group">
                        <label htmlFor="phone" className="label_input mandatory">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="número de teléfono"
                            className="input form-control"
                            {...register("phone")}
                        />
                    </div>
                    <div className="input_container form-group">
                        <label htmlFor="email" className="label_input mandatory">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ejemplo@gmail.com"
                            className="input form-control"
                            {...register("email")}
                        />
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
                        <button
                            className="ms-3 btn btn_orange"
                            onClick={() => Navigate(routes.Videoasistencia.relativePath)}
                        >
                            CONTINUAR
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
