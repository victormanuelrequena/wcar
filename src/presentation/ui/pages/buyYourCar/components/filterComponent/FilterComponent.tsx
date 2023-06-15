import { FC } from "react";
import FilterComponentProps from "./FilterComponentProps";

const FilterComponent:FC<FilterComponentProps> = ({formFunctions, isOpen, setIsOpen}) => {
    const {register, setValue} = formFunctions;
    
    return <div className={`filter_component ps-5 ${isOpen && 'open'}`}>
        <div className="back_drop" onClick={()=>setIsOpen(false)}></div>
        <div className="w-100 d-flex align-items-center" onClick={()=>setIsOpen(false)}>
            <img src="/assets/icons/filter.svg" alt="" />
            <span className="ms-2"></span>Ocultar filtros</div>
    </div>
}

FilterComponent.defaultProps = {
    isOpen: false,
}
export default FilterComponent;