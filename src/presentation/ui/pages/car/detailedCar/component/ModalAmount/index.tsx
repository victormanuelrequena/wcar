import { ErrorMessage } from "@hookform/error-message";
import Icons from "../../../../../assets/Icons";
import "./ModalAmountStyles.scss";
import { useForm } from "react-hook-form";
import di from "../../../../../../../di/DependencyInjection";
import BookACarUseCase, { BookACarUseCaseName } from "../../../../../../../domain/use_cases/book/BookACarUseCase";
import Validators from "../../../../../../utils/Validators";

interface ModalAmountProps {
    close: () => void;
    id: string;
    carValue: number;
}

type Inputs = {
    amount: number;
};

export default function ModalAmount({ close, id, carValue }: ModalAmountProps) {
    console.log("🚀 ~ file: index.tsx:16 ~ ModalAmount ~ carValue:", carValue);
    const {
        register,
        setValue,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<Inputs>();

    const bookCar = async () => {
        function formatValue(value: string): string {
            const plainValue = value.replace(/[\.,\$]/g, "");
            const formattedValue = plainValue + ".00";
            return formattedValue;
        }
        try {
            const response = await window.fetch("https://api.wcaronline.com/api/scheduling-review/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    car: id,
                    totalToPay: parseFloat(formatValue(getValues().amount.toString().trimStart())),
                }),
            });
            const data = await response.json();
            // @ts-ignore
            window.location.href = data?.data_eccolect?.eCollectUrl;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="box">
            <div className="closer">
                <div className="modal-amount position-relative">
                    <div className="icon-close" onClick={close}>
                        <Icons.Clear />
                    </div>
                    <h5 className="modal-title">¿Con qué valor vas a separar el vehículo?</h5>
                    <div className="form-group mt-4 input-box">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Monto"
                            {...register("amount", Validators({ price: true, minValue: 2000000, maxValue: carValue }))}
                        />
                        <ErrorMessage as="aside" errors={errors} name="amount" />
                    </div>
                    <div className="modal-buttons">
                        <div className="btn btn_orange btn-modal" onClick={bookCar}>
                            <p>Apartar</p>
                        </div>
                        <div className="btn btn_orange_outline" onClick={close}>
                            Cancelar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
