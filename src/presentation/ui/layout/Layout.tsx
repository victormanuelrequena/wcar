import { FC, useEffect } from "react";
import LayoutProps from "./LayoutProps";
import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/footer/FooterComponent";
import ModalsComponent from "../../providers/modals/modals/ModalsComponent";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { routes } from "../routes/RoutesComponent";

const Layout: FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className="contact_fixed">
                <a href="https://wa.me/573018063302?text=¡Hola%21+Quiero+recibir+asesoría+�&type=phone_number&app_absent=0" className="btn btn_cyan">Contacta un asesor</a>
            </div>
            <ModalsComponent>
                <NavbarComponent />
                {children}
                <FooterComponent />
            </ModalsComponent>
        </>
    )
}

export default Layout;