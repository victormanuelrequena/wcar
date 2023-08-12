import './QuoteSuccessfulPageStyles.scss';
import { FC } from "react";
import Layout from "../../../layout/Layout";
import Icons from "../../../assets/Icons";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/RoutesComponent';
import CurrencyParse from '../../../../utils/CurrencyParse';
import CalculatedEntity from '../../../../../domain/entities/CalculatedEntity';
import DateParse from '../../../../utils/DateParse';

const QuoteSuccessfulPage: FC<{}> = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as { calculated: CalculatedEntity };

    const _handleGoBack = () => navigate(-2);

    const _getExpiredDate = () => {
        const date = new Date();
        //add 3 days
        date.setDate(date.getDate() + 3);
        return date;
    }

    return <Layout>
        <div className="quote_succesful_page py-5">
            <div className="bg_image">
                <Icons.TwoTrapecios />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div onClick={_handleGoBack}>
                            <Icons.BackArrowCircle />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="side side_top mb-0 mt-3 mt-md-0">
                            <h1>
                                Oferta
                                <span className="text_italic text_orange"> no vinculante</span>
                            </h1>
                            <p>Una vez terminada la inspección mecánica y validación de documentos recibirás tu oferta final.</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="card mt-4 p-3 position-relative">
                                <div className="clear hover" onClick={_handleGoBack}>
                                    <Icons.Clear />
                                </div>
                                <div className="d-flex align-items-center card_header">
                                    <div className="px-3">
                                        <Icons.Pay />
                                    </div>
                                    <div className="divider"></div>
                                    <div className='flex-grow-1 container_offer px-3'>
                                        <span className='text_reduced text_gray'>
                                            Oferta
                                        </span>
                                        {state?.calculated?.value &&
                                            <h5 className='mt-2 mb-0'>{CurrencyParse.toCop(state.calculated.value)}</h5>}
                                    </div>
                                </div>
                                <hr />
                                <div className="card-body d-flex flex-column align-items-center">
                                    <h5 className='text_bold'>
                                        <strong>
                                            Recibe el pago de la oferta
                                        </strong>
                                    </h5>
                                    <span className='mb-4 text_light'>Agenda tu cita para la inspección</span>
                                    <Link state={state} to={routes.dateForSell.relativePath} className='btn btn_orange'>Continuar <Icons.ArrowCircle /> </Link>
                                    <span className="text_reduced text_light mt-3">
                                        Esta oferta está sujeta a inspección y vence {DateParse.dateToMMDDYYYY(_getExpiredDate())}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    </Layout >
}

export default QuoteSuccessfulPage;