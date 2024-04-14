import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/public/img-8/logo.svg';
import search from '/public/icons/search.svg';
import buy from '/public/icons/buy.svg';
import './navbarCustom.css';

function NavbarCustom() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desplegableVisible, setDesplegableVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); "login link"
  };

  const toggleDesplegable = () => {
    setDesplegableVisible(!desplegableVisible);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.toLowerCase() === 'cerrar sesión') {

      navigate('/home');
    }
  };

  useEffect(() => {

    setIsLoginPage(location.pathname === '/login');
  }, [location.pathname]);

  return (
    <>
      <nav className={`navBar ${menuOpen ? 'menuOpen' : ''}`}>
        <div className="burger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>


        <Link to="/">
          <img className="link" id="logo" src={logo} alt="logo galería de arte AuraGallery" />
        </Link>

        <div className="overlay" onClick={toggleMenu}></div>


        <div className="iconHolder">
          <Link to="/">
          <div className="catalogLink">
            <h3 className='links'>catálogo</h3>
          </div>
          </Link>

          <h3 id='loginButton'>{isLoginPage ? <Link to="/" className={isLoginPage ? 'login closeactive' : 'closedesable'}>logout</Link> : <Link to="/login" className={isLoginPage ? 'login closeactive' : 'closedesable'}>login</Link>}</h3>

          <Link to="/buscar">
            <img className="link" id='search' src={search} />
          </Link>

          <Link to="/shopping">
            <img className="link" id='buy' src={buy} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavbarCustom
