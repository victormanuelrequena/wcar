import InsuranceEntity from "../../../../../../../domain/entities/InsuranceEntity";
import { FieldValues, UseFormReturn } from "react-hook-form";

export default interface ServiceCalculatorFormComponentProps {
    formFunctions:UseFormReturn<FieldValues, any, undefined>,
    insuranceList: InsuranceEntity[];
    className?: string;
    handleOnFormChange: () => void;
}