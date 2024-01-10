import { FC } from "react";
import CardServiceComponentProps from "./CardServiceComponentProps";

const CardServiceComponent: FC<CardServiceComponentProps> = ({ title, description, image }) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2 text_gray px-5 px-md-3 d-flex align-items-start justify-content-center mb-3">
                    <img src={image} alt="wcar" title="wcar" />
                </div>
                <div className="col-md-10 text-center text-md-start px-5 px-md-3">
                    <h3>
                        <b>{title}</b>
                    </h3>
                    <span className="text_gray">{description}</span>
                </div>
            </div>
        </div>
    );
};

export default CardServiceComponent;
