import { FC } from "react";
import ZoomedCarComponentProps from "./ZoomedCarComponentProps";
import './ZoomedCarComponentStyles.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Icons from "../../../../../assets/Icons";

const ZoomedCarComponent: FC<ZoomedCarComponentProps> = ({ images, close, isOpen, changeImage, currentImage }) => {
    const _handleNext = () => {
        if (currentImage < images.length - 1) {
            changeImage(currentImage + 1)
        }
    }

    const _handlePrevious = () => {
        if (currentImage > 0) {
            changeImage(currentImage - 1)
        }
    }

    return <div className="zoom_car_component">
        <div className="close hover" onClick={close}>
            <Icons.Clear />
        </div>
        <div className={`arrow_slider previous me-1 ${currentImage <= 0 ? 'disabled' : ''}`}>
            <AiOutlineArrowLeft onClick={_handlePrevious} />
        </div>
        <div className="zoom_car_component_image_container">
        <div className="closer" onClick={close}></div>
            <img src={images[currentImage]} alt="car" />
        </div>
        <div className={`arrow_slider next ms-1 ${currentImage >= images.length - 1 ? 'disabled' : ''}`}>
            <AiOutlineArrowRight onClick={_handleNext} />
        </div>
    </div>
}

export default ZoomedCarComponent;