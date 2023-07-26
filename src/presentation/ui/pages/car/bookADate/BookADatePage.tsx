import './BookADatePageStyles.scss';
import { FC, useContext, useEffect, useState } from "react";
import VerticalStepperComponent from "../../../components/verticalStepper/VerticalStepperComponent";
import Layout from "../../../layout/Layout";
import { set, useForm } from "react-hook-form";
import di from "../../../../../di/DependencyInjection";
import GetAvailableHoursForBuyUseCase from "../../../../../domain/use_cases/book/GetAvailableHoursForBuyUseCase";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import BookDateEntity from "../../../../../domain/entities/BookDateEntity";
import BookHourEntity from "../../../../../domain/entities/BookHourEntity";
import BookADateForBuyUseCase from "../../../../../domain/use_cases/book/BookADateForBuyUseCase";
import ModalsProvider, { ModalsProviderName } from "../../../../../domain/providers/modal/ModalsProvider";
import GetAvailableDatesForBuyUseCase from "../../../../../domain/use_cases/book/GetAvailableDatesForBuyUseCase";
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
import GetAvailableDatesForSellUseCase from '../../../../../domain/use_cases/book/GetAvailableDatesForSellUseCase';
import GetAvailableHoursForSellUseCase from '../../../../../domain/use_cases/book/GetAvailableHoursForSellUseCase';
import BookADateForSellUseCase from '../../../../../domain/use_cases/book/BookADateForSellUseCase';
import CalculatedEntity from '../../../../../domain/entities/CalculatedEntity';

const BookADatePage: FC<{}> = () => {
    const formFunctions = useForm();
    const { register, handleSubmit, getValues, formState: { errors }, reset, setValue, watch } = formFunctions;
    const { id, buyNumberId } = useParams<{ id: string | undefined, buyNumberId: string | undefined }>();
    const navigate = useNavigate();
    const location = useLocation();

    const { calculated } = location.state as { calculated: CalculatedEntity };
    const cotizationId = calculated?.id;
    const { addToast } = useContext(ModalsContext) as ModalsContextType;

    const [availableDates, setAvailableDates] = useState<BookDateEntity[] | undefined>(undefined);
    const [availableHours, setAvailableHours] = useState<BookHourEntity[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const dateValue = watch('date');

    const getAvailableDates = async () => {
        try {
            if (cotizationId != undefined && cotizationId.length > 0) {
                const response = await di.get<GetAvailableDatesForSellUseCase>(GetAvailableDatesForSellUseCase.name).call(cotizationId!);
                setAvailableDates(response);
            } else {
                const response = await di.get<GetAvailableDatesForBuyUseCase>(GetAvailableDatesForBuyUseCase.name).call(id!);
                setAvailableDates(response);
            }
        } catch (error) {
            console.log('error on getAvailableDates', error);
            setAvailableDates([]);
        }
    }

    const _handleDateChange = async (date: Date) => {
        try {
            if (dateValue != date) setValue('hour', undefined);
            if (cotizationId != undefined && cotizationId.length > 0) {
                const response = await di.get<GetAvailableHoursForSellUseCase>(GetAvailableHoursForSellUseCase.name).call(date, cotizationId!);
                setAvailableHours(response);
            } else {
                const response = await di.get<GetAvailableHoursForBuyUseCase>(GetAvailableHoursForBuyUseCase.name).call(date, id!);
                setAvailableHours(response);
            }
        } catch (error) {
            setAvailableHours([]);
        }
    }

    const _handleConfirmBook = async (data: any) => {
        setLoading(true);
        try {
            if (cotizationId != undefined && cotizationId.length > 0)
                await di.get<BookADateForSellUseCase>(BookADateForSellUseCase.name).call(data.date, data.hour, cotizationId, data.contact);
            else await di.get<BookADateForBuyUseCase>(BookADateForBuyUseCase.name).call(data.date, data.hour, id!, buyNumberId, data.contact);
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
        else if (watch('terms') != true) return 3;
        else return 4;
    }

    useEffect(() => {
        getAvailableDates();
    }, [id, calculated]);

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
                                        value: option.date,
                                        enabled: option.available,
                                    }
                                })} /> : <LoadingComponent />}
                            </section>
                            <section className='pb-4'>
                                <h5 className="mb-0">Hora</h5>
                                <span className="text_light">Selecciona una franja de horario disponible</span>
                                {dateValue != undefined ? <>
                                    {availableHours && availableHours.length > 0 &&
                                        <PickerBoxComponent formFunctions={formFunctions} keyName="hour" options={availableHours.map((option) => {
                                            return {
                                                label: option.hour,
                                                value: option.hour,
                                                enabled: option.available,
                                            }
                                        })} />}
                                    {availableHours && availableHours.length == 0 && <NotResultsComponent />}
                                    {availableHours == undefined && <LoadingComponent />}
                                </> : <div>Selecciona una fecha para conocer las franjas de horario</div>}
                            </section>
                            <section className="card bg_gray w-100 border-0 personal_data_container">
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
                                            <ErrorMessage as="aside" errors={errors} name="contact.lastName" />
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
                            <section>
                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="checkbox" {...register("terms", { required: true })} />
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