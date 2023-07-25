export default interface HorizontalStepperComponentProps{
    currentStep: number;
    changeStep: (step: number) => void;
    children: JSX.Element[];
}