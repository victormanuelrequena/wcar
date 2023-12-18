import { FC, useEffect, useState, useRef } from "react";
import { CardCarousel } from "../cardCarousel/cardCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselStyles.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


export const Carousel1: FC<{ id: string }> = ({ id }) => {
    const [cards, setCards] = useState([]);
    const [indexCard, setIndexCard] = useState<number>(0);

    const carouselRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.wcaronline.com/api/cars-related/${id}/`)
            .then((res) => res.json())
            .then((res) => setCards(res))
            .catch((e) => console.error(e));
    }, [id]);

    const previous = () => {
        if (carouselRef.current && indexCard !== 0) {
            carouselRef.current.goToSlide(indexCard - 1);
            setIndexCard(indexCard - 1);
        }
    };

    const next = () => {
        if (carouselRef.current && indexCard + 1 !== cards.length) {
            carouselRef.current.goToSlide(indexCard + 1);
            setIndexCard(indexCard + 1);
        }
    };


    const goToIndex = (index: number) => {
        if (carouselRef.current) {
            carouselRef.current.goToSlide(index);
            setIndexCard(index);
        }
    };


    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1300 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1300, min: 767 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <Carousel

                partialVisible

                ref={carouselRef}
                responsive={responsive}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                beforeChange={(currentSlide, _) => {
                    setIndexCard(currentSlide);
                }}
            >
                {cards.map((card, i) => {
                    return <CardCarousel car={card} key={i} />;
                })}
            </Carousel>
            <div className="container_nav w-100 d-flex">
                <div className={`arrow_slider_card me-1 ${indexCard === 0 ? "disabled" : null}`} onClick={previous}>
                    <AiOutlineArrowLeft />
                </div>
                <div
                    className={`arrow_slider_card ms-1 ${indexCard === cards.length - 1 ? "disabled" : null}`}
                    onClick={next}
                >
                    <AiOutlineArrowRight />
                </div>
                <div className="container_item_card d-flex flex-wrap justify-content-around align-items-center">
                    {cards.map((card, i) => {

                        return (
                            <div
                                className={`item_card ${indexCard === i ? "active" : "disabled"}`}
                                key={i}
                                onClick={() => goToIndex(i)}
                            ></div>
                        );

                    })}
                </div>
            </div>
        </>
    );
};
