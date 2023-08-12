import './CardComponentStyles.scss';
import { FC, useEffect, useState } from "react";
import CarCardComponentProps from "./CarCardComponentProps";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import di from "../../../../di/DependencyInjection";
import LikeCarUseCase from "../../../../domain/use_cases/car/LikeCarUseCase";
import CurrencyParse from "../../../utils/CurrencyParse";
import { Link } from 'react-router-dom';
import { routes } from '../../routes/RoutesComponent';

const CarCardComponent: FC<CarCardComponentProps> = ({ car }) => {
    const [_like, _setLike] = useState<boolean>(car.like);

    const _handleLike = () => {
        di.get<LikeCarUseCase>(LikeCarUseCase.name).call(car, !_like);
        _setLike(!_like);
    }

    return <div className="w-100 card car_card_component">
        <div className="card-body">
            {car.tag && <div className="tag" style={{backgroundColor: car.tag.color}}>{car.tag.name}</div> }
            <img src={car.photoUrl} alt="" className="img-fluid img_car" />
            <div className="d-flex w-100 align-items-center">
                <div className="flex-grow overflow-hidden me-3">
                    <h5 className="text_ellipsis">{car.name}</h5>
                </div>
                {_like ? <IoMdHeart size={32} className="text_red hover" onClick={_handleLike} /> : <IoMdHeartEmpty size={32} className="text_gray hover" onClick={_handleLike} />}
            </div>
            <div className="w-100 text_bold mb-1">
                {car.type.name}
            </div>
            <div className="row" style={{ fontSize: '.9em' }}>
                <div className="col-4 d-flex align-items-center text_gray p-0">
                    <img src="./assets/icons/year.svg" alt="" className="img-fluid img_icon  me-2 ms-3" />
                    <span>{car.year}</span>
                </div>
                <div className="col-4 d-flex align-items-center text_gray p-0">
                    <img src="./assets/icons/odometer.svg" alt="" className="img-fluid img_icon me-2" />
                    <span className='text_nowrap'>{car.odometer} Km.</span>
                </div>
                <div className="col-4 d-flex align-items-center text_gray p-0">
                    <img src="./assets/icons/transmission.svg" alt="" className="img-fluid img_icon me-1" />
                    <span className='text_nowrap'>{car.transmission}</span>
                </div>
            </div>
            <div className="w-100 d-flex align-items-center justfy-content-between mt-3">
                <div className="flex-grow-1 text_ellipsis"><h5 className='text_bold'>{CurrencyParse.toCop(car.price)}</h5></div>
                <Link to={routes.detailedCar.relativePath + '/' + car.id} className="ms-3 btn btn_orange">VER CARRO</Link>
            </div>
        </div>
    </div>

}

export default CarCardComponent;