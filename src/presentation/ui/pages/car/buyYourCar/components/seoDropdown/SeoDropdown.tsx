import "./SeoDropdownStyles.scss";
import { FC, useState } from "react";
import Icons from "../../../../../assets/Icons";

interface SeoDropdownProps {
    subtitle?: String | undefined;
    options: {
        title: String | React.ReactNode;
        content: string | React.ReactNode;
        typeElement: string;
    }[];
}

const SeoDropdown: FC<SeoDropdownProps> = ({ subtitle, options }) => {
    const [open, setOpen] = useState<number | undefined>(undefined);

    const _handleOpen = (index: number) => {
        if (open == index) setOpen(undefined);
        else setOpen(index);
    };

    return (
        <div className="accordeon_component">
            <div className="w-100">
                {/* <div className="side side_top">
                {title}
            </div> */}
                <div className="container">
                    {subtitle && <div className="pb-5">{subtitle}</div>}
                    {options.map((option, index) => (
                        <div
                            className={`item ${index == open && "active"}`}
                            key={index}
                            onClick={() => _handleOpen(index)}
                        >
                            <div className="header">
                                {option.typeElement === "h1" ? (
                                    <h1 className="title">{option.title}</h1>
                                ) : option.typeElement === "h2" ? (
                                    <h2 className="title">{option.title}</h2>
                                ) : option.typeElement === "h3" ? (
                                    <h3 className="title">{option.title}</h3>
                                ) : (
                                    <h4 className="title">{option.title}</h4>
                                )}
                                <div>{index == open ? <Icons.Clear /> : <Icons.Plus />}</div>
                            </div>
                            <div className="content pt-3 px-3 pt-2 pb-4">{option.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeoDropdown;
