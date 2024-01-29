import "./deleteAccountPageStyles.scss";
import Layout from "../../layout/Layout";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Validators from "../../../utils/Validators";
import { Link } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";

const DeleteAccountPage = () => {
    const {
        register,
        setValue,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data: { full_name: string; email: string; description: string }) => {
        window.location.href = `mailto:desarrollador@wcar.co?subject=Eliminación%20de%20cuenta%20App%20WCAR&body=${data.full_name}%0D%0A%0D%0A${data.email}%0D%0A%0D%0A${data.description}`;
        reset();
        // %0D%0A
    });

    return (
        <>
            <div className="delete_account_page">
                <Helmet>
                    <title>Eliminación de cuenta App WCAR</title>
                    <meta
                        name="description"
                        content="Por favor, completa nuestro formulario de contacto y nos pondremos en contacto contigo lo antes posible. ¡Tu opinión es importante para nosotros y estamos"
                    />
                </Helmet>
                <Layout>
                    <div
                        className="w-100"
                        style={{
                            backgroundImage: "url(/assets/pages/contact/bg_contact.jpg)",
                            // backgroundSize: "contain",
                            // backgroundRepeat: "no-repeat",
                            margin: "0 auto",
                        }}
                    >
                        <div className="container w-100 d-flex justify-content-center py-5">
                            <div className="card_form bg_black text_white py-5 px-4 rounded">
                                <h2 className="text-center">Eliminación de cuenta App WCAR</h2>
                                <br />
                                <form onSubmit={onSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="full-name" className="mandatory">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="full-name"
                                            placeholder="nombre completo"
                                            {...register(
                                                "full_name",
                                                Validators({
                                                    required: true,
                                                    maxLength: 40,
                                                })
                                            )}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="mandatory">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="ejemplo@gmail.com"
                                            {...register(
                                                "email",
                                                Validators({
                                                    required: true,
                                                    maxLength: 40,
                                                })
                                            )}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="description" className="mandatory">
                                            ¿Porqué deseas eliminar tu cuenta?
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            placeholder=""
                                            {...register(
                                                "description",
                                                Validators({
                                                    required: true,
                                                    maxLength: 1000,
                                                })
                                            )}
                                        ></textarea>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="accept"
                                            {...register("accept")}
                                        />
                                        <label htmlFor="accept" className="form-check-label">
                                            He leido y acepto los{" "}
                                            <Link to={routes.termAndConditionsUser.relativePath}>
                                                terminos y condiciones
                                            </Link>
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <input
                                            disabled={!watch("accept")}
                                            className="btn-send btn-orange"
                                            type="submit"
                                            name="submit"
                                        ></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default DeleteAccountPage;
