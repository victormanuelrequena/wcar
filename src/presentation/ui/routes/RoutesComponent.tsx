import React, { FC, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RoutesComponentProps from "./RoutesComponentProps";
import UserEntity from "../../../domain/entities/UserEntity";
import HomePage from "../pages/home/HomePage";
import LoadUseCase, { LoadUseCaseName } from "../../../domain/use_cases/default/LoadUseCase";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import di from "../../../di/DependencyInjection";
import BuyYourCarPage from "../pages/car/buyYourCar/BuyYourCarPage";
import DetailedCarPage from "../pages/car/detailedCar/DetailedCarPage";
import BookACarPage from "../pages/car/bookACar/BookACarPage";
import BookADatePage from "../pages/car/bookADate/BookADatePage";
import SellYourCarPage from "../pages/car/sellYourCar/SellYourCarPage";
import QuoteYourCarPage from "../pages/sell/quote/QuoteYourCarPage";
import QuoteSuccessfulPage from "../pages/sell/sucessfullQuote/QuoteSuccessfulPage";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import ServicesPage from "../pages/services/debt/ServicesPage";
import ProceduresPage from "../pages/services/procedures/ProceduresPage";
import InsurancePage from "../pages/services/insurances/InsurancePage";
import BlogPage from "../pages/blog/home/BlogPage";
import BlogDetailedPage from "../pages/blog/detailed/BlogDetailedPage";
import ContactPage from "../pages/contact/ContactPage";
import SignUpPage from "../pages/auth/signUp/SignUpPage";
import SignInPage from "../pages/auth/signIn/SignInPage";
import SendRecoveryCodePage from "../pages/auth/sendRecoveryCode/SendRecoveryCodePage";
import CheckRecoveryCodePage from "../pages/auth/checkRecoveryCode/CheckRecoveryCodePage";
import Error404Page from "../pages/error404/Error404Page";
import GeneralPoliciesPage from "../pages/policies/GeneralPoliciesPage";
import SellerPoliciesPage from "../pages/policies/SellerPoliciesPage";
import BuyerPolicies from "../pages/policies/BuyerPolicies";
import SuccesfulPaymentPage from "../pages/succesfulPayment/SuccesfulPaymentPage";
import BuyOrSellPage from "../pages/landings/buyOrSellPage/BuyOrSellPage";
import { Helmet } from "react-helmet-async";

export interface iRoute {
    name: string,
    path: string,
    relativePath: string,
    component: FC,
    auth: (user: UserEntity | undefined) => boolean,
}

export interface iRouteModule {
    page: iRoute,
    pages: iRoute[],

}
const routes = {
    error_404: {
        name: 'Error 404',
        path: "/error/404",
        relativePath: '/error/404',
        component: Error404Page,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    home: {
        path: "/",
        relativePath: '/',
        component: HomePage,
        helmet: null,
        auth: (user: UserEntity | undefined) => true,
    },
    buyYourCar: {
        path: "/compra-tu-carro/:typeVehicleName?",
        relativePath: '/compra-tu-carro',
        component: BuyYourCarPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    detailedCar: {
        path: "/compra-tu-carro/:typeVehicle/:nameVehicle/:id",
        relativePath: '/compra-tu-carro',
        component: DetailedCarPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    bookCar: {
        path: "/carro/separar/:id",
        relativePath: '/carro/separar',
        component: BookACarPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    dateForCar: {
        path: "/carro/cita/:action/:carId",
        relativePath: '/carro/cita',
        component: BookADatePage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    dateForSell: {
        path: "/:action/cita/",
        relativePath: '/vender/cita',
        component: BookADatePage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    sellYourCar: {
        path: "/vende-tu-carro",
        relativePath: '/vende-tu-carro',
        component: SellYourCarPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    quoteYourCar: {
        path: "/cotizar",
        relativePath: '/cotizar',
        component: QuoteYourCarPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    quoteSuccessful: {
        path: "/cotizar/resultado",
        relativePath: '/cotizar/resultado',
        component: QuoteSuccessfulPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    aboutUs: {
        path: "/nuestra-empresa",
        relativePath: '/nuestra-empresa',
        component: AboutUsPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    services: {
        path: "/financiacion",
        relativePath: '/financiacion',
        component: ServicesPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    contact: {
        path: "/contacto",
        relativePath: '/contacto',
        component: ContactPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    procedures: {
        path: "/tramites-de-vehiculos",
        relativePath: '/tramites-de-vehiculos',
        component: ProceduresPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    insurance: {
        path: "/seguro-todo-riesgo",
        relativePath: '/seguro-todo-riesgo',
        component: InsurancePage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    blog: {
        path: "/blog",
        relativePath: '/blog',
        component: BlogPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    detailedBlog: {
        path: "/blog/:id",
        relativePath: '/blog',
        component: BlogDetailedPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    signIn: {
        path: "/iniciar-sesion",
        relativePath: '/iniciar-sesion',
        component: SignInPage,
        auth: (user: UserEntity | undefined) => user == undefined,
        helmet: null,
    },
    signUp: {
        path: "/registrarse",
        relativePath: '/registrarse',
        component: SignUpPage,
        auth: (user: UserEntity | undefined) => user == undefined,
        helmet: null,
    },
    sendRecoveryCode: {
        path: "/recuperar-contraseña",
        relativePath: "/recuperar-contraseña",
        component: SendRecoveryCodePage,
        auth: (user: UserEntity | undefined) => user == undefined,
        helmet: null,
    },
    updatePasswordRecovery: {
        path: "/recuperar-contraseña/:email",
        relativePath: "/recuperar-contraseña",
        component: CheckRecoveryCodePage,
        auth: (user: UserEntity | undefined) => user == undefined,
        helmet: null,
    },
    generalPolicies: {
        path: "/politica-de-privacidad",
        relativePath: "/politica-de-privacidad",
        component: GeneralPoliciesPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    sellerPolicies: {
        path: "/politicas-vendedor",
        relativePath: "/politicas-vendedor",
        component: SellerPoliciesPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    buyerPolicies: {
        path: "/politicas-comprador",
        relativePath: "/politicas-comprador",
        component: BuyerPolicies,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    succesfulPayment: {
        path: "/pago-exitoso/:bookingId",
        relativePath: "/pago-exitoso",
        component: SuccesfulPaymentPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    },
    buyOrSell: {
        path: "/compra-o-vende-tu-carro-en-colombia",
        relativePath: "/compra-o-vende-tu-carro-en-colombia",
        component: BuyOrSellPage,
        auth: (user: UserEntity | undefined) => true,
        helmet: null,
    }
}

const RoutesComponent: React.FC<RoutesComponentProps> = ({ children }) => {
    // const { user } = useContext(UserContext) as UserContextType;
    const [loaded, setLoaded] = useState<boolean>(false);

    const _load = async () => {
        if (loaded) return;
        try {
            await di.get<LoadUseCase>(LoadUseCaseName).call();
        } catch (_) { }
        setLoaded(true);
    }
    useEffect(() => {
        _load();
    }, []);

    if (!loaded) return <div className="bg_1 d-flex justify-content-center" style={{ width: '100vw', height: '100vh' }}>
        <LoadingComponent showLogo />
    </div>
    return <>
        <BrowserRouter>
            <Routes>
                {Object.values(routes).map((route: any) => <Route key={route.path} path={route.path} element={
                    //create dynamic route and add helmet to it with react.createElement
                    <>
                        <Helmet>
                            {
                                route.helmet != null ? route.helmet : <>
                                    <title>wcar #1 Más que vender te aconsejamos</title>
                                    <meta name="description"
                                        content="¡WCAR - tu mejor opción para comprar y vender carros usados! Conocemos el mercado y te asesoramos para que encuentres el auto perfecto. ¡Contáctanos ahora!" />
                                </>
                            }
                        </Helmet>
                        {React.createElement(route.component)}
                    </>

                }>
                </Route>)}
                <Route path='*' element={<Error404Page />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default RoutesComponent;
export { routes, RoutesComponent };
