import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavbarStyles.scss'; // Custom CSS file for Navbar
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/RoutesComponent';
import { Collapse, Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Icons from '../../assets/Icons';
import CardFavoriteComponent from './components/cardFavorite/CardFavoriteComponent';
import UserContext from '../../../../domain/providers/user/UserContext';
import UserContextType from '../../../../domain/providers/user/UserContextType';
import di from '../../../../di/DependencyInjection';
import SignOutUseCase, { SignOutUseCaseName } from '../../../../domain/use_cases/auth/SignOutUseCase';
import TypeVehicleContext from '../../../../domain/providers/typeVehicle/TypeVehicleContext';
import TypeVehicleContextType from '../../../../domain/providers/typeVehicle/TypeVehicleContextType';

const NavbarComponent = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const { typeVehicles } = useContext(TypeVehicleContext) as TypeVehicleContextType;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const _handleAccountButton = async () => {
    console.log('clicked button', user);
    if (user == null) {
      navigate(routes.signIn.relativePath);
    } else {
      await di.get<SignOutUseCase>(SignOutUseCaseName).call();
      navigate(routes.home.relativePath);
    }
  }


  return (
    <Navbar className="bg-transparent px-3 position-md-fixed w-100" expand="lg">
      <Link className="navbar-brand me-5" to={routes.home.relativePath}>
        <img src="/assets/logos/horizontal.svg" alt="Wcar" height="50" /> {/* Add the logo image */}
      </Link>

      <Collapse navbar id="navbarNav" isOpen={isOpen}>
        <Nav className="ml-auto d-md-flex align-items-center" navbar>
          <NavItem className="mx-3">
            <Link className="nav-link" to={routes.aboutUs.relativePath}>Sobre Nosotros</Link>
          </NavItem>
          <NavItem className="mx-3">
            <Link to={routes.sellYourCar.relativePath} className="nav-link">Vende tu carro</Link>
          </NavItem>
          <NavItem className="mx-3">
            <div className="dropdown">
              <div className="dropdown-title">
                <Link to={routes.buyYourCar.relativePath} className="nav-link">Compra tu carro<span className="text_reduced" style={{ fontSize: 10 }}>&#9660;</span> </Link>
              </div>
              <div className="dropdown_content">
                {typeVehicles.map((typeVehicle, index) => <Link key={index} to={routes.buyYourCar.relativePath + '/' + typeVehicle.name} className="dropdown-item">
                  <img src={typeVehicle.photo} alt={typeVehicle.name} className="me-2" width={24} />
                  {typeVehicle.name} <span className="text_gray">({typeVehicle.count ?? 0})</span>
                </Link>)}
              </div>
            </div>
          </NavItem>
          <NavItem className="mx-3">
            <div className="dropdown">
              <div className="dropdown-title">
                <div className="nav-link">Servicios <span className="text_reduced" style={{ fontSize: 10 }}>&#9660;</span> </div>
              </div>
              <div className="dropdown_content">
                <Link to={routes.services.relativePath} className="dropdown-item">Financiación</Link>
                <Link to={routes.insurance.relativePath} className="dropdown-item">Seguros</Link>
                <Link to={routes.procedures.relativePath} className="dropdown-item">Trámites</Link>
              </div>
            </div>
          </NavItem>
          <NavItem className="mx-3">
            <Link className="nav-link" to={routes.blog.relativePath}>Blog</Link>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink href={routes.contact.relativePath}>Contacto</NavLink>
          </NavItem>
        </Nav>
      </Collapse>

      <div className="d-flex navbar_icons">
        <div className="dropdown d-flex justify-content-center align-items-center">
          <div className="">
            <Icons.FavoriteHearth width={20} height={20} />
          </div>
          <div className="dropdown_content" style={{ left: '-180px' }}>
            <CardFavoriteComponent />
          </div>
        </div>
        <div className="btn d-flex align-items-center" onClick={_handleAccountButton}>
          <Icons.PersonRounded width={20} height={20} />
          <div className="d-none d-xl-block">
            {user?.name ?? 'Cuenta'}
          </div>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
