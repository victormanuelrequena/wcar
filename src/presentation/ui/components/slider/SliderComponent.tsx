import './SliderStyles.scss';
import Carousel from "react-multi-carousel";
import { FC, useState } from "react";
import SliderComponentProps from "./SliderComponentProps";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const SliderComponent: FC<SliderComponentProps> = ({ children, responsive, beforeChange }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const _onChange = (nextSlide: number) => {
        beforeChange?.(currentSlide, nextSlide);
        setCurrentSlide(nextSlide);
    }

    const _handlePrevious = () => {
        if (currentSlide <= 0) return;
        _onChange(currentSlide - 1);
    }

    const _handleNext = () => {
        if (currentSlide >= children.length - 1) return;
        _onChange(currentSlide + 1);
    }

    if (children == null || children.length == 0) return <div></div>;

    return <div className="slider_component">
        <div className="w-100">
            <Carousel
                arrows={false}
                draggable
                swipeable={true}
                responsive={responsive!} beforeChange={(slide, _) => _onChange(slide)}>
                {children}
            </Carousel>
        </div>
        <div className="px-5 px-md-3 mb-3 d-flex align-items-center">
            <div className="d-none d-md-flex me-3">
                <div className={`arrow_slider previous me-1 ${currentSlide <= 0 ? 'disabled' : ''}`}>
                    <AiOutlineArrowLeft onClick={_handlePrevious} />
                </div>
                <div className={`arrow_slider next ms-1 ${currentSlide >= children.length - 1 ? 'disabled' : ''}`}>
                    <AiOutlineArrowRight onClick={_handleNext} />
                </div>
            </div>
            <div className="flex-grow-1 d-flex">
                {children.map((_, index) => {
                    return <div className={`flex-grow-1 mx-1 indicator_slide ${currentSlide == index && 'active'}`} key={index}></div>
                })}
            </div>
        </div>
    </div>
}

SliderComponent.defaultProps = {
    responsive: {
        mobile: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    }
};

export default SliderComponent;