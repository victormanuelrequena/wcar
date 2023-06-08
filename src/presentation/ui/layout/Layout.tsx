import { FC } from "react";
import LayoutProps from "./LayoutProps";
import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/footer/FooterComponent";

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </>
    )
}

export default Layout;