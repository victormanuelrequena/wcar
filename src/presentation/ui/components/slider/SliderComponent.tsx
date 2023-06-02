import Carousel, { ResponsiveType } from "react-multi-carousel";
import CardServiceComponent from "../../pages/home/components/cardService/CardServiceComponent";
import { FC, useState } from "react";
import SliderComponentProps from "./SliderComponentProps";

const SliderComponent: FC<SliderComponentProps> = ({ children, responsive, beforeChange }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const _onChange = (nextSlide: number) => {
        beforeChange?.(currentSlide, nextSlide);
        setCurrentSlide(nextSlide);
    }

    return <div className="slider_component">
        <div className="w-100">
            <Carousel
                arrows={false}
                swipeable={true}
                responsive={responsive!} beforeChange={(slide, _) => _onChange(slide)}>
                    {children}
            </Carousel>
        </div>
        <div className="px-5 d-md-none">
            <div className="w-100 d-flex">
                {children.map((_, index) => {
                    return <div className={`flex-grow-1 indicator_slide ${currentSlide == index && 'active'}`} key={index}></div>
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