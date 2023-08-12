import { Props } from "@hookform/error-message";
import { FieldValues, RegisterOptions, UseFormReturn } from "react-hook-form";

export default interface PickerBoxComponentProps {
    formFunctions:UseFormReturn<FieldValues, any, undefined>,
    onChange?: (value: any) => void,
    keyName: string,
    options: {
        label: string,
        value: any,
        enabled: boolean,
    }[],
}