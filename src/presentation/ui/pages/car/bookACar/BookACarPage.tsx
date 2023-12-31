import "./BookACarPageStyles.scss";
import { FC, useContext, useEffect, useState } from "react";
import di from "../../../../../di/DependencyInjection";
import GetCarByIdUseCase, { GetCarByIdUseCaseName } from "../../../../../domain/use_cases/car/GetCarByIdUseCase";
import { Link, useNavigate, useParams } from "react-router-dom";
import CarEntity from "../../../../../domain/entities/CarEntity";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";
import NotResultsComponent from "../../../components/notResults/NotResultsComponent";
import Layout from "../../../layout/Layout";
import { set, useForm } from "react-hook-form";
import Validators from "../../../../utils/Validators";
import { ErrorMessage } from "@hookform/error-message";
import DepartmentContext from "../../../../../domain/providers/department/DepartmentContext";
import DepartmentContextType from "../../../../../domain/providers/department/DepartmentContextType";
import GetAllDepartmentsUseCase, {
    GetAllDepartmentsUseCaseName,
} from "../../../../../domain/use_cases/department/GetAllDepartmentsUseCase";
import StarRatingComponent from "../../../components/starRating/StarRatingComponent";
import CurrencyParse from "../../../../utils/CurrencyParse";
import Icons from "../../../assets/Icons";
import BookACarWithPaymentUseCase, {
    BookACarWithPaymentUseCaseName,
} from "../../../../../domain/use_cases/car/BookACarWithPaymentUseCase";
import ModalsProvider, { ModalsProviderName } from "../../../../../domain/providers/modal/ModalsProvider";
import UserContext from "../../../../../domain/providers/user/UserContext";
import UserContextType from "../../../../../domain/providers/user/UserContextType";
import { routes } from "../../../routes/RoutesComponent";
import CityEntity from "../../../../../domain/entities/CityEntity";
import GetCitiesByDepartmentIdUseCase, {
    GetCitiesByDepartmentIdUseCaseName,
} from "../../../../../domain/use_cases/city/GetCitiesByDepartmentIdUseCase";

const BookACarPage: FC<{}> = () => {
    const { id } = useParams<{ id: string }>();
    const { departments } = useContext(DepartmentContext) as DepartmentContextType;
    const { user } = useContext(UserContext) as UserContextType;
    const navigate = useNavigate();

    const [car, setCar] = useState<CarEntity | undefined | null>(undefined);
    const [cities, setCities] = useState<CityEntity[]>([]);
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const typePayent = watch("paymentMethod");

    const _getCar = async () => {
        try {
            const car = await di.get<GetCarByIdUseCase>(GetCarByIdUseCaseName).call(id!);
            setCar(car);
        } catch (error) {
            setCar(null);
        }
    };

    const _getDepartments = async () => {
        await di.get<GetAllDepartmentsUseCase>(GetAllDepartmentsUseCaseName).call();
    };

    const _handleSelectDepartment = async (id: string) => {
        setValue("department", id);
        setValue("city", undefined);
        try {
            const _cities = await di.get<GetCitiesByDepartmentIdUseCase>(GetCitiesByDepartmentIdUseCaseName).call(id);
            setCities(_cities);
        } catch (error) {
            setCities([]);
        }
    };

    const _formatCreditCarNumber = (value: string) => {
        const numbers = value.replace(/\D/g, "");
        const char: any = { 4: " ", 8: " ", 12: " " };
        let number = "";
        for (let i = 0; i < numbers.length; i++) {
            number += (char[i] || "") + numbers[i];
        }
        if (number.length > 19) setValue("paymentCard.number", number.substring(0, 19));
        else setValue("paymentCard.number", number);
    };

    const _formatdMMyy = (value: string) => {
        const numbers = value.replace(/\D/g, "");
        const char: any = { 2: "/", 4: "/" };
        let number = "";
        for (let i = 0; i < numbers.length; i++) {
            number += (char[i] || "") + numbers[i];
        }
        if (number.length > 5) setValue("paymentCard.expires", number.substring(0, 5));
        else setValue("paymentCard.expires", number);
    };

    const _bookADate = async (data: any) => {
        try {
            await di.get<BookACarWithPaymentUseCase>(BookACarWithPaymentUseCaseName).call(id!, data);
            navigate(routes.buyYourCar.relativePath + "/" + id!);
        } catch (error) {
            di.get<ModalsProvider>(ModalsProviderName).Actions.addToast("Error en reserva", "error", undefined);
        }
    };

    useEffect(() => {
        _getDepartments();
        if (id) {
            _getCar();
        } else {
            setCar(null);
        }
    }, [id]);

    return (
        <Layout>
            {id === undefined || (car === null && <NotResultsComponent />)}
            {car === undefined && <LoadingComponent />}
            {car !== null && car !== undefined && (
                <div className="book_a_car bg_gray">
                    <div className="container py-5 bg_lines">
                        <form onSubmit={handleSubmit(_bookADate)}>
                            <div className="row d-flex flex-column-reverse flex-md-row">
                                <div className="col-md-7">
                                    <div className="p-3 bg_white border-radius">
                                        <div>
                                            <h1>Detalles de facturación</h1>
                                            {user != null ? (
                                                <span className="text_gray me-2">Bienvenido {user!.name}</span>
                                            ) : (
                                                <>
                                                    <span className="text_gray me-2">¿Eres cliente?</span>
                                                    <Link to={routes.signIn.relativePath} className="text_orange">
                                                        Inicia sesión{" "}
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="mandatory">Nombre</label>
                                                    <input
                                                        type="text"
                                                        placeholder="nombre"
                                                        className="form-control"
                                                        {...register(
                                                            "name",
                                                            Validators({
                                                                required: true,
                                                                maxLength: 50,
                                                                minLength: 3,
                                                            })
                                                        )}
                                                    />
                                                    <ErrorMessage as="aside" errors={errors} name="name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="mandatory">Apellido</label>
                                                    <input
                                                        type="text"
                                                        placeholder="apellido"
                                                        className="form-control"
                                                        {...register(
                                                            "lastname",
                                                            Validators({
                                                                required: true,
                                                            })
                                                        )}
                                                    />
                                                    <ErrorMessage as="aside" errors={errors} name="lastname" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group my-3">
                                                    <label className="optional">Nombre de la compañia</label>
                                                    <input
                                                        type="text"
                                                        placeholder="nombre de la compañia"
                                                        className="form-control"
                                                        {...register("companyName")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group my-3">
                                                    <label className="mandatory">Departamento</label>
                                                    <select
                                                        className="form-control"
                                                        defaultValue={""}
                                                        {...register(
                                                            "department",
                                                            Validators({
                                                                required: true,
                                                                onChange: (value) => _handleSelectDepartment(value),
                                                            })
                                                        )}
                                                    >
                                                        <option value="" disabled>
                                                            Distrito capital
                                                        </option>
                                                        {departments.map((department, index) => (
                                                            <option value={department.id} key={index}>
                                                                {department.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ErrorMessage as="aside" errors={errors} name="department" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="mandatory">Ciudad</label>
                                                    <select
                                                        className="form-control"
                                                        defaultValue={""}
                                                        {...register("city", Validators({ required: true }))}
                                                    >
                                                        <option value="" disabled>
                                                            Seleccionar ciudad
                                                        </option>
                                                        {cities.map((city, index) => (
                                                            <option value={city.id} key={index}>
                                                                {city.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ErrorMessage as="aside" errors={errors} name="city" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="optional">Código postal</label>
                                                    <input
                                                        type="text"
                                                        placeholder="código postal"
                                                        className="form-control"
                                                        {...register("postal_code")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="mandatory">Dirección</label>
                                                    <input
                                                        type="text"
                                                        placeholder="dirección"
                                                        className="form-control"
                                                        {...register(
                                                            "address",
                                                            Validators({
                                                                required: true,
                                                            })
                                                        )}
                                                    />
                                                    <ErrorMessage as="aside" errors={errors} name="address" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="optional">Detalles</label>
                                                    <input
                                                        type="text"
                                                        placeholder="apartamento, habitación etc"
                                                        className="form-control"
                                                        {...register("apartment")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="mandatory">Télefono</label>
                                                    <input
                                                        type="text"
                                                        placeholder="número de télefono"
                                                        className="form-control"
                                                        {...register(
                                                            "phone",
                                                            Validators({
                                                                required: true,
                                                                phone: true,
                                                            })
                                                        )}
                                                    />
                                                    <ErrorMessage as="aside" errors={errors} name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group my-3">
                                                    <label className="mandatory">Email</label>
                                                    <input
                                                        type="text"
                                                        placeholder="ejemplo@gmail.com"
                                                        className="form-control"
                                                        {...register(
                                                            "email",
                                                            Validators({
                                                                required: true,
                                                                email: true,
                                                            })
                                                        )}
                                                    />
                                                    <ErrorMessage as="aside" errors={errors} name="email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 bg_white border-radius">
                                        <div>
                                            <h1>Método de pago</h1>
                                            <span className="text_gray me-2">Seleccionar método de pago</span>
                                        </div>
                                        <div className="row payment_form">
                                            <div className="col-12">
                                                <div
                                                    className="form-group my-3 bg_gray hover "
                                                    onClick={() => setValue("paymentMethod", "contra")}
                                                >
                                                    <div className="d-flex p-3 align-items-center">
                                                        <input
                                                            type="radio"
                                                            className="form-check"
                                                            value={"contra"}
                                                            {...register(
                                                                "paymentMethod",
                                                                Validators({
                                                                    required: true,
                                                                })
                                                            )}
                                                        />
                                                        <label className="flex-grow-1 mx-2">Contra reembolso</label>
                                                        <img src="/assets/icons/store.svg" alt="wcar" title="wcar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div
                                                    className="form-group my-3 bg_gray hover"
                                                    onClick={() => setValue("paymentMethod", "mercado_pago")}
                                                >
                                                    <div className="d-flex p-3 align-items-center">
                                                        <input
                                                            type="radio"
                                                            value={"mercado_pago"}
                                                            className="form-check"
                                                            {...register(
                                                                "paymentMethod",
                                                                Validators({
                                                                    required: true,
                                                                })
                                                            )}
                                                        />
                                                        <label className="flex-grow-1 mx-2">
                                                            Compras con tarjetas guardadas o saldo en Mercado Pago
                                                        </label>
                                                        <img
                                                            src="/assets/icons/mercado_pago.svg"
                                                            alt="wcar"
                                                            title="wcar"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className=" my-3 bg_gray">
                                                    <div
                                                        className="form-group d-flex p-3 align-items-center hover"
                                                        onClick={() => setValue("paymentMethod", "credit_card")}
                                                    >
                                                        <input
                                                            type="radio"
                                                            className="form-check"
                                                            value={"credit_card"}
                                                            {...register(
                                                                "paymentMethod",
                                                                Validators({
                                                                    required: true,
                                                                })
                                                            )}
                                                        />
                                                        <label className="flex-grow-1 mx-2">Débito o crédito</label>
                                                        <img
                                                            src="/assets/icons/credit_card.svg"
                                                            alt="wcar"
                                                            title="wcar"
                                                        />
                                                    </div>
                                                    <div className="container">
                                                        {typePayent === "credit_card" && (
                                                            <div className="row pb-3">
                                                                <div className="col-md-6 my-1">
                                                                    <div className="form-group">
                                                                        <label className="mandatory">
                                                                            Número de tarjeta
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="0000 0000 0000 0000"
                                                                            value={watch("paymentCard.number") ?? ""}
                                                                            className="form-control"
                                                                            {...register(
                                                                                "paymentCard.number",
                                                                                Validators({
                                                                                    required: true,
                                                                                    creditCard: true,
                                                                                    minLength: 19,
                                                                                    onChange: (val) =>
                                                                                        _formatCreditCarNumber(val),
                                                                                })
                                                                            )}
                                                                        />
                                                                        <ErrorMessage
                                                                            as="aside"
                                                                            errors={errors}
                                                                            name="paymentCard.number"
                                                                        />
                                                                    </div>{" "}
                                                                </div>
                                                                <div className="col-md-6 my-1">
                                                                    <div className="form-group">
                                                                        <label className="mandatory">
                                                                            Nombre del titular
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Ejm: Martha López"
                                                                            className="form-control"
                                                                            {...register(
                                                                                "paymentCard.name",
                                                                                Validators({ required: true })
                                                                            )}
                                                                        />
                                                                        <ErrorMessage
                                                                            as="aside"
                                                                            errors={errors}
                                                                            name="paymentCard.name"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 my-1">
                                                                    <div className="form-group">
                                                                        <label className="mandatory">Vencimiento</label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="mm/aa"
                                                                            value={watch("paymentCard.expires") ?? ""}
                                                                            className="form-control"
                                                                            {...register(
                                                                                "paymentCard.expires",
                                                                                Validators({
                                                                                    required: true,
                                                                                    minLength: 5,
                                                                                    onChange: (val) =>
                                                                                        _formatdMMyy(val.target.value),
                                                                                })
                                                                            )}
                                                                        />
                                                                        <ErrorMessage
                                                                            as="aside"
                                                                            errors={errors}
                                                                            name="paymentCard.expires"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 my-1">
                                                                    <div className="form-group">
                                                                        <label className="mandatory">
                                                                            Código de seguridad
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="123"
                                                                            className="form-control"
                                                                            {...register(
                                                                                "paymentCard.security_code",
                                                                                Validators({
                                                                                    required: true,
                                                                                    minLength: 3,
                                                                                    maxLength: 3,
                                                                                })
                                                                            )}
                                                                        />
                                                                        <ErrorMessage
                                                                            as="aside"
                                                                            errors={errors}
                                                                            name="paymentCard.security_code"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div
                                                    className="form-group my-3 bg_gray"
                                                    onClick={() => setValue("paymentMethod", "money")}
                                                >
                                                    <div className="d-flex p-3 align-items-center">
                                                        <input
                                                            type="radio"
                                                            className="form-check"
                                                            value={"money"}
                                                            {...register(
                                                                "paymentMethod",
                                                                Validators({
                                                                    required: true,
                                                                })
                                                            )}
                                                        />
                                                        <label className="flex-grow-1 mx-2">Efectivo</label>
                                                        <img src="/assets/icons/money.svg" alt="wcar" title="wcar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 form-group">
                                                {/* <input type="hidden" className="form-control" value={watch("paymentMethod")} {...register("paymentMethod", Validators({
                                            required: true,
                                        }))} /> */}
                                                <input type="hidden" className="form-control" />
                                                <ErrorMessage as="aside" errors={errors} name="paymentMethod" />
                                            </div>
                                            <div className="d-block d-md-none mt-3">
                                                <button className="btn btn_orange" type="submit">
                                                    FINALIZAR COMPRA <Icons.Lock />{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 preview_card">
                                    <div className="p-4 bg_white border-radius">
                                        <div>
                                            <h3 className="font_bold">Tu reserva</h3>
                                            <span className="text_gray">
                                                {car.name} {car.year}
                                            </span>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12 col-md-5">
                                                <img
                                                    src={car.images.at(0)}
                                                    alt="wcar"
                                                    title="wcar"
                                                    className="img-fluid w-100 border_radius prev_image"
                                                />
                                            </div>
                                            <div className="col-12 col-md-7 d-flex flex-column justify-content-end pb-5">
                                                <h4 className="font_bold">
                                                    {car.brand.name} {car.model}
                                                </h4>
                                                <StarRatingComponent rating={car.rating} />
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between my-3">
                                                <span>Subtotal</span>
                                                <strong>
                                                    {car.priceBook && CurrencyParse.toCop(car.priceBook?.subtotal)}
                                                </strong>
                                            </div>
                                            <div className="d-flex justify-content-between my-3">
                                                <span>Restante</span>
                                                <strong>
                                                    {car.priceBook && CurrencyParse.toCop(car.priceBook?.rest)}
                                                </strong>
                                            </div>
                                            <div className="d-flex justify-content-between my-3 py-3 bg_gray border_radius_1">
                                                <span className="text_gray">Precio completo</span>
                                                <strong>
                                                    {car.priceBook && CurrencyParse.toCop(car.priceBook?.total)}
                                                </strong>
                                            </div>
                                            <div className="d-flex my-3 align-items-center justify-content-between">
                                                <div>
                                                    <h3 className="text_bold mb-0">Total a pagar</h3>
                                                    <span className="text_gray">Depósito</span>
                                                </div>
                                                <h1 className="text_bold">
                                                    {car.priceBook && CurrencyParse.toCop(car.priceBook?.total)}
                                                </h1>
                                            </div>
                                            <div className="d-none d-md-block">
                                                <button className="btn btn_orange" type="submit">
                                                    FINALIZAR COMPRA <Icons.Lock />{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default BookACarPage;
