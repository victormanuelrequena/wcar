import { FC, useEffect, useState } from "react";
import VerticalStepperComponent from "../../../components/verticalStepper/VerticalStepperComponent";
import Layout from "../../../layout/Layout";
import { set, useForm } from "react-hook-form";
import di from "../../../../../di/DependencyInjection";
import GetAvailableHoursForBuyUseCase from "../../../../../domain/use_cases/book/GetAvailableHoursForBuyUseCase";
import { useParams } from "react-router-dom";
import BookDateEntity from "../../../../../domain/entities/BookDateEntity";
import BookHourEntity from "../../../../../domain/entities/BookHourEntity";
import BookADateForBuyUseCase from "../../../../../domain/use_cases/book/BookADateForBuyUseCase";
import ModalsProvider, { ModalsProviderName } from "../../../../../domain/providers/modal/ModalsProvider";
import GetAvailableDatesForBuyUseCase from "../../../../../domain/use_cases/book/GetAvailableDatesForBuyUseCase";
import PickerBoxComponent from "../../../components/form/pickerBox/PickerBoxComponent";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";
import DateParse from "../../../../utils/DateParse";
import NotResultsComponent from "../../../components/notResults/NotResultsComponent";

const BookADatePage: FC<{}> = () => {
    const formFunctions = useForm();
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = formFunctions;
    const { id } = useParams<{ id: string }>();

    const [availableDates, setAvailableDates] = useState<BookDateEntity[] | undefined>(undefined);
    const [availableHours, setAvailableHours] = useState<BookHourEntity[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const dateValue = watch('date');

    const getAvailableDates = async () => {
        try {
            const response = await di.get<GetAvailableDatesForBuyUseCase>(GetAvailableDatesForBuyUseCase.name).call(id!);
            setAvailableDates(response);
        } catch (error) {
            console.log('error on getAvailableDates', error);
            setAvailableDates([]);
        }
    }

    const _handleDateChange = async (date: Date) => {
        try {
            const response = await di.get<GetAvailableHoursForBuyUseCase>(GetAvailableHoursForBuyUseCase.name).call(date, id!);
            setAvailableHours(response);
        } catch (error) {
            setAvailableHours([]);
        }
    }

    const _handleConfirmBook = async (data: any) => {
        setLoading(true);
        try {
            await di.get<BookADateForBuyUseCase>(BookADateForBuyUseCase.name).call(data.date, data.hour, id!);
        } catch (error) {
            di.get<ModalsProvider>(ModalsProviderName).Actions.addToast("Error en reserva", "error", undefined);
        }
        setLoading(false);
    }

    const _getCurrentStep = () => {
        if (dateValue == undefined) return 0;
        else if (availableHours == undefined) return 1;
        else return 2;
    }

    useEffect(() => {
        getAvailableDates();
    }, [id]);

    return <Layout>
        <div className="book_a_date_page gray_footer">
            <form className="container">
                <VerticalStepperComponent currentStep={2}>
                    <section>
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
                    <section>
                        <h5 className="mb-0">Hora</h5>
                        <span className="text_light">Selecciona una franja de horario disponible</span>
                        {dateValue != undefined ? <>
                            {availableHours && availableHours.length > 0 &&
                                <PickerBoxComponent formFunctions={formFunctions} keyName="hour" onChange={_handleDateChange} options={availableHours.map((option) => {
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
                    {dateValue != undefined && availableHours != undefined && availableHours.length > 0 ? <section>
                        
                    </section> : <></> }
                </VerticalStepperComponent>
            </form>
        </div>
    </Layout>
}

export default BookADatePage;