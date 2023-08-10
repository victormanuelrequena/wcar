import { FC } from "react";
import ServicesCalculatorFormComponentProps from "./ServicesCalculatorFormComponentProps";
import Validators from "../../../../utils/Validators";
import PickerBoxComponent from "../../../components/form/pickerBox/PickerBoxComponent";

const ServicesCalculatorFormComponent: FC<ServicesCalculatorFormComponentProps> = ({ insuranceList, className, formFunctions, _handleOnFormChange }) => {

    const { register, setValue, handleSubmit, watch, getValues, formState: { errors } } = formFunctions;


    const options = [
        { label: '12', value: 12, enabled: true },
        { label: '24', value: 24, enabled: true },
        { label: '36', value: 36, enabled: true },
        { label: '48', value: 48, enabled: true },
        { label: '60', value: 60, enabled: true },
        { label: '72', value: 72, enabled: true },
        { label: '84', value: 84, enabled: true },
    ]

    return <div className={`services_calculator_form_component col-12 col-md-6 card ${className}`}>
        <div className="card-body">
            <form onSubmit={_handleOnFormChange}>
                <div className="row">
                    <div className="col-12 my-3">
                        <div className="form-group">
                            <label className="mandatory">Valor del vehiculo</label>
                            <input type="number" className="form-control" {...register('vehicleValue', Validators({
                                required: true,
                                maxLength: 15,
                                onChange: _handleOnFormChange
                            }))} />
                        </div>
                    </div>
                    <div className="col-12 my-4">
                        <div className="form-group">
                            <label className="mandatory">Cuota inicial</label>
                            <input type="number" className="form-control" {...register('initialValue', Validators({
                                required: true,
                                maxLength: 15,
                                onChange: _handleOnFormChange
                            }))} />
                        </div>
                    </div>
                    <div className="row">
                        <PickerBoxComponent keyName="term" formFunctions={formFunctions} options={options} onChange={_handleOnFormChange} />
                        {/* select cuote */}
                    </div>
                    <div className="col-12 my-4">
                        <div className="form-group">
                            <label>Seguro</label>
                            <select id="insuranceSelect" className="form-select insurance_select" {...register('insurance', Validators({
                                onChange: _handleOnFormChange,
                            }))}>
                                {insuranceList.map((insurance, index) => <option key={index} value={insurance.id}>{insurance.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
}

export default ServicesCalculatorFormComponent;