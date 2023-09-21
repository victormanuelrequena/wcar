import { FC, useContext } from "react";
import SliderComponent from "../slider/SliderComponent";
import AlliesContextType from '../../../../domain/providers/ally/AllyContextType';
import AlliesContext from '../../../../domain/providers/ally/AllyContext';

const AlliesLineComponent: FC<{}> = () => {

    const { allies } = useContext(AlliesContext) as AlliesContextType;

    return <div className="row allies_component">
        <div className="col-md-3 d-flex justify-content-center pt-5 py-md-5 bg_md_black align-items-center">
            <div className="side side_top text_black text_md_white">
                <h2 className='d-flex flex-md-column justify-content-center align-items-center flex-row'>
                    <b className='me-2 me-md-0'>Nuestros </b>
                    <div className="text_wcar">Aliados</div>
                </h2>
            </div>
        </div>
        <div className="col-md-9 pt-md-5 pb-4">
            <SliderComponent responsive={{
                mobile: {
                    breakpoint: { max: 769, min: 0 },
                    items: 3,
                    slidesToSlide: 2, // optional, default to 1.
                },
                tablet: {
                    breakpoint: { max: 1024, min: 769 },
                    items: 4,
                    slidesToSlide: 4, // optional, default to 1.
                },
                desktop: {
                    breakpoint: { max: 1280, min: 1024 },
                    items: 6,
                    slidesToSlide: 6, // optional, default to 1.
                },
                largeDesktop: {
                    breakpoint: { max: 3000, min: 1280 },
                    items: 6,
                    slidesToSlide: 6, // optional, default to 1.
                },
            }}>
                {allies.map((ally, index) => <div className="w-100 d-flex align-items-center justify-content-center p-3" key={index} >
                    <img src={ally.url_image} alt={`logo ${ally.id}`} title={`logo ${ally.id}`} className="img-fluid" />
                </div>)}
            </SliderComponent>

        </div>
    </div>
}

export default AlliesLineComponent;