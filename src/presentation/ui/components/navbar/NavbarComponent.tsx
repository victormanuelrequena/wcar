import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavbarStyles.scss'; // Custom CSS file for Navbar
import { Link } from 'react-router-dom';
import { routes } from '../../routes/RoutesComponent';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-transparent px-3 position-md-fixed w-100">
      <Link className="navbar-brand me-5" to={routes.home.relativePath} >
        <img src="/assets/logos/horizontal.svg" alt="Logo" height="50" /> {/* Add the logo image */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-3">
            <Link className="nav-link" to={routes.aboutUs.relativePath}>Sobre Nosotros</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to={routes.sellYourCar.relativePath} className="nav-link">Vende tu carro</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to={routes.buyYourCar.relativePath} className="nav-link">Compra tu carro</Link>
          </li>
          <li className="nav-item mx-3 dropdown">
            <div className="dropdown-title">
              <div className="nav-link">Servicios <span className="text_reduced" style={{fontSize: 10}}>&#9660;</span> </div>
            </div>
            <div className="dropdown_content">
              <Link to={routes.services.relativePath} className="dropdown-item">Financiación</Link>
              <Link to={routes.insurance.relativePath} className="dropdown-item">Seguros</Link>
              <Link to={routes.procedures.relativePath} className="dropdown-item">Trámintes</Link>
            </div>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to={routes.blog.relativePath}>Blog</Link>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="d-lg-none account-mobile">
        <button className="btn btn-primary" type="button">
          <i className="fas fa-user"></i>
        </button>
      </div>
      <div className="d-none d-lg-block">
        <button className="btn d-flex align-items-center" type="button">
          <img src="/assets/icons/account.svg" className='mx-2' alt="" />
          Account
        </button>
      </div>
    </nav >
  );
};

export default NavbarComponent;
