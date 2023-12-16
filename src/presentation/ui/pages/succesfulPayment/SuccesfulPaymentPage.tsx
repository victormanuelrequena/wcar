import { Link, useNavigate, useParams } from "react-router-dom";
import Icons from "../../assets/Icons";
import Layout from "../../layout/Layout";
import "./SuccesfulPaymentPageStyles.scss";
import { routes } from "../../routes/RoutesComponent";
import { useContext, useEffect } from "react";
import ModalsContext from "../../../../domain/providers/modal/ModalsContext";
import ModalsContextType from "../../../../domain/providers/modal/ModalsContextType";
import di from "../../../../di/DependencyInjection";
import ConfirmBookingUseCase, {
    ConfirmBookingUseCaseName,
} from "../../../../domain/use_cases/book/ConfirmBookingUseCase";

const SuccesfulPaymentPage: React.FC = () => {
    let called = false;
    const navigate = useNavigate();
    const { bookingId } = useParams();
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const _redirect = () => {
        //redirect to home in 5 seconds
        setTimeout(() => {
            navigate(routes.home.relativePath);
        }, 5000);
    };

    const _callToVerification = async () => {
        addToast("Pago recibido, se ha agendado tu cita.", "success", undefined);
        try {
            di.get<ConfirmBookingUseCase>(ConfirmBookingUseCaseName).call(bookingId!);
        } catch (error) {}
    };

    useEffect(() => {
        if (called) return;
        called = true;
        if (bookingId) {
            _callToVerification();
            _redirect();
        } else {
            navigate(routes.home.relativePath);
        }
    }, []);

    return (
        <div className="succesful_payment_page">
            <Layout>
                <div className="bg_gray">
                    <div className="wrapper">
                        <img src="/assets/pages/error404/wcar.svg" alt="wcar" title="wcar" className="src_1" />
                        <img
                            src="/assets/pages/error404/rombos.svg"
                            alt="wcar"
                            title="wcar"
                            className="src_2 d-none d-md-block"
                        />
                        <div className="content">
                            <img
                                src="/assets/logos/horizontal.svg"
                                width={400}
                                className="Wcar"
                                alt="wcar"
                                title="wcar"
                            />
                            <h1>PAGO EXITOSO</h1>
                            <span>
                                ¡Tu cita ha sido agendada y tu abono ha sido recibido!. Serás redirigido automáticamente
                                al inicio en breve.{" "}
                            </span>
                            <div>
                                <Link to={routes.home.relativePath} className="btn btn_orange mt-3">
                                    REGRESA AL HOME
                                    <Icons.ArrowCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default SuccesfulPaymentPage;
