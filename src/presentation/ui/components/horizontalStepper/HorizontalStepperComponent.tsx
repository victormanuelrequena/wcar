import './HorizontalStepperComponentStyles.scss';
import { FC, Fragment } from "react";
import HorizontalStepperComponentProps from "./HorizontalStepperComponentProps";
import Icons from '../../assets/Icons';

const HorizontalSteperComponent: FC<HorizontalStepperComponentProps> = ({ currentStep, children, changeStep, steps }) => {
    const _handleChangeStep = (step: number) => {
        if (step <= currentStep) changeStep(step);
    }
    return <div className="horizontal_stepper_compoonent">
        <div className="steps pb-4">
            {steps.map((step, index) => (
                <Fragment key={index}>
                    <div>
                        <div className={`step ${currentStep >= index ? 'active hover' : ''}`} onClick={() => _handleChangeStep(index)}>
                            <span className="step_circle">{index + 1}</span>
                            <span className="step_text">{step}</span>
                        </div>
                    </div>
                    {index !== steps.length - 1 && <div className="step_line">
                        <Icons.ChevronRight />
                    </div>}
                </Fragment>
            ))}

        </div>
        <div className="content">
            {children[currentStep]}
        </div>
    </div>
}

export default HorizontalSteperComponent;