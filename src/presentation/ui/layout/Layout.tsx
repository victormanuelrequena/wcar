import { FC, useEffect, useRef, useState } from "react";
import LayoutProps from "./LayoutProps";
import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/footer/FooterComponent";
import ModalsComponent from "../../providers/modals/modals/ModalsComponent";
import { useLocation } from "react-router-dom";
import "./LayoutStyles.scss";
import { routes } from "../routes/RoutesComponent";

const Layout: FC<LayoutProps> = ({ children }) => {
    const { pathname, search } = useLocation();
    const containerDataRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const _handleScroll = () => {
        //get scroll top of containerDataRef
        const _scrollTop = containerDataRef.current?.scrollTop ?? 0;
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 || _scrollTop > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        containerDataRef.current?.addEventListener("scroll", _handleScroll);
    }, []);

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(pathname, search);
        document.querySelector(".content_app").scrollTo(0, 0);
    }, [pathname, search]);

    return (
        <>
            <div className="contact_fixed">
                <a
                    href="https://wa.me/573018063302?text=¡Hola%21+Quiero+recibir+asesoría+�&type=phone_number&app_absent=0"
                    className="btn btn_cyan"
                    target="_blank"
                >
                    Contacta un asesor
                </a>
            </div>
            <ModalsComponent>
                <div
                    className={`layout_container ${
                        !scrolled && window.location.pathname == routes.home.relativePath && "no_scrolled"
                    }`}
                >
                    <NavbarComponent />
                    <div className="content_app" ref={containerDataRef}>
                        {children}
                        <FooterComponent />
                    </div>
                </div>
            </ModalsComponent>
        </>
    );
};

export default Layout;
