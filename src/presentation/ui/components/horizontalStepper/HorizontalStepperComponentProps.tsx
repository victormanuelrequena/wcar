export default interface HorizontalStepperComponentProps{
    currentStep: number;
    changeStep: (step: number) => void;
    steps: string[];
    children: JSX.Element[];
}