import {FC} from "react";
import './ServiceItemSubComponentStyles.scss'
import ServiceItemSubComponentProps from "./ServiceItemSubComponentProps";

const ServiceItemSubComponent: FC<ServiceItemSubComponentProps> = ({title, description, icon}) => {
    return <div className="col-xs-12 col-sm-7 col-md-4 col-lg-3 service_item_sub">
        <div className="service_icon_container">
            {icon}
        </div>
        <div className="service_container">
            <h5 className="text_bold">{title}</h5>
            <p className="text_light">{description}</p>
        </div>
    </div>
}
export default ServiceItemSubComponent;