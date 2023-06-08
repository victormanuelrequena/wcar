import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import NavbarComponent from './presentation/ui/components/navbar/NavbarComponent';
import HomePage from './presentation/ui/pages/home/HomePage';
import AlliesProvider, { AlliesProviderName } from './domain/providers/allies/AlliesProvider';
import di from './di/DependencyInjection';
import { Provider } from 'inversify-react';
import RoutesComponent from './presentation/ui/routes/RoutesComponent';

function App() {
  const alliesProvider = di.get<AlliesProvider>(AlliesProviderName);

  return (
    <Provider container={di}>
      <alliesProvider.Provider>
        <div className="App">
          <RoutesComponent />
        </div>
      </alliesProvider.Provider>
    </Provider>
  );
}

export default App;
