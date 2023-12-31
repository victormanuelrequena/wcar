import "./LoadingComponent.scss";
import { FC, useContext } from "react";
import LoadingComponentProps from "./LoadingComponentProps";

const LoadingComponent: FC<LoadingComponentProps> = ({ showLogo }) => {
    // const {i18n} = useContext(LocalizationContext) as LocalizationContextType;
    return (
        <div className="loading_component">
            {showLogo && (
                <img src="/assets/logos/horizontal.svg" title="wcar" width={400} className="logo" alt="wcar" />
            )}
            <strong className="mb-3">Cargando...</strong>
            <div className="centered_spinner">
                <div className="loading-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    );
};

LoadingComponent.defaultProps = {
    showLogo: false,
};

export default LoadingComponent;
