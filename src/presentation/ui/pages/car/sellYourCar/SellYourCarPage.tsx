import { Link } from 'react-router-dom';
import CommentEntity from '../../../../../domain/entities/CommentEntity';
import Layout from '../../../layout/Layout';
import './SellYourCarPageStyles.scss';
import { FC, useState } from "react";
import Icons from '../../../assets/Icons';

const SellYourCarPage: FC<{}> = () => {
    const [comments, setComments] = useState<CommentEntity[]>([]);
    const [openFrequentQuestions, setOpenFrequentQuestions] = useState<number | undefined>(undefined);
    return <Layout>
        <div className="sell_your_car_page">
            <section className="bg_black position-relative section_1">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 text-white py-3">
                            <h1> <span className='text_bold'> Vende tu Carro<br />
                                a un precio</span>
                                <br /><span className="text_italic">razonable</span>
                            </h1>
                            <Link to="#" className='btn btn_orange'>
                                VENDE TU CARRO <Icons.ArrowCircle />
                            </Link>
                        </div>
                    </div>
                </div>
                <img src="/assets/recs/bg_sell_car.jpeg" alt="" className="img_section_1 img-fluid" />
                <div className="contact_fixed">
                    <a href="" className="btn btn_cyan">Contacta un asesor</a>
                </div>
            </section>
        </div>
    </Layout>
};

export default SellYourCarPage;