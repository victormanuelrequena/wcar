import { FC, useState } from "react";
import SelectOpenComponentProps from "./SelectOpenComponentProps";
import Icons from "../../assets/Icons";

const SelectOpenComponent:FC<SelectOpenComponentProps> = ({ title, children }) => {
    const [open, setOpen] = useState<boolean>(false);

    return <div className="select_open">
        <div className="form_underline d-flex justify-content-between" onClick={()=>setOpen(!open)}>
            {title}
            {open ? <Icons.ChevronUp /> : <Icons.ChevronBottom /> }
        </div>
        {open && <div className="options">
            {children}
        </div>}
    </div>
}

export default SelectOpenComponent;