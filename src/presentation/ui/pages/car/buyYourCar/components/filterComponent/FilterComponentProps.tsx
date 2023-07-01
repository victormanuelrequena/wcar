import { FieldValues, UseFormReturn } from "react-hook-form";

export default interface FilterComponentProps {
    formFunctions:UseFormReturn<FieldValues, any, undefined>
    isOpen?: boolean;
    setIsOpen: (value: boolean) => void;
}