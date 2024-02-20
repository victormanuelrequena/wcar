import "./alliesLinesStyles.scss";
import { FC, useContext } from "react";
import SliderComponent from "../slider/SliderComponent";
import AlliesContextType from "../../../../domain/providers/ally/AllyContextType";
import AlliesContext from "../../../../domain/providers/ally/AllyContext";

const AlliesLineComponent: FC<{}> = () => {
    const { allies } = useContext(AlliesContext) as AlliesContextType;

    return (
        <div className="row allies_component">
            <div className="box col-md-3 pt-4 py-4 position-relative">
                <img className="position-absolute start-0" src="./assets/home/lines.svg" alt="lines" />
                <div className="side side_top side_blue_neon text_black text_md_white">
                    <h2 className="sub_title d-flex flex-md-column justify-content-center align-items-start flex-row">
                        <strong className="me-2 me-md-0">Nuestros </strong>
                        <i className="text_wcar">Aliados</i>
                    </h2>
                </div>
            </div>
            <div className="col-md-9 ps-sm-0 ps-md-5 pt-md-5 pb-4">
                <SliderComponent
                    responsive={{
                        mobile: {
                            breakpoint: { max: 769, min: 0 },
                            items: 2,
                            slidesToSlide: 2, // optional, default to 1.
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 769 },
                            items: 3,
                            slidesToSlide: 3, // optional, default to 1.
                        },
                        desktop: {
                            breakpoint: { max: 5000, min: 1024 },
                            items: 5,
                            slidesToSlide: 5, // optional, default to 1.
                        },
                    }}
                >
                    {allies.map((ally, index) => (
                        <div className="w-100 d-flex align-items-center justify-content-center p-3" key={index}>
                            <img
                                src={ally.url_image}
                                alt={`logo ${ally.id}`}
                                title={`logo ${ally.id}`}
                                className="img-fluid"
                            />
                        </div>
                    ))}
                </SliderComponent>
            </div>
        </div>
    );
};

export default AlliesLineComponent;
