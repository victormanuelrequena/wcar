import './AccordeonComponentStyles.scss';
import { FC, useState } from "react";
import AccordeonComponentProps from "./AccordeonComponentProps";
import Icons from "../../assets/Icons";

const AccordeonComponent: FC<AccordeonComponentProps> = ({ title, subtitle, options }) => {

    const [open, setOpen] = useState<number | undefined>(undefined);

    const _handleOpen = (index: number) => {
        if (open == index) setOpen(undefined);
        else setOpen(index);
    }

    return <div className="accordeon_component">
        <div className="w-100">
            <div className="side side_top">
                {title}
            </div>
            <div className="container">
                {subtitle &&
                    <div className="pb-5">
                        {subtitle}
                    </div>}
                {
                    options.map((option, index) => <div className={`item ${index == open && 'active'}`} key={index} onClick={() => _handleOpen(index)}>
                        <div className="header">
                            {typeof option.title == 'string' ? <h5 className="title">{option.title}</h5> : option.title}
                            <div>
                                {index == open ? <Icons.Clear /> : <Icons.Plus />}
                            </div>
                        </div>
                        <div className="content pt-3 px-3 pt-2 pb-4">{option.content}</div>
                    </div>
                    )}
            </div>
        </div>
    </div>
}

export default AccordeonComponent;