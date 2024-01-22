import { FC, useEffect } from "react";
import ServicesCalculatorFormComponentProps from "./ServicesCalculatorFormComponentProps";
import Validators from "../../../../../../utils/Validators";
import PickerBoxComponent from "../../../../../components/form/pickerBox/PickerBoxComponent";
import CurrencyParse from "../../../../../../utils/CurrencyParse";

const ServicesCalculatorFormComponent: FC<ServicesCalculatorFormComponentProps> = ({
    className,
    formFunctions,
    handleOnFormChange,
}) => {
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = formFunctions;
    const vehicleValue = watch("vehicleValue");

    const options = [
        { label: "0", value: 0, enabled: true },
        { label: "12", value: 12, enabled: true },
        { label: "24", value: 24, enabled: true },
        { label: "36", value: 36, enabled: true },
        { label: "48", value: 48, enabled: true },
        { label: "60", value: 60, enabled: true },
        { label: "72", value: 72, enabled: true },
        { label: "84", value: 84, enabled: true },
    ];

    const _handleChangePriceInitialValue = (value: string) => {
        setValue("initialQuote", parseInt(value));
        handleOnFormChange();
    };

    const _handleChangePriceVehicleValue = (value: string) => {
        setValue("vehicleValue", parseInt(value));
        handleOnFormChange();
    };

    const _handleChangePriceInsurance = (value: string) => {
        setValue("insurance", parseInt(value));
        handleOnFormChange();
    };

    useEffect(() => {
        // console.log(vehicleValue);
        const principal = 3100000;
        const rate = 0.12;
        const time = 12;
        const result = principal * (rate / (1 - Math.pow(1 + rate, -time))) + principal;
        console.log(result);
        console.log(10000000 * (0.12 / (1 - Math.pow(1 + 0.12, -12))) + 1000000);
        // #2614368.075939957
    }, [vehicleValue]);

    return (
        <div className={`services_calculator_form_component border_gray card ${className}`}>
            <div className="card-body">
                <form onSubmit={handleOnFormChange}>
                    <div className="row">
                        <div className="col-12 my-3">
                            <div className="form-group">
                                <label className="mandatory">Valor del vehículo</label>
                                <input
                                    type="text"
                                    min={0}
                                    className="form-control"
                                    placeholder="$ 0"
                                    {...register(
                                        "_vehicleValue",
                                        Validators({
                                            required: true,
                                            maxValue: 1000000000,
                                            minValue: 0,
                                            price: true,
                                            onChange: _handleChangePriceVehicleValue,
                                        })
                                    )}
                                />
                            </div>
                        </div>
                        <div className="col-12 my-4">
                            <div className="form-group">
                                <label className="mandatory">Cuota inicial</label>
                                <input
                                    type="text"
                                    min={0}
                                    max={vehicleValue}
                                    className="form-control"
                                    defaultValue={CurrencyParse.toCop(0)}
                                    {...register(
                                        "_initialQuote",
                                        Validators({
                                            required: true,
                                            minValue: 0,
                                            maxValue: vehicleValue - 1,
                                            price: true,
                                            onChange: _handleChangePriceInitialValue,
                                        })
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label className="mandatory">¿Cuánto es tu presupuesto para el carro?</label>
                            <PickerBoxComponent
                                keyName="months"
                                formFunctions={formFunctions}
                                options={options}
                                onChange={handleOnFormChange}
                            />
                            {/* select cuote */}
                        </div>
                        <br />
                    </div>
                    <a
                        target="_blank"
                        href=" https://app.arkdia.co/validate-request-public-wcar"
                        className="px-4 btn btn_orange d-block d-md-inline-block mt-4"
                    >
                        HAZ AQUÍ TU SOLICITUD DE CRÉDITO
                    </a>
                </form>
            </div>
        </div>
    );
};

export default ServicesCalculatorFormComponent;
