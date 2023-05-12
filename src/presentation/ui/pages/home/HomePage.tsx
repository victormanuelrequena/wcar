import './HomeStyles.scss';
import { FC } from "react";

const HomePage: FC<{}> = () => {
    return <div className="home_page">
        <section className='first_section position-relative d-md-block d-flex flex-column-reverse'>
        <img src="/assets/home/car_01.png" alt="" className="position-sm-absolute img_car_01" />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="d-flex flex-column">
                            <div className="side side_top">wcar</div>
                            <h1 className='mt-3'>
                                Más que <br />
                                vender te <br />
                                <span className="my-3 text_orange text_italic">aconsejamos</span>
                            </h1>
                            <div>
                                <button className="my-3 btn btn_orange btn_shadow btn_cut">COMPRA TU CARRO</button>
                            </div>
                            <div className='mb-5'>
                                <button className="my-3 btn btn_orange_outline btn_cut btn_shadow">VENDE TU CARRO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default HomePage;