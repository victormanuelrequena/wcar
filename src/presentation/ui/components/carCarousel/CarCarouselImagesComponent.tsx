import './CarCarouselImagesComponentStyles.scss';
import React, { FC, useState } from 'react';
import CarCarouselImagesComponentProps from './CarCarouselImagesComponentProps';
import Carousel from 'react-multi-carousel';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const CarCarouselImagesComponent: FC<CarCarouselImagesComponentProps> = ({ images }) => {
    const [imageShowing, setImageShowing] = useState<number>(0);
    const carouselRef = React.useRef<Carousel>(null);

    const _onChange = (slide: number) => {
        console.log('slide', slide);
        setImageShowing(slide);
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

    return <div className="car_carousel_images_component">
        <div className="container_image_showing">
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
        <div className="images_thumbails mt-3">
            {images.map((image, index) => <div className={`carousel_thumbail ${imageShowing == index && 'active'}`} key={index} >
                <img src={image} alt="" onClick={() => _handleGoToImage(index)} />
            </div>)}
        </div>
    </div>
}

export default CarCarouselImagesComponent;