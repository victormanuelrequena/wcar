import "./BuyYourCarStyles.scss";
import React, { FC, useContext, useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { useForm } from "react-hook-form";
import { IoMdTrash } from "react-icons/io";
import CarEntity from "../../../../../domain/entities/CarEntity";
import NotResultsComponent from "../../../components/notResults/NotResultsComponent";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";
import CarCardComponent from "../../../components/carCard/CarCardComponent";
import di from "../../../../../di/DependencyInjection";
import SearchCarsUseCase, { SearchCarsUseCaseName } from "../../../../../domain/use_cases/car/SearchCarsUseCase";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import OrderByEntity from "../../../../../domain/entities/OrderByEntity";
import FilterComponent from "./components/filterComponent/FilterComponent";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Icons from "../../../assets/Icons";
import DeleteFilterComponent from "./components/deleteComponent/DeleteFilterComponent";
import { useLocation, useParams } from "react-router-dom";
import TypeVehicleContext from "../../../../../domain/providers/typeVehicle/TypeVehicleContext";
import TypeVehicleContextType from "../../../../../domain/providers/typeVehicle/TypeVehicleContextType";
import { Helmet } from "react-helmet-async";
import BrandContext from "../../../../../domain/providers/brand/BrandContext";
import BrandContextType from "../../../../../domain/providers/brand/BrandContextType";
import ColorContext from "../../../../../domain/providers/color/ColorContext";
import ColorContextType from "../../../../../domain/providers/color/ColorContextType";
import TagContext from "../../../../../domain/providers/tag/TagContext";
import TagContextType from "../../../../../domain/providers/tag/TagContextType";
import TypeOfFuelContext from "../../../../../domain/providers/typeOfFuel/TypeOfFuelContext";
import TypeOfFuelContextType from "../../../../../domain/providers/typeOfFuel/TypeOfFuelContextType";
import AccordeonComponent from "../../../components/accordeon/AccordeonComponent";
import SeoDropdown from "./components/seoDropdown/SeoDropdown";

const orderingOptions: OrderByEntity[] = [
    {
        label: "Relevancia",
        value: {
            keyname: "relevance",
            desc: undefined,
        },
    },
    {
        label: "Mayor precio",
        value: {
            keyname: "price",
            desc: true,
        },
    },
    {
        label: "Menor precio",
        value: {
            keyname: "price",
            desc: false,
        },
    },
];

const contentList: { title: string; content: string | React.ReactNode; type: string }[] = [
    {
        title: "Camionetas Usadas",
        content: "",
        type: "h1",
    },
    {
        title: "Camionetas Usadas Colombia",
        content: (
            <p>
                En wcar entendemos que la elección de una camioneta usada de calidad es una decisión importante para
                nuestros clientes en Colombia. Es por eso que nos enorgullece ofrecer una amplia gama de camionetas de
                todos los matices, cómodas, de lujo, con platón, híbridas, exclusivas, comerciales que cumplen con los
                más altos estándares de calidad y confiabilidad. Nuestra selección incluye marcas reconocidas como
                Chevrolet, Renault, Mercedes Benz, BMW y Toyota entre otras, garantizando que nuestros clientes
                encuentren la camioneta de sus sueños. Compra tu Camioneta
            </p>
        ),
        type: "h2",
    },
    {
        title: "Camioneta Chevrolet y Toyota Colombia: Las mejores opciones en camionetas usadas en Colombia",
        content: (
            <p>
                En wcar, sabemos que Chevrolet y Toyota son dos de las marcas más populares y confiables en el mercado
                de camionetas usadas en Colombia. Nuestra colección de camionetas Chevrolet ofrece modelos emblemáticos
                como la Chevrolet Montana, conocida por su versatilidad y rendimiento excepcional. También contamos con
                una amplia selección de camionetas Toyota, que son reconocidas por su durabilidad y capacidad todo
                terreno. Además, ofrecemos modelos 4×4 para aquellos que buscan aventuras fuera de la carretera.
            </p>
        ),
        type: "h2",
    },
    {
        title: "Chevrolet Montana",
        content: (
            <p>
                Una de las camionetas con más crecimiento en ventas en el 2023, una pickup con un diseño y estilo único
                que enamora a los usuarios clásicos de Chevrolet y cumple a cabalidad con su función utilitaria y más la
                Chevrolet Montana llega con toda al país.
            </p>
        ),
        type: "h3",
    },
    {
        title: "Ford en Colombia: Calidad y rendimiento garantizados",
        content: (
            <p>
                Ford es otra marca de renombre en el mercado de camionetas usadas en Colombia, y en wcar nos aseguramos
                de ofrecer una variedad de modelos de alta calidad de esta reconocida marca. Si estás buscando una
                camioneta potente y resistente, las camionetas Ford, incluyendo la popular Ford Raptor, son una opción
                excelente. Estos vehículos están diseñados para soportar condiciones difíciles y ofrecen un rendimiento
                excepcional en cualquier terreno.
            </p>
        ),
        type: "h3",
    },
];

const contentList2: { title: string; content: string | React.ReactNode; type: string }[] = [
    {
        title: "Camionetas con platón: Espacio y versatilidad",
        content: (
            <p>
                Entendemos que algunos clientes necesitan una camioneta con espacio adicional para transportar carga. En
                wcar, contamos con una selección de camionetas con platón que ofrecen la combinación perfecta de
                capacidad de carga y confort. Estos vehículos son ideales para aquellos que necesitan transportar
                mercancías o equipos, brindando la versatilidad necesaria para enfrentar cualquier desafío. Entendemos
                que algunos clientes necesitan una camioneta con espacio adicional para transportar carga. En wcar,
                contamos con una selección de camionetas con platón que ofrecen la combinación perfecta de capacidad de
                carga y confort. Estos vehículos son ideales para aquellos que necesitan transportar mercancías o
                equipos, brindando la versatilidad necesaria para enfrentar cualquier desafío.
            </p>
        ),
        type: "h2",
    },
    {
        title: "Camionetas chinas: Calidad a precios accesibles",
        content: (
            <p>
                Además de las marcas reconocidas, también ofrecemos camionetas chinas de alta calidad a precios
                accesibles. Estos vehículos ofrecen una excelente relación calidad-precio y son una opción popular entre
                aquellos que buscan una opción económica sin comprometer la calidad y el rendimiento. Nuestro equipo de
                expertos en WCar selecciona cuidadosamente las camionetas chinas disponibles para asegurarse de ofrecer
                a nuestros clientes solo productos confiables y duraderos.
            </p>
        ),
        type: "h2",
    },
    {
        title: "Camionetas usadas Bogotá, encuentra la perfecta para ti",
        content: (
            <p>
                No importa dónde te encuentres en Colombia, en WCar estamos comprometidos a ayudarte a encontrar la
                camioneta usada perfecta. Nuestro servicio de ventas abarca todo el país, y si te encuentras en Bogotá,
                ofrecemos una amplia variedad de camionetas usadas disponibles en la capital. Nuestra página web fácil
                de usar te permite buscar por ubicación, marca, modelo y más, para que encuentres la camioneta adecuada
                de manera rápida y sencilla.
            </p>
        ),
        type: "h2",
    },
    {
        title: "Experiencia y compromiso en la venta de camionetas usadas",
        content: (
            <p>
                En wcar, contamos con años de experiencia en la venta de camionetas usadas en Colombia. Nuestro equipo
                de profesionales está dedicado a brindar un servicio excepcional y asesoramiento experto a nuestros
                clientes. Nos esforzamos por ofrecer transparencia en cada paso del proceso de compra, desde la
                selección hasta la entrega. Tu satisfacción es nuestra máxima prioridad.
            </p>
        ),
        type: "h2",
    },
    {
        title: "¡Descubre la mejor selección de Camionetas Usadas en Colombia en WCar!",
        content: (
            <p>
                No pierdas la oportunidad de adquirir la camioneta usada de tus sueños en WCar. Explora nuestra amplia
                selección de camionetas de lujo, incluyendo marcas como Chevrolet, Toyota y Ford. También tenemos
                opciones de camionetas con platón y modelos chinos de calidad. Visita nuestra página web y encuentra la
                camioneta perfecta para ti en Bogotá o en cualquier parte de Colombia. ¡Te esperamos en WCar!
            </p>
        ),
        type: "h2",
    },
];

const BuyYourCarPageUsedTrucks: FC<{}> = () => {
    const formFunctions = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
        getValues,
    } = formFunctions;
    const { typeVehicles } = useContext(TypeVehicleContext) as TypeVehicleContextType;
    const { typeVehicleName } = useParams();
    const { brands } = useContext(BrandContext) as BrandContextType;
    const queryParams = new URLSearchParams(window.location.search);
    const location = useLocation();

    const [cars, setCars] = useState<CarEntity[] | undefined>(undefined);
    const [page, setPage] = useState<number>(1);
    const [openFilters, setOpenFilters] = useState<boolean>(document.body.clientWidth > 968);
    const [openOrderBy, setOpenOrderBy] = useState(false);
    const [maxPages, setMaxPages] = useState<number>(1);

    const brand = brands.find((brand) => brand.name === queryParams.get("brand"));
    const model = watch("model");
    const year = queryParams.get("year") ? queryParams.get("year") : watch("year");
    const price = watch("price");
    const typeVehicleId = queryParams.get("type_vehicle") ? queryParams.get("type_vehicle") : watch("type_vehcile_id");
    const transmission = watch("type_transmission");
    const tagId = queryParams.get("tag") ? queryParams.get("tag") : watch("tag_id");
    const rangeMileage = watch("km");
    const fuelId = queryParams.get("typeOfFuels") ? queryParams.get("typeOfFuels") : watch("type_fuel_id");
    const colorId = queryParams.get("color") ? queryParams.get("color") : watch("color_id");
    const plateNumber = queryParams.get("plate") ? queryParams.get("plate") : watch("plate_number");
    const orderBy = watch("orderBy");

    //searcher filters
    useEffect(() => {
        setPage(1);
        _handleSearch();
    }, [brand, model, year, typeVehicleId, transmission, tagId, fuelId, colorId, plateNumber, orderBy]);

    useEffect(() => {
        _handleSearch();
    }, [page]);
    useEffect(() => {
        setValue("year", queryParams.get("year"));
        setValue("brand_id", queryParams.get("brand"));
        setValue("model", queryParams.get("model"));
        // setValue("price", queryParams.get("price"));
        setValue("type_vehicle_id", queryParams.get("type_vehicle"));
        setValue("type_transmission", queryParams.get("transmission"));
        setValue("tag_id", queryParams.get("tag"));
        // setValue("km", queryParams.get("km"));
        setValue("type_fuel_id", queryParams.get("typeOfFuels"));
        setValue("color_id", queryParams.get("color"));
        setValue("plate_number", queryParams.get("plate"));
        // setValue("orderBy", queryParams.get("orderBy"));
    }, []);

    const [isTimerActive, setIsTimerActive] = useState(false);
    let timer: NodeJS.Timeout | null = null; // Inicializa el temporizador

    useEffect(() => {
        if (isTimerActive) {
            timer = setTimeout(() => {
                console.log("Temporizador finalizado");
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
    }, [price?.min, price?.max, rangeMileage?.min, rangeMileage?.max]);

    const _handleChangeTypeVehicle = () => {
        setValue("type_vehcile_id", typeVehicles.find((typeVehicle) => typeVehicle.name == typeVehicleName)?.id);
    };

    useEffect(() => {
        _handleChangeTypeVehicle();
    }, [typeVehicleName]);

    const _handleSearch = async () => {
        try {
            const data = formFunctions.getValues();
            window.scrollTo({
                top: 0,
                behavior: "auto",
            });
            setCars(undefined);
            const response = await di
                .get<SearchCarsUseCase>(SearchCarsUseCaseName)
                .call(
                    page,
                    data.search,
                    data.brand_id,
                    data.model?.id,
                    data.year,
                    data.price,
                    data.type_vehcile_id,
                    data.type_transmission,
                    data.tag_id,
                    data.km,
                    data.type_fuel_id,
                    data.color_id,
                    data.plate_number,
                    data.orderBy
                );
            setCars(response.cars);
            setMaxPages(response.maxPages);
        } catch (error) {
            setCars([]);
        }
    };

    const _handleOnSubmit = async (data: any) => {
        _handleSearch();
    };

    const _handleNextPage = async () => {
        setPage(page + 1);
    };

    const _handlePreviousPage = async () => {
        setPage(page - 1);
    };

    const _handleClearFilters = async () => {
        reset();
        setPage(1);
    };

    const _handlePickOrderBy = (orderByValue: OrderByEntity) => {
        setOpenOrderBy(false);
        if (watch("orderBy") == orderByValue) return;
        setValue("orderBy", orderByValue);
        setPage(1);
    };

    // useEffect para establecer el filtro de camionetas usadas por defecto en la pagina de camionetas usadas
    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === "/compra-tu-carro/camionetas-usadas") {
            console.log("Se ejecuta");
            setValue("type_vehcile_id", "8");
        }
    }, [location]);

    return (
        <Layout>
            <Helmet>
                <title>Compra tu Carro - wcar</title>
                <meta name="description" content="Compra tu carro usado de forma fácil y segura con Wcar" />
                <meta
                    name="keywords"
                    content="Compra o vende tu carro en Colombia, Vende tu carro en Colombia, Compra tu carro en Colombia, consejos para comprar carros usados en colombia, consejos para vender carros usados en colombia"
                />
            </Helmet>
            <form onSubmit={handleSubmit(_handleOnSubmit)}>
                <div className="w-100 position-relative buy_your_car_page bg_gray">
                    <div className="w-100 car_search bg_search py-3">
                        <div className="container d-flex flex-column flex-md-row px-md-5 justify-content-between align-items-center">
                            <div className="input_search">
                                <img src="/assets/icons/search.svg" className="text_orange" alt="Wcar" title="Wcar" />
                                <input
                                    type="text"
                                    placeholder="Buscar por marca, modelo, color..."
                                    {...register("search")}
                                />
                            </div>
                            <div className="order_by_container my-3 my-md-0 d-none d-md-block">
                                <Dropdown
                                    isOpen={openOrderBy}
                                    className=""
                                    toggle={() => (window.screen.width >= 768 ? setOpenOrderBy(!openOrderBy) : null)}
                                >
                                    <DropdownToggle caret>
                                        Ordenar por:{" "}
                                        <strong className="order_button hover">
                                            {orderingOptions.find(
                                                (orderItem) =>
                                                    orderItem.value?.keyname == watch("orderBy")?.value?.keyname &&
                                                    orderItem.value?.desc == watch("orderBy")?.value?.desc
                                            )?.label ??
                                                orderingOptions?.[0]?.label ??
                                                ""}
                                        </strong>
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        {orderingOptions.map((option, index) => (
                                            <DropdownItem
                                                key={index}
                                                active={watch("orderBy") === option}
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
                    <div className="car_list from_left_2">
                        <div className="row">
                            <div className={`bg_white mb-5 mb-md-0 ${openFilters ? "col-md-4 col-lg-3" : "d-none"}`}>
                                <div className="position-sticky top-0 pe-2 scroll-filter">
                                    <FilterComponent
                                        formFunctions={formFunctions}
                                        isOpen={openFilters}
                                        setIsOpen={setOpenFilters}
                                    />
                                </div>
                            </div>
                            <div className={` ${openFilters ? "col-md-8 col-lg-9" : "col-md-12"} container_cars`}>
                                <div className="d-none d-md-flex justify-content-between">
                                    {!openFilters && (
                                        <div className="mt-1">
                                            <div
                                                className="btn btn_light me-3 mt-2"
                                                onClick={() => setOpenFilters(true)}
                                            >
                                                <img src="/assets/icons/filter.svg" alt="Wcar" title="Wcar" />
                                                <span className="ms-2">Filtrar</span>
                                            </div>
                                        </div>
                                    )}
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
                                    {!openFilters && (
                                        <div className="mt-1 d-flex justify-content-between">
                                            <div
                                                className="btn btn_light me-3 mt-2"
                                                onClick={() => setOpenFilters(true)}
                                            >
                                                <img src="/assets/icons/filter.svg" alt="Wcar" title="Wcar" />
                                                <span className="ms-2">Filtrar</span>
                                            </div>
                                            <Dropdown
                                                isOpen={openOrderBy}
                                                className=""
                                                toggle={() =>
                                                    window.screen.width < 768 ? setOpenOrderBy(!openOrderBy) : null
                                                }
                                            >
                                                <DropdownToggle className="btn btn_light mt-2">
                                                    Ordenar por:{" "}
                                                    <strong className="order_button hover">
                                                        {orderingOptions.find(
                                                            (orderItem) =>
                                                                orderItem.value?.keyname ==
                                                                    watch("orderBy")?.value?.keyname &&
                                                                orderItem.value?.desc == watch("orderBy")?.value?.desc
                                                        )?.label ??
                                                            orderingOptions?.[0]?.label ??
                                                            ""}
                                                    </strong>
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    {orderingOptions.map((option, index) => (
                                                        <DropdownItem
                                                            key={index}
                                                            active={watch("orderBy") === option}
                                                            onClick={() => _handlePickOrderBy(option)}
                                                        >
                                                            {option.label}
                                                        </DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    )}
                                    <div className="flex-grow-1">
                                        <DeleteFilterComponent formFunctions={formFunctions} onChange={_handleSearch} />
                                    </div>
                                </div>

                                <div className="row">
                                    {cars == undefined && <LoadingComponent />}
                                    {cars != undefined && cars.length == 0 && <h5>NO HAY RESULTADOS</h5>}
                                    {cars != undefined &&
                                        cars.length > 0 &&
                                        cars.map((car, index) => (
                                            <div
                                                className={`mb-3 ${
                                                    openFilters ? "col-md-12 col-lg-6 col-xl-4" : "col-md-4 col-xl-3"
                                                }`}
                                                key={index}
                                            >
                                                <CarCardComponent car={car} />
                                            </div>
                                        ))}
                                </div>
                                {maxPages > 1 && (
                                    <div className="w-100 d-flex justify-content-center align-items-center my-3 ">
                                        <div className=" d-md-flex me-3 d-flex">
                                            <div
                                                className={`arrow_slider previous me-1 ${page <= 1 ? "disabled" : ""}`}
                                            >
                                                <AiOutlineArrowLeft size={20} onClick={_handlePreviousPage} />
                                            </div>
                                            <p className="d-flex align-items-center fs-6 px-2">
                                                {page} de {maxPages}
                                            </p>
                                            <div
                                                className={`arrow_slider next ms-1 ${
                                                    page >= maxPages - 1 ? "disabled" : ""
                                                }`}
                                            >
                                                <AiOutlineArrowRight size={20} onClick={_handleNextPage} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="my-6 pt-4 container container-drop" style={{ marginTop: "80px", marginBottom: "40px" }}>
                <SeoDropdown
                    options={contentList.map((content) => {
                        return {
                            title: content.title,
                            content: content.content,
                            typeElement: content.type,
                        };
                    })}
                />
                <SeoDropdown
                    options={contentList2.map((content) => {
                        return {
                            title: content.title,
                            content: content.content,
                            typeElement: content.type,
                        };
                    })}
                />
            </div>
        </Layout>
    );
};

export default BuyYourCarPageUsedTrucks;
