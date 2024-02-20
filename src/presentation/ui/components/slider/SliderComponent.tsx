import "./SliderStyles.scss";
import Carousel from "react-multi-carousel";
import { FC, useRef, useState } from "react";
import SliderComponentProps from "./SliderComponentProps";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SliderComponent: FC<SliderComponentProps> = ({ children, responsive }) => {
    const [indexCard, setIndexCard] = useState<number>(0);

    const carouselRef = useRef(null);

    const previous = () => {
        if (carouselRef.current && indexCard !== 0) {
            carouselRef.current.goToSlide(indexCard - 1);
            setIndexCard(indexCard - 1);
        }
    };

    const next = () => {
        if (carouselRef.current && indexCard + 1 !== children?.length) {
            carouselRef.current.goToSlide(indexCard + 1);
            setIndexCard(indexCard + 1);
        }
    };

    if (children == null || children.length == 0) return <div></div>;

    return (
        <div className="slider_component">
            <div className="w-100">
                <Carousel
                    ref={carouselRef}
                    arrows={false}
                    draggable
                    swipeable={true}
                    responsive={responsive!}
                    beforeChange={(currentSlide, _) => setIndexCard(currentSlide)}
                >
                    {children}
                </Carousel>
            </div>
            <div className="mb-3 d-flex align-items-center">
                <div className="d-none d-md-flex me-3">
                    <div
                        onClick={previous}
                        className={`arrow_slider previous me-1 ${indexCard === 0 ? "disabled" : null}`}
                    >
                        <AiOutlineArrowLeft />
                    </div>
                    <div
                        onClick={next}
                        className={`arrow_slider next ms-1 ${indexCard === children?.length - 1 ? "disabled" : null}`}
                    >
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <div className="flex-grow-1 d-flex">
                    {children?.map((car: any, i: number) => {
                        return <div className={`item_card ${indexCard === i ? "active" : "disabled"}`} key={i}></div>;
                    })}
                </div>
            </div>
        </div>
    );
};

SliderComponent.defaultProps = {
    responsive: {
        mobile: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    },
};

export default SliderComponent;
