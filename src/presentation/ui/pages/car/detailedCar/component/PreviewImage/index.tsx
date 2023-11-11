import { FC } from "react";
import "../zommedCar/ZoomedCarComponentStyles.scss";
import Icons from "../../../../../assets/Icons";

interface PreviewImageProps {
    imageUrl: string;
    close: () => void;
}

const PreviewImage: FC<PreviewImageProps> = ({ imageUrl, close }) => {
    return (
        <div className="zoom_car_component">
            <div className="close hover z-index-10" onClick={close}>
                <Icons.Clear />
            </div>
            <div className="zoom_car_component_image_container">
                <div className="closer" onClick={close}></div>
                <img src={imageUrl} alt="car" />
            </div>
        </div>
    );
};

export default PreviewImage;
