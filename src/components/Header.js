// import Hero from "./img/Product/pablo-merchan-montes.webp";
import './../App.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
    <nav className="navbar navbar-expand-lg bg-body-brown container-md navbar-dark">
  <div className="container-fluid">
    <h1 className="text-white text-uppercase mr-5" href="empty">Hivemind</h1>
    <button className="navbar-toggler text-white body-bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white body-bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <Link className="nav-link text-white" to="/Home"> Home </Link>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-white" href="#about">About</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link text-white" href="#testimonial">Tesimonial</a>
        </li>
        <li className="nav-item px-3 dropdown text-white">
          <a className="nav-link dropdown-toggle text-white" href="empty" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu text-white bg-body-brown">
            <li><a className="dropdown-item text-white" href="empty">Tea</a></li>
            <li><a className="dropdown-item text-white" href="empty">Coffee</a></li>
            <li><a className="dropdown-item text-white" href="empty">Food</a></li>
          </ul>
        </li>
        <li className="nav-item px-3">
         <Link className="nav-link text-white" to="/Contact"> Contact </Link>
        </li>
      
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header;