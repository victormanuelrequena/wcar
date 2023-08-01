import { FC } from "react";
import CardVisionComponentProps from "./CardVisionComponentProps";

const CardVisionComponent: FC<CardVisionComponentProps> = ({ minTitle, title, description, image }) => {
    return <div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <div className="left_line">{minTitle}</div>
            </div>
            <div className="col-2 text_gray d-flex align-items-start justify-content-center mb-3">
                {image}
            </div>
            <div className="col-10 text-start ">
                <h3><b>{title}</b></h3>
                <span className="text_gray">{description}</span>
            </div>
        </div>
    </div>
}

export default CardVisionComponent;