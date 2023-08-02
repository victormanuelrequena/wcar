import { FC } from "react";
import CardWithIconComponentProps from "./CardWithIconComponentProps";

const CardWithIconComponent: FC<CardWithIconComponentProps> = ({title, description, image }) => {
    return <div>
        <div className="row">
            <div className="col-md-2 text_gray px-5 px-md-3 d-flex align-items-start justify-content-center mb-3">
                {image}
            </div>
            <div className="col-md-10 text-center text-md-start px-5 px-md-3">
                <h3><b>{title}</b></h3>
                <span className="text_gray">{description}</span>
            </div>
        </div>
    </div>
}

export default CardWithIconComponent;