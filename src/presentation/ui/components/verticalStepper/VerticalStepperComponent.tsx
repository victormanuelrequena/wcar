import './VerticalStepperComponentStyles.scss'
import { FC } from "react";
import VerticalStepperComponentProps from "./VerticalStepperComponentProps";

const VerticalStepperComponent: FC<VerticalStepperComponentProps> = ({ currentStep, children }) => {
    return <div className="vertical_stepper_component">
        {children.filter((child) => child != false).map((child, index) => <div className={`step ${index === currentStep ? 'current' : ''} ${index < currentStep ? 'prev' : ''} ${index > currentStep ? 'next' : ''}`} key={index}>
            <div className="step_indicator">
                <div className="img_container">
                    {index < currentStep && <img src='/assets/icons/check.svg' alt="" className='img-fluid' />}
                    {index <= currentStep && <img src={index === currentStep ? '/assets/icons/step_pending.svg' : '/assets/icons/check.svg'} alt="" className='img-fluid' />}
                    {index > currentStep && <div className='step_pending' />}
                </div>
            </div>
            <div className="step_content">
                {child}
            </div>
        </div>)}
    </div >
}

export default VerticalStepperComponent;