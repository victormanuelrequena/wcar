import "./BuyYourCarStyles.scss";
import { FC, useContext, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
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
import SeoDropdown from "./components/seoDropdown/SeoDropdown";
import {
    contentListHybridCarSeo,
    contentListHybridCarSeo2,
    contentListUsedTrucksSeo,
    contentListUsedTrucksSeo2,
} from "./constants";
import BannerYourCar from "./components/banner/BannerYourCar";
import { useNavigate } from "react-router-dom";
import BrandEntity from "../../../../../domain/entities/BrandEntity";

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

const BuyYourCarPage: FC<{}> = () => {
    const navigate = useNavigate();
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
    const { colors } = useContext(ColorContext) as ColorContextType;
    const { tags } = useContext(TagContext) as TagContextType;
    const { typeOfFuels } = useContext(TypeOfFuelContext) as TypeOfFuelContextType;
    const queryParams = new URLSearchParams(window.location.search);

    const [cars, setCars] = useState<CarEntity[] | undefined>(undefined);
    const [page, setPage] = useState<number>(queryParams.get("page") ? Number(queryParams.get("page")) : 1);
    const [openFilters, setOpenFilters] = useState<boolean>(document.body.clientWidth > 968);
    const [openOrderBy, setOpenOrderBy] = useState(false);
    const [maxPages, setMaxPages] = useState<number>(1);

    const brand = brands.find((brand) => brand.name === queryParams.get("brand"));
    const model = watch("model");
    const year = queryParams.get("year") ? queryParams.get("year") : watch("year");
    const price = watch("price");
    const typeVehicleId = queryParams.get("type_vehicle") ? queryParams.get("type_vehicle") : watch("type_vehcile_id");
    let transmission = watch("type_transmission");
    if (watch("type_transmission") == 1 || watch("type_transmission") == 0) {
        transmission = watch("type_transmission") == "1" ? "Automática" : "Manual";
    }
    console.log(transmission, "transmission");
    const tagId = queryParams.get("tag") ? queryParams.get("tag") : watch("tag_id");
    const rangeMileage = watch("km");
    const fuelId = queryParams.get("typeOfFuels") ? queryParams.get("typeOfFuels") : watch("type_fuel_id");
    const colorId = queryParams.get("color") ? queryParams.get("color") : watch("color_id");
    const plateNumber = queryParams.get("plate") ? queryParams.get("plate") : watch("plate_number");
    const orderBy = watch("orderBy");

    //searcher filters
    useEffect(() => {
        setPage(queryParams.get("page") ? Number(queryParams.get("page")) : 1);
        _handleSearch();
    }, [brand, model, year, typeVehicleId, transmission, tagId, fuelId, colorId, plateNumber, orderBy]);

    useEffect(() => {
        _handleSearch();
    }, [page]);

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

    // const _handleChangeTypeVehicle = () => {
    //     setValue("type_vehcile_id", typeVehicles.find((typeVehicle) => typeVehicle.name == typeVehicleName)?.id);
    // };

    // useEffect(() => {
    //     _handleChangeTypeVehicle();
    //     console.log(typeVehicleName, "typeVehicleName");
    // }, [typeVehicleName]);

    const _handleSearch = async () => {
        try {
            setValue("year", queryParams.get("year"));
            setValue("plate_number", queryParams.get("plate"));
            // setValue("model", queryParams.get("model"));
            // setValue("price", queryParams.get("price"));
            // setValue("type_vehcile_id", queryParams.get("type_vehicle"));
            setValue("type_transmission", queryParams.get("transmission"));
            if (queryParams.get("transmission") == "1" || queryParams.get("transmission") == "0") {
                setValue("type_transmission", queryParams.get("transmission") == "1" ? "Automática" : "Manual");
                console.log("Paso");
            }

            console.log(queryParams.get("transmission"), "transmission");
            setValue("tag_id", queryParams.get("tag"));
            // setValue("km", queryParams.get("km"));
            setValue("type_fuel_id", queryParams.get("typeOfFuels"));
            setValue("color_id", queryParams.get("color"));
            setValue("plate_number", queryParams.get("plate"));
            // setValue("orderBy", queryParams.get("orderBy"));
            const brandQuery: any = brands.filter((item: any) => item.name == queryParams.get("brand"));
            setValue("brand_id", brandQuery[0]?.id ? brandQuery[0].id : "");
            const typeQuery: any = typeVehicles.filter((item: any) => item.name == queryParams.get("type_vehicle"));
            setValue("type_vehcile_id", typeQuery[0]?.id ? typeQuery[0].id : "");
            if (watch("type_vehcile_id") == 8) setValue("type_vehcile_id", 8);
            const colorQuery: any = colors.filter((item: any) => item.name == queryParams.get("color"));
            setValue("color_id", colorQuery[0]?.id ? colorQuery[0].id : "");
            const tagQuery: any = tags.filter((item: any) => item.name == queryParams.get("tag"));
            setValue("tag_id", tagQuery[0]?.id ? tagQuery[0].id : "");

            const typeFuelsQuery: any = typeOfFuels.filter((item: any) => item.name == queryParams.get("typeOfFuels"));
            setValue("type_fuel_id", typeFuelsQuery[0]?.id ? typeFuelsQuery[0].id : "");

            const data = formFunctions.getValues();
            console.log(data, "data filter");
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
                    data.orderBy,
                    data.claims,
                    data.amount_claims,
                    data.warranty,
                    data.type_warranty
                );
            setCars(response.cars);
            setMaxPages(response.maxPages);
            window.scrollTo({
                top: 0,
                behavior: "auto",
            });
        } catch (error) {
            setCars([]);
        }
    };

    const _handleOnSubmit = async (data: any) => {
        _handleSearch();
    };

    const _handleNextPage = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        queryParams.set("page", nextPage.toString());
        window.history.replaceState(null, "", "?" + queryParams.toString());
        document.querySelector(".content_app").scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const _handlePreviousPage = async () => {
        const previousPage = page - 1;
        setPage(previousPage);
        queryParams.set("page", previousPage.toString());
        window.history.replaceState(null, "", "?" + queryParams.toString());
        document.querySelector(".content_app").scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const _handleClearFilters = async () => {
        reset();
        setPage(1);
        navigate("/compra-tu-carro/");
    };

    const _handlePickOrderBy = (orderByValue: OrderByEntity) => {
        setOpenOrderBy(false);
        if (watch("orderBy") == orderByValue) return;
        setValue("orderBy", orderByValue);
        setPage(1);
    };

    // * Check type_vehicle_id
    // * Filter name: Tipo
    useEffect(() => {
        console.log("TYPE_VEHICLE_ID____", typeVehicleId);
    }, [typeVehicleId]);
    // * Check type_fuel_id
    // * Filter name: Combustible
    useEffect(() => {
        console.log("TYPE_FUEL_ID_____", fuelId);
    }, [fuelId]);

    return (
        <Layout>
            <Helmet>
                <title>Compra tu Carro - wcar</title>
                <meta name="description" content="Compra tu carro usado de forma fácil y segura con wcar" />
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
                                <img src="/assets/icons/search.svg" className="text_orange" alt="wcar" title="wcar" />
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
                            <div
                                className={`bg_white mb-md-0  ${
                                    openFilters ? "col-md-4 col-lg-3" : "d-none"
                                }  position-relative`}
                                style={{ zIndex: 999999 }}
                            >
                                {/* <div className={"position-sticky top-0 pe-2 scroll-filter"}>
                                    <FilterComponent
                                        formFunctions={formFunctions}
                                        isOpen={openFilters}
                                        setIsOpen={setOpenFilters}
                                    />
                                </div> */}
                                <div className={"pe-2 scroll-filter"}>
                                    <FilterComponent
                                        formFunctions={formFunctions}
                                        isOpen={openFilters}
                                        setIsOpen={setOpenFilters}
                                    />
                                </div>
                            </div>
                            {openFilters && (
                                <div
                                    className="bg-filters"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenFilters(false);
                                    }}
                                ></div>
                            )}
                            <div className={` ${openFilters ? "col-md-8 col-lg-9" : "col-md-12"} container_cars`}>
                                {typeVehicleId === "Camioneta - SUV" && fuelId !== "Híbrido" && <BannerYourCar />}
                                <div className="d-none d-md-flex justify-content-between">
                                    <div className={`mt-1 ${openFilters && "md-d-none"}`}>
                                        <div
                                            className={`btn btn_light me-3 mt-2 ${
                                                !openFilters ? "filter-btn-visible" : "filter-btn-hidden"
                                            }`}
                                            onClick={() => setOpenFilters(true)}
                                        >
                                            <img src="/assets/icons/filter.svg" alt="wcar" title="wcar" />
                                            <span className="ms-2">Filtrar</span>
                                        </div>
                                    </div>
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
                                    <div className="mt-1 d-flex flex-row-reverse justify-content-between">
                                        <div className="btn btn_light mt-2" onClick={() => setOpenFilters(true)}>
                                            <img src="/assets/icons/filter.svg" alt="wcar" title="wcar" />
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
                                    {typeVehicleId === "Camioneta - SUV" && fuelId !== "Híbrido" && <BannerYourCar />}
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
                                                    page >= maxPages ? "disabled" : ""
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
            {/* SEO camoionetas usadas */}
            {typeVehicleId === "Camioneta - SUV" && fuelId !== "Híbrido" && (
                <div className="my-6 pt-4 container container-drop" style={{ marginTop: "80px", marginBottom: "40px" }}>
                    <SeoDropdown
                        options={contentListUsedTrucksSeo.map((content) => {
                            return {
                                title: content.title,
                                content: content.content,
                                typeElement: content.type,
                                image: content.imageUrl,
                                alt: content.alt,
                            };
                        })}
                    />
                    <SeoDropdown
                        options={contentListUsedTrucksSeo2.map((content) => {
                            return {
                                title: content.title,
                                content: content.content,
                                typeElement: content.type,
                                image: content.imageUrl,
                                alt: content.alt,
                            };
                        })}
                    />
                </div>
            )}
            {/* SEO - Combustible: Hibrido */}
            {fuelId === "Híbrido" && typeVehicleId !== "Camioneta - SUV" && (
                <div
                    className="my-6 pt-4 container container-drop"
                    style={{
                        marginTop: "80px",
                        marginBottom: "40px",
                    }}
                >
                    <SeoDropdown
                        options={contentListHybridCarSeo.map((content) => {
                            return {
                                title: content.title,
                                content: content.content,
                                typeElement: content.type,
                                image: content.imageUrl,
                                alt: content.alt,
                            };
                        })}
                    />
                    <SeoDropdown
                        options={contentListHybridCarSeo2.map((content) => {
                            return {
                                title: content.title,
                                content: content.content,
                                typeElement: content.type,
                                image: content.imageUrl,
                                alt: content.alt,
                            };
                        })}
                    />
                </div>
            )}
        </Layout>
    );
};

export default BuyYourCarPage;
