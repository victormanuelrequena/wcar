import "./joinTheCallStyles.scss";
import { useForm } from "react-hook-form";
import { routes } from "../../routes/RoutesComponent";
import { useNavigate } from "react-router-dom";

export const JoinTheCall = () => {
    const { register, handleSubmit } = useForm();
    const Navigate = useNavigate();

    interface FormData {
        userName: string;
    }

    const onSubmit = handleSubmit((data: FormData) => {
        localStorage.setItem("userName", JSON.stringify(data));
        Navigate(routes.Videoasistencia.relativePath);
    });

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
                    <div className="middle mt-3"></div>
                    <div className="bottom">
                        <div className="d-flex justify-content-between w-100 mt-3">
                            <div>
                                <img src="./assets/icons_contact/mic_icon.svg" alt="microfono" />
                                <img className="ms-3" src="./assets/icons_contact/camera_icon.svg" alt="camara" />
                            </div>
                            <div>
                                <img className="m-0" src="./assets/icons_contact/tools_icon.svg" alt="ajustes" />
                            </div>
                        </div>
                        <form onSubmit={onSubmit} className="join d-flex w-100 justify-content-between mt-3">
                            <input
                                type="text"
                                id="user_name"
                                placeholder="Catalina Henao"
                                {...register("userName")}
                            />
                            <button className="btn btn_orange">UNIRSE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
