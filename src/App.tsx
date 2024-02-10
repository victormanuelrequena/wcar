import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import AllyProvider, { AllyProviderName } from "./domain/providers/ally/AllyProvider";
import di from "./di/DependencyInjection";
import { Provider } from "inversify-react";
import RoutesComponent from "./presentation/ui/routes/RoutesComponent";
import BrandProvider, { BrandProviderName } from "./domain/providers/brand/BrandProvider";
import ColorProvider, { ColorProviderName } from "./domain/providers/color/ColorProvider";
import TypeOfFuelProvider, { TypeOfFuelProviderName } from "./domain/providers/typeOfFuel/TypeOfFuelProvider";
import TypeVehicleProvider, { TypeVehicleProviderName } from "./domain/providers/typeVehicle/TypeVehicleProvider";
import DepartmentProvider, { DepartmentProviderName } from "./domain/providers/department/DepartmentProvider";
import UserProvider, { UserProviderName } from "./domain/providers/user/UserProvider";
import ModalsProvider, { ModalsProviderName } from "./domain/providers/modal/ModalsProvider";
import CityProvider, { CityProviderName } from "./domain/providers/city/CityProvider";
import FavoriteCarsProvider, {
    FavoriteCarsProviderName,
} from "./domain/providers/favoriteCars/FavoriteCarsProviderName";
import TagProvider, { TagProviderName } from "./domain/providers/tag/TagProvider";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    // @ts-ignore
    import.meta.url
).toString();

function App() {
    const allyProvider = di.get<AllyProvider>(AllyProviderName);
    const brandProvider = di.get<BrandProvider>(BrandProviderName);
    const colorProvider = di.get<ColorProvider>(ColorProviderName);
    const cityProvider = di.get<CityProvider>(CityProviderName);
    const departmentProvider = di.get<DepartmentProvider>(DepartmentProviderName);
    const favoriteCarsProvider = di.get<FavoriteCarsProvider>(FavoriteCarsProviderName);
    const modalsProvider = di.get<ModalsProvider>(ModalsProviderName);
    const tagProvider = di.get<TagProvider>(TagProviderName);
    const typeOfFuelProvider = di.get<TypeOfFuelProvider>(TypeOfFuelProviderName);
    const typeVehicleProvider = di.get<TypeVehicleProvider>(TypeVehicleProviderName);
    const userProvider = di.get<UserProvider>(UserProviderName);
    useEffect(() => {
        if (navigator.userAgent.indexOf("Win") !== -1) {
            // Obtiene el elemento body
            var body = document.getElementsByTagName("body")[0];
            // Agrega el id "windows" al elemento body
            body.setAttribute("id", "windows");
        }
    }, []);

    return (
        <HelmetProvider>
            <Provider container={di}>
                <allyProvider.Provider>
                    <brandProvider.Provider>
                        <departmentProvider.Provider>
                            <colorProvider.Provider>
                                <cityProvider.Provider>
                                    <tagProvider.Provider>
                                        <typeOfFuelProvider.Provider>
                                            <typeVehicleProvider.Provider>
                                                <userProvider.Provider>
                                                    <modalsProvider.Provider>
                                                        <favoriteCarsProvider.Provider>
                                                            <div className="App">
                                                                <RoutesComponent />
                                                            </div>
                                                        </favoriteCarsProvider.Provider>
                                                    </modalsProvider.Provider>
                                                </userProvider.Provider>
                                            </typeVehicleProvider.Provider>
                                        </typeOfFuelProvider.Provider>
                                    </tagProvider.Provider>
                                </cityProvider.Provider>
                            </colorProvider.Provider>
                        </departmentProvider.Provider>
                    </brandProvider.Provider>
                </allyProvider.Provider>
            </Provider>
        </HelmetProvider>
    );
}

export default App;
