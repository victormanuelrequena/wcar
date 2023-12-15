import { FC, useEffect, useState } from "react";
import { CardCarousel } from "../cardCarousel/cardCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselStyles.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Carousel1: FC<{ id: any }> = ({ id }) => {
    const [cards, setCards] = useState([]);
    const [indexCard, setIndexCard] = useState(0);

    useEffect(() => {
        fetch(`https://api.wcaronline.com/api/cars-related/${id}/`)
            .then((res) => res.json())
            .then((res) => setCards(res))
            .catch((e) => console.error(e));
    }, []);

    const previous = () => {};

    const next = () => {};

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1400 },
            items: 3.3,
        },
        miniDesktop: {
            breakpoint: { max: 1400, min: 1199 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1199, min: 991 },
            items: 2.4,
        },
        miniTablet: {
            breakpoint: { max: 991, min: 767 },
            items: 2,
        },
        bigMobile: {
            breakpoint: { max: 767, min: 510 },
            items: 1.3,
        },
        mobile: {
            breakpoint: { max: 510, min: 450 },
            items: 1.2,
        },
        miniMobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile", "miniTablet", "miniMobile", "bigMobile"]}
                beforeChange={(currentSlide, _) => {
                    setIndexCard(currentSlide);
                }}
            >
                {cards.map((card, i) => {
                    return <CardCarousel car={card} key={i} />;
                })}
            </Carousel>
            <div className="container_nav w-100 d-flex">
                <div className={`arrow_slider_card me-1 ${indexCard === 0 ? "disabled" : null}`}>
                    <AiOutlineArrowLeft />
                </div>
                <div className={`arrow_slider_card ms-1 ${indexCard === cards.length - 1 ? "disabled" : null}`}>
                    <AiOutlineArrowRight />
                </div>
                <div className="container_item_card d-flex flex-wrap justify-content-around align-items-center">
                    {cards.map((card, i) => {
                        return (
                            <div
                                className={`item_card ${Math.round(indexCard) === i ? "active" : "disabled"}`}
                                key={i}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
