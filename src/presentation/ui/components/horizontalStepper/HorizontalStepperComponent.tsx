import { FC } from "react";
import HorizontalStepperComponentProps from "./HorizontalStepperComponentProps";

const HorizontalSteperComponent:FC<HorizontalStepperComponentProps> = ({currentStep, children, changeStep}) => {
    return <div className="horizontal_stepper_compoonent">
        <div className="steps"></div>
        <div className="content">
            {children[currentStep]}
        </div>
    </div>
}

export default HorizontalSteperComponent;