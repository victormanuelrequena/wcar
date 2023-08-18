import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import NavbarComponent from './presentation/ui/components/navbar/NavbarComponent';
import HomePage from './presentation/ui/pages/home/HomePage';
import AllyProvider, { AllyProviderName } from './domain/providers/ally/AllyProvider';
import di from './di/DependencyInjection';
import { Provider } from 'inversify-react';
import RoutesComponent from './presentation/ui/routes/RoutesComponent';
import BrandProvider, { BrandProviderName } from './domain/providers/brand/BrandProvider';
import ColorProvider, { ColorProviderName } from './domain/providers/color/ColorProvider';
import TypeOfFuelProvider, { TypeOfFuelProviderName } from './domain/providers/typeOfFuel/TypeOfFuelProvider';
import TypeVehicleProvider, { TypeVehicleProviderName } from './domain/providers/typeVehicle/TypeVehicleProvider';
import { useEffect, useState } from 'react';
import LoadingComponent from './presentation/ui/components/LoadingComponent/LoadingComponent';
import LoadUseCase from './domain/use_cases/default/LoadUseCase';
import DepartmentProvider, { DepartmentProviderName } from './domain/providers/department/DepartmentProvider';
import UserProvider, { UserProviderName } from './domain/providers/user/UserProvider';
import ModalsProvider, { ModalsProviderName } from './domain/providers/modal/ModalsProvider';
import CityProvider, { CityProviderName } from './domain/providers/city/CityProvider';
import FavoriteCarsProvider, { FavoriteCarsProviderName } from './domain/providers/favoriteCars/FavoriteCarsProviderName';
import TagProvider, { TagProviderName } from './domain/providers/tag/TagProvider';

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

  const [loaded, setLoaded] = useState<boolean>(false);

  const _loadApp = async () => {
    try {
      await di.get<LoadUseCase>(LoadUseCase.name).call();
      setLoaded(true);
    } catch (error) {
      console.log('error inload app', error);
      setLoaded(true);
    }
  }

  useEffect(() => {
    _loadApp();
  }, []);

  if (!loaded) return <div className="bg_1 d-flex justify-content-center" style={{ width: '100vw', height: '100vh' }}>
    <LoadingComponent showLogo />
  </div>

  return (
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
    </Provider >
  );
}

export default App;
