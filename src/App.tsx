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

function App() {
  const allyProvider = di.get<AllyProvider>(AllyProviderName);
  const brandProvider = di.get<BrandProvider>(BrandProviderName);
  const departmentProvider = di.get<DepartmentProvider>(DepartmentProviderName);
  const colorProvider = di.get<ColorProvider>(ColorProviderName);
  const typeOfFuelProvider = di.get<TypeOfFuelProvider>(TypeOfFuelProviderName);
  const typeVehicleProvider = di.get<TypeVehicleProvider>(TypeVehicleProviderName);

  const [loaded, setLoaded] = useState<boolean>(false);

  const _loadApp = async () => {
    await di.get<LoadUseCase>(LoadUseCase.name).call();
    setLoaded(true);
  }

  useEffect(() => {
    _loadApp();
  }, []);

  if (!loaded) return <LoadingComponent />

  return (
    <Provider container={di}>
      <allyProvider.Provider>
        <brandProvider.Provider>
          <departmentProvider.Provider>
            <colorProvider.Provider>
              <typeOfFuelProvider.Provider>
                <typeVehicleProvider.Provider>
                  <div className="App">
                    <RoutesComponent />
                  </div>
                </typeVehicleProvider.Provider>
              </typeOfFuelProvider.Provider>
            </colorProvider.Provider>
          </departmentProvider.Provider>
        </brandProvider.Provider>
      </allyProvider.Provider>
    </Provider >
  );
}

export default App;
