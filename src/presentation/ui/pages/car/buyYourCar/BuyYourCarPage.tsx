import './BuyYourCarStyles.scss';
import { FC, useContext, useEffect, useState } from "react";
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
import { useParams } from 'react-router-dom';
import TypeVehicleContext from '../../../../../domain/providers/typeVehicle/TypeVehicleContext';
import TypeVehicleContextType from '../../../../../domain/providers/typeVehicle/TypeVehicleContextType';
import { Helmet } from 'react-helmet-async';
import BrandContext from '../../../../../domain/providers/brand/BrandContext';
import BrandContextType from '../../../../../domain/providers/brand/BrandContextType';
import ColorContext from '../../../../../domain/providers/color/ColorContext';
import ColorContextType from '../../../../../domain/providers/color/ColorContextType';
import TagContext from '../../../../../domain/providers/tag/TagContext';
import TagContextType from '../../../../../domain/providers/tag/TagContextType';
import TypeOfFuelContext from '../../../../../domain/providers/typeOfFuel/TypeOfFuelContext';
import TypeOfFuelContextType from '../../../../../domain/providers/typeOfFuel/TypeOfFuelContextType';

const orderingOptions: OrderByEntity[] = [
    {
        label: 'Relevancia',
        value: {
            keyname: 'relevance',
            desc: undefined,
        },
    },
    {
        label: 'Mayor precio',
        value: {
            keyname: 'price',
            desc: true,
        }
    },
    {
        label: 'Menor precio',
        value: {
            keyname: 'price',
            desc: false,
        }
    }
];

const BuyYourCarPage: FC<{}> = () => {
    const formFunctions = useForm()
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch, getValues } = formFunctions;
    const { typeVehicles } = useContext(TypeVehicleContext) as TypeVehicleContextType;
    const { typeVehicleName } = useParams();
    const { brands } = useContext(BrandContext) as BrandContextType;

    const [cars, setCars] = useState<CarEntity[] | undefined>(undefined);
    const [page, setPage] = useState<number>(1);
    const [openFilters, setOpenFilters] = useState<boolean>(document.body.clientWidth > 968);
    const [openOrderBy, setOpenOrderBy] = useState(false);
    const [maxPages, setMaxPages] = useState<number>(1);


    const brand = brands.find(brand => brand.id === watch('brand_id'));
    const model = watch('model');
    const year = watch('year');
    const price = watch('price');
    const typeVehicleId = watch('type_vehcile_id');
    const transmission = watch('type_transmission');
    const tagId = watch('tag_id');
    const rangeMileage = watch('km');
    const fuelId = watch('type_fuel_id');
    const colorId = watch('color_id');
    const plateNumber = watch('plate_number');
    const orderBy = watch('orderBy');

    //searcher filters
    useEffect(() => {
        setPage(1);
        _handleSearch();
    }, [brand, model, year, typeVehicleId, transmission, tagId, fuelId, colorId, plateNumber, page,  orderBy])

    const [isTimerActive, setIsTimerActive] = useState(false);
    let timer: NodeJS.Timeout | null = null; // Inicializa el temporizador

    useEffect(() => {
        if (isTimerActive) {
            timer = setTimeout(() => {
                console.log('Temporizador finalizado');
                _handleSearch(); // Llama a la función _handleSearch después del tiempo especificado
            }, 500);
        } else if (timer !== null) {
            clearTimeout(timer); // Detener el temporizador si isTimerActive cambia a false
        }

        return () => {
            if (timer !== null) {
                clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o isTimerActive cambia
            }
        };
    }, [isTimerActive]);



    const handleToggleTimer = () => {
        setIsTimerActive((prevState) => !prevState); // Iniciar o reiniciar el temporizador
    };

    useEffect(() => {
        handleToggleTimer();
    }, [price?.min, price?.max, rangeMileage?.min, rangeMileage?.max,])


    const _handleChangeTypeVehicle = () => {
        setValue('type_vehcile_id', typeVehicles.find((typeVehicle) => typeVehicle.name == typeVehicleName)?.id);
    }

    useEffect(() => {
        _handleChangeTypeVehicle();
    }, [typeVehicleName])

    const _handleSearch = async () => {
        try {
            const data = formFunctions.getValues();
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
            setCars(undefined);
            const response = await di.get<SearchCarsUseCase>(SearchCarsUseCaseName).call(page, data.search, data.brand_id, data.model, data.year, data.price, data.type_vehcile_id, data.type_transmission, data.tag_id, data.km, data.type_fuel_id, data.color_id, data.plate_number, data.orderBy);
            setCars(response.cars);
            setMaxPages(response.maxPages);
        } catch (error) {
            setCars([]);
        }
    }

    const _handleOnSubmit = async (data: any) => {
        _handleSearch();
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
    }

    const _handlePickOrderBy = (orderByValue: OrderByEntity) => {
        setOpenOrderBy(false);
        if (watch('orderBy') == orderByValue) return;
        setValue('orderBy', orderByValue);
        setPage(1);
    }


    return <Layout>
        <Helmet>
            <title>Compra tu Carro - wcar</title>
            <meta name='description' content='Compra tu carro usado de forma fácil y segura con Wcar' />
            <meta name='keywords' content='Compra o vende tu carro en Colombia, Vende tu carro en Colombia, Compra tu carro en Colombia, consejos para comprar carros usados en colombia, consejos para vender carros usados en colombia' />
        </Helmet>
        <form onSubmit={handleSubmit(_handleOnSubmit)}>
            <div className="w-100 position-relative buy_your_car_page bg_gray">
                <div className="w-100 car_search bg_search py-3">
                    <div className="container d-flex flex-column flex-md-row px-md-5 justify-content-between align-items-center">
                        <div className="input_search">
                            <img src="/assets/icons/search.svg" className='text_orange' alt="Wcar" title="Wcar" />
                            <input type="text" placeholder='Buscar por marca, modelo, color...' {...register('search')} />
                        </div>
                        <div className="order_by_container my-3 my-md-0 d-none d-md-block">
                            <Dropdown isOpen={openOrderBy} className='' toggle={() => window.screen.width >= 768 ? setOpenOrderBy(!openOrderBy) : null}>
                                <DropdownToggle caret>
                                    Ordenar por: <strong className='order_button hover'>{orderingOptions.find((orderItem) => orderItem.value?.keyname == watch('orderBy')?.value?.keyname && orderItem.value?.desc == watch('orderBy')?.value?.desc)?.label ?? orderingOptions?.[0]?.label ?? ''}</strong>
                                </DropdownToggle>

                                <DropdownMenu>
                                    {orderingOptions.map((option, index) => (
                                        <DropdownItem
                                            key={index}
                                            active={watch('orderBy') === option}
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
                        <div className={`bg_white mb-5 mb-md-0 ${openFilters ? 'col-md-4 col-lg-3' : 'd-none'}`}>
                            <FilterComponent formFunctions={formFunctions} isOpen={openFilters} setIsOpen={setOpenFilters} />
                        </div>
                        <div className={` ${openFilters ? 'col-md-8 col-lg-9' : 'col-md-12'} container_cars`}>
                            <div className="d-none d-md-flex justify-content-between">
                                {!openFilters && <div className='mt-1'>
                                    <div className="btn btn_light me-3 mt-2" onClick={() => setOpenFilters(true)}>
                                        <img src="/assets/icons/filter.svg" alt="Wcar" title="Wcar" />
                                        <span className="ms-2">
                                            Filtrar
                                        </span>
                                    </div>
                                </div>}
                                <div className="flex-grow-1">
                                    <DeleteFilterComponent formFunctions={formFunctions} onChange={_handleSearch} />
                                </div>
                                <div>
                                    <div className="btn btn_light mt-2" onClick={_handleClearFilters}>
                                        <Icons.Trash /> Limpiar filtros
                                    </div>

                                </div>

                            </div>
                            <div className="d-block d-md-none justify-content-between">
                                {!openFilters && <div className='mt-1 d-flex justify-content-between'>
                                    <div className="btn btn_light me-3 mt-2" onClick={() => setOpenFilters(true)}>
                                        <img src="/assets/icons/filter.svg" alt="Wcar" title="Wcar" />
                                        <span className="ms-2">
                                            Filtrar
                                        </span>
                                    </div>
                                    <Dropdown isOpen={openOrderBy} className='' toggle={() => window.screen.width < 768 ? setOpenOrderBy(!openOrderBy) : null}>
                                        <DropdownToggle className='btn btn_light mt-2'>
                                            Ordenar por: <strong className='order_button hover'>{orderingOptions.find((orderItem) => orderItem.value?.keyname == watch('orderBy')?.value?.keyname && orderItem.value?.desc == watch('orderBy')?.value?.desc)?.label ?? orderingOptions?.[0]?.label ?? ''}</strong>
                                        </DropdownToggle>

                                        <DropdownMenu>
                                            {orderingOptions.map((option, index) => (
                                                < DropdownItem
                                                    key={index}
                                                    active={watch('orderBy') === option}
                                                    onClick={() => _handlePickOrderBy(option)}                                                >
                                                    {option.label}
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>}
                                <div className="flex-grow-1">
                                    <DeleteFilterComponent formFunctions={formFunctions} onChange={_handleSearch} />
                                </div>
                            </div>

                            <div className="row">
                                {cars == undefined && <LoadingComponent />}
                                {cars != undefined && cars.length == 0 && <NotResultsComponent />}
                                {cars != undefined && cars.length > 0 && cars.map((car, index) => <div className={`mb-3 ${openFilters ? 'col-md-12 col-lg-6 col-xl-4' : 'col-md-4 col-xl-3'}`} key={index}>
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
            </div >
        </form >
    </Layout >
}

export default BuyYourCarPage;