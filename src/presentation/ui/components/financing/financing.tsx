import "./financingStyles.scss";
import { Link } from "react-router-dom";
import { routes } from "../../routes/RoutesComponent";

export const Financing = () => {
    return (
        <div className="financiacion col-md-12 position-relative text-black d-flex justify-content-center align-items-center">
            <img className="position-absolute wcar-icon" src="./assets/home/wcar_icon.svg" alt="wcar_icon" />
            <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ margin: "0 10%" }}>
                <p className="description text-center">
                    <strong>Financiación hasta</strong>
                    <span className="fst-italic"> del 70%</span>
                </p>
                <Link
                    to={routes.services.relativePath}
                    className="ms-3 my-3 btn btn_orange btn_cut"
                    style={{ padding: "12px 10px" }}
                >
                    EVALÚA TU CRÉDITO
                </Link>
            </div>
        </div>
    );
};
