import './RangePickerComponentStyles.scss';
import { FC } from "react";
import RangePickerComponentProps from "./RangePickerComponentProps";
import { Slider, RangeSlider } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { ErrorMessage } from "@hookform/error-message";
import Validators from "../../../../utils/Validators";

const RangePickerComponent: FC<RangePickerComponentProps> = ({ formFunctions, keyName, onChange, min, max }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = formFunctions;
    const minValue = watch(`${keyName}.min`);
    const maxValue = watch(`${keyName}.max`);

    const _handleChange = (value: number[]) => {
        setValue(`${keyName}.min`, value[0]);
        setValue(`${keyName}.max`, value[1]);
        onChange?.(value);
    }

    return <div className="range_picker_component my-3">
        <RangeSlider value={[minValue ?? min, maxValue == "" ? max : maxValue]} min={min} max={max} onChange={_handleChange}  />
        <div className="div d-flex justify-content-between my-2">
            <div className="flex-grow-1 me-2">
                <input type="number" value={minValue} min={min} max={maxValue ?? max} className="form-control" placeholder="Minimo" {...register(`${keyName}.min`, Validators({
                    maxValue: maxValue ?? max
                }))} />
            </div>
            <div className="flex-grow-1 ms-2">
                <input type="number" value={maxValue} min={minValue ?? min} max={max} className="form-control" placeholder="Máximo" {...register(`${keyName}.max`, Validators({
                    minValue: minValue ?? min
                }))} />
            </div>
        </div>
        <ErrorMessage errors={errors} name={`${keyName}.min`} as="aside" />
        <ErrorMessage errors={errors} name={`${keyName}.max`} as="aside" />
    </div>
}

export default RangePickerComponent;