import './PickerBoxComponentStyles.scss';
import { FC } from "react";
import PickerBoxComponentProps from "./PickerBoxComponentProps";
import { ErrorMessage } from "@hookform/error-message";

const PickerBoxComponent: FC<PickerBoxComponentProps> = ({ formFunctions, options, keyName, onChange }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = formFunctions;
    const value = watch(keyName);

    const _handleClick = (option: any) => {
        if (!option.enabled) return;
        setValue(keyName, option.value);
        onChange?.(option.value);
    }

    return <div className="picker_box form-group">
        <div className="w-100 d-flex flex-wrap">
            {options.map((option, index) => <div key={index}
                onClick={() => _handleClick(option)}
                className={`card_option_picker hover ${value?.toString() == option.value.toString() && 'selected'} ${!option.enabled && 'disabled'}`}>
                {option.label}
            </div>)}
        </div>
        <input className='form-control' type="hidden" {...register(keyName)} />
        <ErrorMessage as="aside" errors={errors} name={keyName} />
    </div>

}

PickerBoxComponent.defaultProps = {
    onChange: undefined,
}

export default PickerBoxComponent;