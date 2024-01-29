import "./deleteAccountPageStyles.scss";
import Layout from "../../layout/Layout";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Validators from "../../../utils/Validators";

const DeleteAccountPage = () => {
    const {
        register,
        setValue,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
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
                                <form>
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
                                        <label htmlFor="full-name" className="mandatory">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="full-name"
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
                                        <label htmlFor="full-name" className="mandatory">
                                            ¿Porqué deseas eliminar tu cuenta?
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="full-name"
                                            placeholder=""
                                            {...register(
                                                "description",
                                                Validators({
                                                    required: true,
                                                    maxLength: 40,
                                                })
                                            )}
                                        ></textarea>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="full-name"
                                            {...register(
                                                "email",
                                                Validators({
                                                    required: true,
                                                    maxLength: 40,
                                                })
                                            )}
                                        />
                                        <label className="form-check-label" >
                                            Terminos y condiciones
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <input className="btn-send btn-orange" type="submit" name="submit"></input>
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
