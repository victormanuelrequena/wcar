import { ErrorMessage } from "@hookform/error-message";
import Icons from "../../../../../assets/Icons";
import "./ModalShareStyles.scss";
import { useForm } from "react-hook-form";
import di from "../../../../../../../di/DependencyInjection";
import BookACarUseCase, { BookACarUseCaseName } from "../../../../../../../domain/use_cases/book/BookACarUseCase";
import Validators from "../../../../../../utils/Validators";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface ModalShareProps {
    close: () => void;
    id: string;
    carValue: number;
}

type Inputs = {
    share: number;
    terms: boolean;
};

export default function ModalShare({ close, id, carValue }: ModalShareProps) {
    console.log("🚀 ~ file: index.tsx:23 ~ ModalShare ~ carValue:", carValue);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const {
        register,
        setValue,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
        setError,
    } = useForm<Inputs>();
    const terms = watch("terms");
    const share = watch("share");

    function formatValue(value: string): string {
        const plainValue = value?.replace(/[\.,\$]/g, "");
        const formattedValue = plainValue + ".00";
        return formattedValue;
    }

    const bookCar = async () => {
        console.log("AMOUNT____", formatValue(share.toString()));
        if (!terms) {
            return;
        }

        if (parseFloat(formatValue(share.toString().trimStart())) < 1000000.0) {
            // setError("share", { message: "El valor mínimo para separar el vehículo es de $2.000.000 COP." });
            return;
        }

        try {
            const response = await window.fetch("https://api.wcaronline.com/api/scheduling-review/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    car: id,
                    totalToPay: parseFloat(formatValue(getValues().share.toString().trimStart())),
                }),
            });
            const data = await response.json();
            // @ts-ignore
            window.location.href = data?.data_eccolect?.eCollectUrl;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setError("share", { message: "" });
    }, [share]);

    return (
        <div className="box">
            <div className="closer">
                <div className="modal-share position-relative">
                    <div className="icon-close" onClick={close}>
                        <Icons.Clear />
                    </div>
                    <h5 className="modal-title">¿Con qué valor vas a separar el vehículo?</h5>
                    <div className="form-group mt-4 input-box">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Monto"
                            {...register("share", Validators({ price: true, minValue: 1000000, maxValue: carValue }))}
                        />
                        <p style={{ color: "#888", fontSize: "14px", marginTop: "6px", marginLeft: "8px" }}>
                            Valor mínimo para separar el vehículo es de $1.000.000 COP.
                        </p>
                        <ErrorMessage as="aside" errors={errors} name="share" />
                        <div className="form-check mb-4 mt-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => {
                                    console.log(acceptedTerms);
                                    setAcceptedTerms(!acceptedTerms);
                                    setValue("terms", !acceptedTerms);
                                }}
                                {...register("terms")}
                            />
                            <label className="form-check-label">
                                <Link target="_blank" to={"/politicas-comprador"} className="text_underline text_gray">
                                    Acepto términos y condiciones
                                </Link>
                            </label>
                            <ErrorMessage as="aside" errors={errors} name="terms" />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <div
                            className="btn btn_orange btn-modal"
                            style={{
                                backgroundColor:
                                    getValues().terms &&
                                    parseFloat(formatValue(share?.toString().trimStart())) >= 1000000
                                        ? ""
                                        : "#ccc",
                            }}
                            onClick={bookCar}
                        >
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
