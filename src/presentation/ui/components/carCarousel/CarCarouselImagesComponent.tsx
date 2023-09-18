import './CarCarouselImagesComponentStyles.scss';
import { FC, useEffect, useRef, useState } from 'react';
import CarCarouselImagesComponentProps from './CarCarouselImagesComponentProps';
import Carousel from 'react-multi-carousel';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { set } from 'react-hook-form';

const CarCarouselImagesComponent: FC<CarCarouselImagesComponentProps> = ({ images }) => {
    const [imageShowing, setImageShowing] = useState<number>(0);
    const carouselRef = useRef<Carousel>(null);
    const imgContainerRef = useRef<HTMLDivElement>(null);
    const [postionMouse, setPositionMouse] = useState<{ x: number, y: number } | null>(null);
    const [rect, setRect] = useState<DOMRect | null>(null);

    const _onChange = (slide: number) => {
        setImageShowing(slide);
    }

    const _handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 768 || imgContainerRef.current == null || rect == null) {
            setPositionMouse(null);
            return;
        }
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        if (x < 0 || y < 0 || x > rect.width - 1 || y > rect.height - 1) {
            setPositionMouse(null);
        } else {
            x = x > rect.height * .2 ? x : rect.height * .2;
            x = x < rect.width - (rect.height * .2) ? x : rect.width - (rect.height * .2);
            y = y > rect.height * .2 ? y : rect.height * .2;
            y = y < rect.height * .8 ? y : rect.height * .8;
            setPositionMouse({ x, y });
        }
    }

    const _calculateLeftMarginZoom = () => {
        if (postionMouse && rect) {
            if (postionMouse.x < rect.height * .25) return 0;
            else if (postionMouse.x > rect.width - rect.height * .2) return -(rect.width * 2) + (rect.height * .25) + 2;
            // else return (postionMouse.x - rect.height * 0.25) * (-(rect.width * 2 - rect.height * 0.25 * 2) / (rect.width - rect.height * 0.5));
            else {
                //m = (y2 - y1) / (x2 - x1)
                const x1 = rect.height * .25;
                const y1 = 0;
                const x2 = rect.width - rect.height * .2;
                const y2 = -(rect.width * 2) + (rect.height * .25);
                const m = (y2 - y1) / (x2 - x1);
                const b = y1 - m * x1;
                return m * postionMouse.x + b + 17;
            }
        }
        return 0;
    }

    const _calculateTopMarginZoom = () => {
        if (postionMouse && rect) {
            if (postionMouse.y < rect.height * .2) return 0;
            if (postionMouse.y > rect.height * .8) return -rect.height * .6 * 2.5;
            return -(postionMouse.y * 2.5) + (rect.height * .5);
        }
        return 0;
    }

    const _handleGoToImage = (index: number) => {
        carouselRef.current!.goToSlide(index);
    }

    const _handleNextImage = () => {
        if (imageShowing < images.length - 1) carouselRef.current!.goToSlide(imageShowing + 1);

    }

    const _handlePrevImage = () => {
        if (imageShowing > 0) carouselRef.current!.goToSlide(imageShowing - 1);
    }

    useEffect(() => {
        if (imgContainerRef.current) {
            setRect(imgContainerRef.current.getBoundingClientRect());
        }
    }, [imgContainerRef.current]);

    return <div className="car_carousel_images_component">
        <div className="zoom_wrapper"
            onMouseOut={() => setPositionMouse(null)}
            onMouseMove={_handleMouseMove}
        >
            <div className="container_image_showing"
                ref={imgContainerRef}
            >
                <Carousel
                    ref={carouselRef}
                    arrows={false}
                    draggable
                    swipeable={true}
                    slidesToSlide={imageShowing}
                    responsive={{
                        mobile: {
                            breakpoint: { max: 3000, min: 0 },
                            items: 1,
                            slidesToSlide: 1, // optional, default to 1.
                        },
                    }} beforeChange={(slide, _) => _onChange(slide)}>
                    {images.map((image, index) => <div className="carousel_thumbail" key={index} >
                        <img src={image} alt="" className='img-fluid' />
                    </div>)}
                </Carousel>

                <div className="arrows_container">
                    <div className={`arrow_slider previous me-1 ${imageShowing <= 0 ? 'disabled' : ''}`}>
                        <AiOutlineArrowLeft onClick={_handlePrevImage} />
                    </div>
                    <div className={`arrow_slider next ms-1 ${imageShowing >= images.length - 1 ? 'disabled' : ''}`}>
                        <AiOutlineArrowRight onClick={_handleNextImage} />
                    </div>
                </div>
            </div>
            {postionMouse && <div className="zoom_loop"
                style={{ left: postionMouse?.x, top: postionMouse?.y }}
            ><div className="zoom_box"></div> </div>}

            {postionMouse && rect && <div className="zoom_shower"> <img src={images[imageShowing]}
                style={{
                    marginLeft: _calculateLeftMarginZoom(),
                    marginTop: _calculateTopMarginZoom(),
                    width: rect.width * 2.5,
                    height: rect.height * 2.5
                }}
                alt="" /> </div>}

        </div>

        <div className="images_thumbails mt-3">
            {images.map((image, index) => <div className={`carousel_thumbail ${imageShowing == index && 'active'}`} key={index} >
                <img src={image} alt="" onClick={() => _handleGoToImage(index)} />
            </div>)}
        </div>
    </div >
}

export default CarCarouselImagesComponent;