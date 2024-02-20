import "./joinTheCallStyles.scss";
import { useForm } from "react-hook-form";
import { routes } from "../../routes/RoutesComponent";
import { useNavigate } from "react-router-dom";

export const JoinTheCall = () => {
    const url = "https://api.wcaronline.com/api";
    const { register, handleSubmit } = useForm();
    const Navigate = useNavigate();

    interface FormData {
        userName: string;
    }

    const onSubmit = handleSubmit((data: FormData) => {
        fetch(`${url}/video-assistances-rooms/connect/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role: "0" }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.room.quantity_persons === 1) {
                    fetch(`https://api.wcaronline.com/api/video-assistances-rooms/${res.room.id}/update/`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ quantity_persons: "2" }),
                    })
                        .then(() => {
                            localStorage.setItem("userName", JSON.stringify(data));
                            Navigate(routes.Videoasistencia.relativePath);
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                } else {
                    Navigate(routes.home.relativePath);
                }
            })
            .catch((e) => {
                console.error(e);
            });
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
                            <input type="text" id="user_name" placeholder="Catalina Henao" {...register("userName")} />
                            <button className="btn btn_orange">UNIRSE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
