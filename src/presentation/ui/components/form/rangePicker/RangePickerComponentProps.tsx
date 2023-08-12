import { FieldValues, UseFormReturn } from "react-hook-form";

export default interface RangePickerComponentProps {
    formFunctions:UseFormReturn<FieldValues, any, undefined>,
    onChange?: (value: any) => void,
    keyName: string,
    min: number,
    max: number,
}