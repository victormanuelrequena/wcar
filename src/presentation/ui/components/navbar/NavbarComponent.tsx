import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavbarStyles.scss'; // Custom CSS file for Navbar

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-transparent px-3 position-md-fixed w-100">
      <a className="navbar-brand me-5" href="#">
        <img src="/assets/logos/horizontal.svg" alt="Logo" height="50" /> {/* Add the logo image */}
      </a>
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
            <a className="nav-link" href="#">Sobre Nosotros</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Vende tu carro</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Compra tu carro</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Servicios</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Blog</a>
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
    </nav>
  );
};

export default NavbarComponent;