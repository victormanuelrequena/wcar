import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.scss';
import NavbarComponent from './presentation/ui/components/navbar/NavbarComponent';
import HomePage from './presentation/ui/pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomePage />
    </div>
  );
}

export default App;
