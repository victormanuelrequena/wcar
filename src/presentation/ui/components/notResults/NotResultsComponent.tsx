import { FC, useContext, useEffect } from "react";
import "./NotResultsStyles.scss";
import NotResultsComponentProps from "./NotResultsComponentProps";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";
import UserContext from "../../../../domain/providers/user/UserContext";
import UserContextType from "../../../../domain/providers/user/UserContextType";

const NotResultsComponent: FC<NotResultsComponentProps> = () => {
    const { user } = useContext(UserContext) as UserContextType;
    const navigate = useNavigate();

    useEffect(() => {
        // if (user != undefined && window.location.pathname == '/') navigate(routes.courses.relativePath);
    }, [navigate]);

    return (
        <div className="not_results_component  d-flex align-items-center">
            <div className="container py-5">
                <div className="row">
                    {/* <div className="col-md-6"><img src="/assets/images/404-error.png" className='img-fluid' alt="wcar" title="wcar" /></div> */}
                    <div className="col-md-12 d-flex align-items-center justify-content-center">
                        <div className="">
                            <h3 className="text-left">SIN RESULTADOS</h3>
                            <h1 className="text_yellow text_bold text-justify" style={{ fontSize: "3.7rem" }}></h1>
                            <h4 className="text-end"></h4>
                            <div className="d-flex justify-content-end px-3 mt-3">
                                <Link
                                    to={user != undefined ? routes.home.relativePath : routes.signIn.relativePath}
                                    className="btn btn_orange"
                                >
                                    Ir al inicio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotResultsComponent;
