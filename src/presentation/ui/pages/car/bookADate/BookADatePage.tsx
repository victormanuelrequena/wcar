import './BookADatePageStyles.scss';
import { FC, useContext, useEffect, useState } from "react";
import VerticalStepperComponent from "../../../components/verticalStepper/VerticalStepperComponent";
import Layout from "../../../layout/Layout";
import { useForm } from "react-hook-form";
import di from "../../../../../di/DependencyInjection";
import GetAvailableHoursForBuyUseCase, { GetAvailableHoursForBuyUseCaseName } from "../../../../../domain/use_cases/book/GetAvailableHoursForBuyUseCase";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import BookDateEntity from "../../../../../domain/entities/BookDateEntity";
import BookHourEntity from "../../../../../domain/entities/BookHourEntity";
import BookADateForBuyUseCase, { BookADateForBuyUseCaseName } from "../../../../../domain/use_cases/book/BookADateForBuyUseCase";
import GetAvailableDatesForBuyUseCase, { GetAvailableDatesForBuyUseCaseName } from "../../../../../domain/use_cases/book/GetAvailableDatesForBuyUseCase";
import PickerBoxComponent from "../../../components/form/pickerBox/PickerBoxComponent";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";
import DateParse from "../../../../utils/DateParse";
import NotResultsComponent from "../../../components/notResults/NotResultsComponent";
import { ErrorMessage } from "@hookform/error-message";
import Icons from '../../../assets/Icons';
import ModalsContextType from '../../../../../domain/providers/modal/ModalsContextType';
import ModalsContext from '../../../../../domain/providers/modal/ModalsContext';
import { routes } from '../../../routes/RoutesComponent';
import Validators from '../../../../utils/Validators';
import GetAvailableDatesForSellUseCase, { GetAvailableDatesForSellUseCaseName } from '../../../../../domain/use_cases/book/GetAvailableDatesForSellUseCase';
import GetAvailableHoursForSellUseCase, { GetAvailableHoursForSellUseCaseName } from '../../../../../domain/use_cases/book/GetAvailableHoursForSellUseCase';
import BookADateForSellUseCase, { BookADateForSellUseCaseName } from '../../../../../domain/use_cases/book/BookADateForSellUseCase';
import CurrencyParse from '../../../../utils/CurrencyParse';

export enum BookADateActions {
    book = "separar",
    see = "ver",
    sell = "vender",
}
const BookADatePage: FC<{}> = () => {
    const formFunctions = useForm();
    const { register, handleSubmit, getValues, formState: { errors }, reset, setValue, watch } = formFunctions;
    const { carId, action } = useParams<{ action: string, carId: string | undefined }>();
    const navigate = useNavigate();
    const location = useLocation();

    const { calculated, cost } = location.state ?? {};
    const cotizationId = calculated?.id;
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const [availableDates, setAvailableDates] = useState<BookDateEntity[] | undefined>(undefined);
    const [availableHours, setAvailableHours] = useState<BookHourEntity[] | undefined>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const dateValue = watch('date');

    const getAvailableDates = async () => {
        try {
            if (action == BookADateActions.sell) {
                const response = await di.get<GetAvailableDatesForSellUseCase>(GetAvailableDatesForSellUseCaseName).call(cotizationId!);
                setAvailableDates(response);
            } else if (action == BookADateActions.book || action == BookADateActions.see) {
                const response = await di.get<GetAvailableDatesForBuyUseCase>(GetAvailableDatesForBuyUseCaseName).call(carId!);
                setAvailableDates(response);
            } else {
                setAvailableDates([]);
            }
        } catch (error) {
            setAvailableDates([]);
        }
    }

    const _handleDateChange = async (bookDateId: string) => {
        try {
            if (dateValue != bookDateId) setValue('hour', undefined);
            console.log('llama a get available hours');
            if (action == BookADateActions.sell) {
                const response = await di.get<GetAvailableHoursForSellUseCase>(GetAvailableHoursForSellUseCaseName).call(bookDateId, cotizationId!);
                setAvailableHours(response);
            } else if (action == BookADateActions.book || action == BookADateActions.see) {
                const response = await di.get<GetAvailableHoursForBuyUseCase>(GetAvailableHoursForBuyUseCaseName).call(bookDateId, carId!);
                setAvailableHours(response);
            } else {
                setAvailableHours([]);
            }
        } catch (error) {
            setAvailableHours([]);
        }
    }

    const _handleConfirmBook = async (data: any) => {
        setLoading(true);
        console.log('data', data);
        try {
            if (action == BookADateActions.sell)
                await di.get<BookADateForSellUseCase>(BookADateForSellUseCaseName).call(data.date, data.hour, cotizationId, data.contact);
            else if (action == BookADateActions.book || action == BookADateActions.see) await di.get<BookADateForBuyUseCase>(BookADateForBuyUseCaseName).call(data.date, data.hour, carId!, undefined, data.contact, data.separation);
            else return;
            addToast("Reserva realizada", "success", undefined);
            navigate(routes.home.relativePath);
        } catch (error) {
            addToast("Error en reserva", "error", undefined);
        }
        setLoading(false);
    }

    const _getCurrentStep = () => {
        const contact = watch("contact");
        if (dateValue == undefined) return 0;
        else if (getValues()?.hour == undefined) return 1;
        else if (contact?.name == "" || contact?.lastname == "" || contact?.email == "" || contact?.phone == "") return 2;
        else if ((action == BookADateActions.book && watch('separation') == null) || action != BookADateActions.book && watch('terms') != true) return 3;
        else if (watch('terms') != true && action == BookADateActions.book) return 4;
        else if (watch('terms') == true && action == BookADateActions.book) return 5;
        else return 4;
    }

    useEffect(() => {
        console.log('state', location.state, 'action', action, 'carId', carId);
        if (((carId == null || carId.length <= 0) && (action == BookADateActions.see || action == BookADateActions.book))
            || ((cotizationId == null || cotizationId.length <= 0) && action == BookADateActions.sell)) navigate(routes.error_404.relativePath);
        getAvailableDates();
    }, [carId, calculated, action]);

    return <Layout>
        <div className="book_a_date_page gray_footer">
            <form className="container" onSubmit={handleSubmit(_handleConfirmBook)}>
                <div className="row">
                    <div className="col-md-9 position-relative">
                        {loading && <div className="loading_container">
                            <LoadingComponent />
                        </div>}
                        <VerticalStepperComponent currentStep={_getCurrentStep()}>
                            <section className='pb-4'>
                                <h5 className="mb-0">Agendar cita</h5>
                                <span className="text_light">Selecciona un dia y un rango de horario</span>
                                {availableDates ? <PickerBoxComponent formFunctions={formFunctions} keyName="date" onChange={_handleDateChange} options={availableDates.map((option) => {
                                    return {
                                        label: DateParse.dateToMonthDay(option.date),
                                        value: option.id,
                                        enabled: option.available,
                                    }
                                })} /> : <LoadingComponent />}
                            </section>
                            <section className='pb-4'>
                                <h5 className="mb-0">Hora</h5>
                                <span className="text_light">Selecciona una franja de horario disponible</span>
                                {dateValue != undefined && dateValue != "" ? <>
                                    {availableHours && availableHours.length > 0 &&
                                        <PickerBoxComponent formFunctions={formFunctions} keyName="hour" options={availableHours.map((option) => {
                                            return {
                                                label: option.hourFrom + " - " + option.hourTo,
                                                value: option.id,
                                                enabled: option.available,
                                            }
                                        })} />}
                                    {availableHours && availableHours.length == 0 && <p>Sin Resultados</p>}
                                    {availableHours == undefined && <LoadingComponent />}
                                </> : <div>Selecciona una fecha para conocer las franjas de horario</div>}
                            </section>
                            <section className="card bg_gray w-100 border-0 personal_data_container pb-4">
                                <div className="card-body w-100">
                                    <h5 className="mb-0">Datos personales</h5>
                                    <span className="text_light">Por favor ingresa tus datos</span>
                                    <div className="row">
                                        <div className="form-group col-md-6 my-3">
                                            <label className="mandatory">Nombre</label>
                                            <input type="text" className="form-control" placeholder='nombre' {...register("contact.name", Validators({
                                                required: true,
                                                minLength: 2,
                                                maxLength: 20,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="contact.name" />
                                        </div>
                                        <div className="form-group col-md-6 my-3">
                                            <label className="mandatory">Apellido</label>
                                            <input type="text" className="form-control" placeholder='apellido' {...register("contact.lastname", Validators({
                                                required: true,
                                                minLength: 2,
                                                maxLength: 20,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="contact.lastname" />
                                        </div>
                                        <div className="form-group col-md-6 my-3">
                                            <label className="mandatory">Número de contacto</label>
                                            <input type="text" className="form-control" placeholder='número de celular o telefono' {...register("contact.phone", Validators({
                                                required: true,
                                                phone: true,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="contact.phone" />
                                        </div>
                                        <div className="form-group col-md-6 my-3">
                                            <label className="mandatory">Email</label>
                                            <input type="text" className="form-control" placeholder='ejemplo@gmail.com' {...register("contact.email", Validators({
                                                required: true,
                                                email: true,
                                            }))} />
                                            <ErrorMessage as="aside" errors={errors} name="contact.email" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {action == BookADateActions.book && <section>
                                <div className="card-body w-100">
                                    <h5 className="mb-0">Reserva</h5>
                                    <span className="text_light">Para reservar un vehiculo debes de abonar una parte de su costo total ({CurrencyParse.toCop(cost)}), por favor escoge la cantidad que deseas abonar</span>
                                    <div className="row">
                                        <div className="form-group col-md-6 my-3">
                                            <label className="mandatory">Abono</label>
                                            <input type="text" min={1000000} max={cost} className="form-control" placeholder='$0' {...register("_separation", Validators({
                                                required: true,
                                                maxValue: cost,
                                                minValue: 1000000,
                                                price: true,
                                                onChange: (value) => setValue("separation", value),
                                            }))} />
                                            <input type='hidden' {...register("separation", { required: true })} />
                                            <ErrorMessage as="aside" errors={errors} name="_separation" />
                                        </div>
                                    </div>
                                </div>
                            </section>}
                            <section>
                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="checkbox" {...register("terms", Validators({ required: true }))} />
                                    <label className="form-check-label">
                                        Acepto tratamiento de datos personales.  <Link to={"#"} className='text_underline text_gray'> Política de Tratamiento de Datos y Protección de Datos Personales.</Link>
                                    </label>
                                    <ErrorMessage as="aside" errors={errors} name="terms" />
                                </div>
                                <button type='submit' className='btn btn_orange' disabled={_getCurrentStep() < 4}>CONFIRMAR CITA <Icons.CheckRounded /> </button>
                            </section>
                        </VerticalStepperComponent>
                    </div>
                </div>
            </form>
        </div>
    </Layout>
}

export default BookADatePage;