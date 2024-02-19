import { FC, useEffect, useRef, useState } from "react";
import LayoutProps from "./LayoutProps";
import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/footer/FooterComponent";
import ModalsComponent from "../../providers/modals/modals/ModalsComponent";
import { useLocation } from "react-router-dom";
import "./LayoutStyles.scss";
import { routes } from "../routes/RoutesComponent";
import { ContactCard } from "../components/contactCard/contactCard";
import { ApplicationForm } from "../components/applicationForm/applicationForm";
import { ModalNotAvailable } from "../components/modalResult/modalNotAvailable";
import { ModalAvailable } from "../components/modalResult/modalAvailable";

const Layout: FC<LayoutProps> = ({ children }) => {
    const { pathname, search } = useLocation();
    const containerDataRef = useRef<HTMLDivElement>(null);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [alert, setAlert] = useState<boolean>(false);

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
    }, [pathname]);

    return (
        <>
            <div className="contact_fixed">
                <button className="btn btn_cyan" onClick={() => setOpenModal(true)}>
                    Contacta un asesor
                </button>
            </div>
            {openModal && (
                <div className="video_conference d-flex justify-content-center align-items-center">
                    <ContactCard setOpenModal={setOpenModal} setOpenForm={setOpenForm} />
                </div>
            )}
            {openForm && (
                <div className="video_conference d-flex justify-content-center align-items-center">
                    <ApplicationForm setOpenForm={setOpenForm} setOpenModal={setOpenModal} setAlert={setAlert} />
                </div>
            )}
            {alert && (
                <div className="video_conference d-flex justify-content-center align-items-center">
                    <ModalNotAvailable setOpenForm={setOpenForm} setAlert={setAlert} />
                </div>
            )}

            <ModalsComponent>
                <div
                    className={`layout_container ${
                        // routes.home1.relativePath
                        !scrolled && window.location.pathname == routes.home.relativePath && "no_scrolled"
                    }`}
                >
                    <NavbarComponent />
                    <div className="content_app z-0" ref={containerDataRef}>
                        {children}
                        <FooterComponent />
                    </div>
                </div>
            </ModalsComponent>
        </>
    );
};

export default Layout;
