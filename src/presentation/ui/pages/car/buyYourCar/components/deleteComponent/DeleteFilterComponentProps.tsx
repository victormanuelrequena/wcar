import { FieldValues, UseFormReturn } from "react-hook-form";

export default interface DeleteFilterComponentProps {
    formFunctions:UseFormReturn<FieldValues, any, undefined>
    onChange:()=>void
}