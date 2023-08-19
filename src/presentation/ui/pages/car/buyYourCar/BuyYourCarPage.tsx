import './BuyYourCarStyles.scss';
import { FC, useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { useForm } from 'react-hook-form';
import { IoMdTrash } from 'react-icons/io';
import CarEntity from '../../../../../domain/entities/CarEntity';
import NotResultsComponent from '../../../components/notResults/NotResultsComponent';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import CarCardComponent from '../../../components/carCard/CarCardComponent';
import di from '../../../../../di/DependencyInjection';
import SearchCarsUseCase, { SearchCarsUseCaseName } from '../../../../../domain/use_cases/car/SearchCarsUseCase';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import OrderByEntity from '../../../../../domain/entities/OrderByEntity';
import FilterComponent from './components/filterComponent/FilterComponent';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Icons from '../../../assets/Icons';
import DeleteFilterComponent from './components/deleteComponent/DeleteFilterComponent';

const orderingOptions: OrderByEntity[] = [
    {
        label: 'Relevancia',
        value: {
            keyname: 'relevanece',
            desc: true
        },
    },
    {
        label: 'Reciente',
        value: {
            keyname: 'created_at',
            desc: true,
        }
    }
];

const BuyYourCarPage: FC<{}> = () => {
    const formFunctions = useForm()
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = formFunctions;

    const [cars, setCars] = useState<CarEntity[] | undefined>(undefined);
    const [page, setPage] = useState<number>(1);
    const [openFilters, setOpenFilters] = useState<boolean>(true);
    const [openOrderBy, setOpenOrderBy] = useState(false);
    const [maxPages, setMaxPages] = useState<number>(1);

    const _handleSearch = async (data: any) => {
        try {
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
            setCars(undefined);
            const response = await di.get<SearchCarsUseCase>(SearchCarsUseCaseName).call(page, data.search, data.brand_id, data.year, data.price, data.type_vehcile_id, data.type_transmission, data.tag_id, data.km, data.type_fuel_id, data.color_id, data.plate_number, data.orderBy);
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

    const _handlePickOrderBy = (orderByValue: OrderByEntity) => {
        setOpenOrderBy(false);
        setValue('orderBy', orderByValue.value);
    }

    useEffect(() => {
        _handleSearch({});
    }, [page]);


    return <Layout>
        <form onSubmit={handleSubmit(_handleSearch)}>
            <div className="w-100 position-relative buy_your_car_page bg_gray">
                <div className="w-100 car_search bg_search py-3">
                    <div className="container d-flex flex-column flex-md-row px-md-5 justify-content-between align-items-center">
                        <div className="input_search">
                            <img src="/assets/icons/search.svg" className='text_orange' alt="" />
                            <input type="text" placeholder='Buscar por marca, modelo, color...' />
                        </div>
                        <div className="order_by_container my-3 my-md-0">
                            <Dropdown isOpen={openOrderBy} toggle={() => setOpenOrderBy(!openOrderBy)}>
                                <DropdownToggle caret>
                                    Ordenar por: <strong className='order_button hover'>{orderingOptions.find((orderItem) => orderItem.value.keyname == watch('orderBy')?.keyname && orderItem.value.desc == watch('orderBy')?.desc)?.label ?? orderingOptions?.[0]?.label ?? ''}</strong>
                                </DropdownToggle>

                                <DropdownMenu>
                                    {orderingOptions.map((option, index) => (
                                        <DropdownItem
                                            key={index}
                                            active={watch('orderBy') === option.value}
                                            onClick={() => _handlePickOrderBy(option)}
                                        >
                                            {option.label}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="car_list from_left_3  container">
                    <div className="row">
                        <div className={`col-md-4 col-lg-3 ${openFilters ? 'bg_white' : ''}`}>
                            {!openFilters && <div className="side_filter hover" onClick={() => setOpenFilters(!openFilters)}>
                                filtro
                            </div>
                            }
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="w-100 filters d-flex justify-content-between">
                                <div className="d-flex flex-grow-1">
                                    <DeleteFilterComponent formFunctions={formFunctions} />
                                </div>
                                <div className="btn btn_light" onClick={_handleClearFilters}>
                                    <Icons.Trash /> Limpiar filtros
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`bg_white ${openFilters ? 'col-md-4 col-lg-3' : 'd-none'}`}>
                            <FilterComponent formFunctions={formFunctions} isOpen={openFilters} setIsOpen={setOpenFilters} />
                        </div>
                        <div className={`${openFilters ? 'col-md-8 col-lg-9' : 'col-md-12'} container_cars`}>
                            <div className="row">
                                {cars == undefined && <LoadingComponent />}
                                {cars != undefined && cars.length == 0 && <NotResultsComponent />}
                                {cars != undefined && cars.length > 0 && cars.map((car, index) => <div className={`mb-3 ${openFilters ? 'col-md-12 col-lg-3 col-xl-4' : 'col-md-4 col-xl-3'}`} key={index}>
                                    <CarCardComponent car={car} />
                                </div>)}
                            </div>
                            {maxPages > 1 && <div className="w-100 d-flex justify-content-center my-3">
                                <div className="d-none d-md-flex me-3">
                                    <div className={`arrow_slider previous me-1 ${page <= 1 ? 'disabled' : ''}`}>
                                        <AiOutlineArrowLeft onClick={_handlePreviousPage} />
                                    </div>
                                    <div>
                                        {page} de {maxPages}
                                    </div>
                                    <div className={`arrow_slider next ms-1 ${page >= maxPages - 1 ? 'disabled' : ''}`}>
                                        <AiOutlineArrowRight onClick={_handleNextPage} />
                                    </div>
                                </div>
                            </div>}

                        </div>

                    </div>

                </div>
            </div>
        </form>
    </Layout>
}

export default BuyYourCarPage;