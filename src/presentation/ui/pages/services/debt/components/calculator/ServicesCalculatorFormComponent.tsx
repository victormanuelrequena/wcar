import { FC } from "react";
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
                </form>
            </div>
        </div>
    );
};

export default ServicesCalculatorFormComponent;
