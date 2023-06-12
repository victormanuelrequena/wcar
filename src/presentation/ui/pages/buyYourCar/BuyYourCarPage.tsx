import './BuyYourCarStyles.scss';
import { FC, useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { useForm } from 'react-hook-form';
import { IoMdTrash } from 'react-icons/io';
import CarEntity from '../../../../domain/entities/CarEntity';
import NotResultsComponent from '../../components/notResults/NotResultsComponent';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import CarCardComponent from '../../components/carCard/CarCardComponent';
import di from '../../../../di/DependencyInjection';
import SearchCarsUseCase from '../../../../domain/use_cases/car/SearchCarsUseCase';

const BuyYourCarPage: FC<{}> = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [cars, setCars] = useState<CarEntity[] | undefined>(undefined);
    const [page, setPage] = useState<number>(1);
    const [openFilters, setOpenFilters] = useState<boolean>(false);
    const [maxPages, setMaxPages] = useState<number>(1);

    const _handleSearch = async (data: any) => {
        try {
            const response = await di.get<SearchCarsUseCase>(SearchCarsUseCase.name).call(page);
            setCars(response.cars);
            setMaxPages(response.maxPages);
        } catch (error) {
            setCars([]);
        }
    }

    const _handleNextPage = async () => {
        setPage(page + 1);
    }

    const _handlePreviousPage = async () => {
        setPage(page - 1);
    }

    const _handleClearFilters = async () => {
        reset();
        setPage(1);
        _handleSearch({});
    }

    useEffect(() => {
        _handleSearch({});
    }, [page]);


    return <Layout>
        <form onSubmit={handleSubmit(_handleSearch)}>
            <div className="w-100 position-relative buy_your_car_page bg_gray">
                <div className="w-100 car_search">
                </div>
                <div className="car_list from_left_3  container">
                    <div className="row">
                        <div className={`col-md-3 ${openFilters ? 'bg_white':''}`}>
                            <div className="side_filter hover" onClick={() => setOpenFilters(!openFilters)}>
                                filtro
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="w-100 filters d-flex justify-content-between">
                                <div className="d-flex flex-grow-1">
                                    filtros activos
                                </div>
                                <div className="btn_light" onClick={_handleClearFilters}>
                                    <IoMdTrash /> Limpiar filtros
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`bg_white ${openFilters ? 'col-md-3' : 'd-none'}`}>
                            Filtros
                        </div>
                        <div className={`${openFilters ? 'col-md-9' : 'col-md-12'}`}>
                            <div className="row">
                                {cars == undefined && <LoadingComponent />}
                                {cars != undefined && cars.length == 0 && <NotResultsComponent />}
                                {cars != undefined && cars.length > 0 && cars.map((car, index) => <div className={`mb-3 ${openFilters ? 'col-md-6 col-xl-4' : 'col-md-4 col-xl-3'}`} key={index}>
                                    <CarCardComponent car={car} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </Layout>
}

export default BuyYourCarPage;