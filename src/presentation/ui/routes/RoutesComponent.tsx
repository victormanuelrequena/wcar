import React, { FC, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RoutesComponentProps from "./RoutesComponentProps";
import UserEntity from "../../../domain/entities/UserEntity";
import HomePage from "../pages/home/HomePage";
import LoadUseCase from "../../../domain/use_cases/default/LoadUseCase";
import NotFoundComponent from "../components/notFound/NotFoundComponent";
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
import ServicesPage from "../pages/services/ServicesPage";

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
    // error_404: {
    //     name: 'Error 404',
    //     path: "/error/404",
    //     relativePath: '/error/404',
    //     component: NotFoundComponent,
    //     users: [UserEntityRole.admin, UserEntityRole.normal, undefined],
    // },
    home: {
        path: "/",
        relativePath: '/',
        component: HomePage,
        auth: (user: UserEntity | undefined) => true,
    },
    buyYourCar: {
        path: "/comprar",
        relativePath: '/comprar',
        component: BuyYourCarPage,
        auth: (user: UserEntity | undefined) => true,
    },
    detailedCar: {
        path: "/carro/:id",
        relativePath: '/carro',
        component: DetailedCarPage,
        auth: (user: UserEntity | undefined) => true,
    },
    bookCar: {
        path: "/carro/separar/:id",
        relativePath: '/carro/separar',
        component: BookACarPage,
        auth: (user: UserEntity | undefined) => true,
    },
    dateForCar: {
        path: "/carro/cita/:id/:buyNumberId?",
        relativePath: '/carro/cita',
        component: BookADatePage,
        auth: (user: UserEntity | undefined) => true,
    },
    dateForSell: {
        path: "/vender/cita",
        relativePath: '/vender/cita',
        component: BookADatePage,
        auth: (user: UserEntity | undefined) => true,
    },
    sellYourCar: {
        path: "/vender",
        relativePath: '/vender',
        component: SellYourCarPage,
        auth: (user: UserEntity | undefined) => true,
    },
    quoteYourCar: {
        path: "/cotizar",
        relativePath: '/cotizar',
        component: QuoteYourCarPage,
        auth: (user: UserEntity | undefined) => true,
    },
    quoteSuccessful: {
        path: "/cotizar/resultado",
        relativePath: '/cotizar/resultado',
        component: QuoteSuccessfulPage,
        auth: (user: UserEntity | undefined) => true,
    },
    aboutUs: {
        path: "/sobre-nosotros",
        relativePath: '/sobre-nosotros',
        component: AboutUsPage,
        auth: (user: UserEntity | undefined) => true,
    },
    services: {
        path: "/servicios",
        relativePath: '/servicios',
        component: ServicesPage,
        auth: (user: UserEntity | undefined) => true,
    },
    contact: {
        path: "/contacto",
        relativePath: '/contacto',
        component: ServicesPage,
        auth: (user: UserEntity | undefined) => true,
    }

}

const RoutesComponent: React.FC<RoutesComponentProps> = ({ children }) => {
    // const { user } = useContext(UserContext) as UserContextType;
    const [loaded, setLoaded] = useState<boolean>(false);

    const _load = async () => {
        try {
            await di.get<LoadUseCase>(LoadUseCase.name).call();
        } catch (_){}
        setLoaded(true);
    }
    useEffect(() => {
        _load();
    }, []);

    if (!loaded) return <div className="bg_1" style={{width: '100vw', height: '100vh'}}>
        <LoadingComponent showLogo/>
    </div>
    return <>
        <BrowserRouter>
            <Routes>
                {Object.values(routes).map((route: any) => <Route key={route.path} path={route.path} element={
                    React.createElement(route.component, {}, undefined)
                    // route.auth(user) ? <LayoutComponent >
                    //     {React.createElement(route.component, {}, undefined)}
                    // </LayoutComponent > : <NotFoundComponent />
                }>
                </Route>)}
                <Route path='*' element={<NotFoundComponent />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default RoutesComponent;
export { routes, RoutesComponent };
