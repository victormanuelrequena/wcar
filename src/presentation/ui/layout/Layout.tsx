import { FC, useEffect } from "react";
import LayoutProps from "./LayoutProps";
import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/footer/FooterComponent";
import ModalsComponent from "../../providers/modals/modals/ModalsComponent";
import { useLocation } from "react-router-dom";

const Layout: FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <ModalsComponent>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </ModalsComponent>
    )
}

export default Layout;