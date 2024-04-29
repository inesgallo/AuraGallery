import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/public/img-8/logo.svg';
import search from '/public/icons/search.svg';
import buy from '/public/icons/buy.svg';
import './navbarCustom.css';
import { UserContext } from '../../context/UserContext';

function NavbarCustom() {
  const { isLoggedIn, logout, user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); "login link"
  };

  const handleLogout = () => {
    logout();
  }

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
              <h3 className='links closeactive'>catálogo</h3>
            </div>
          </Link>

          <h3 id='loginButton'>
            {isLoggedIn ?
              <React.Fragment>
                <div className='d-flex flex-grow-2'>
                  <Link to="/artist/dashboard" className="add-obra me-4 closeactive">Añadir obra</Link>
                  <Link to="/" onClick={handleLogout} className={isLoggedIn ? 'login closeactive' : 'closedesable'}>Logout</Link>
                </div>
              </React.Fragment>
              :
              <Link to="/login" className={isLoggedIn ? 'login closeactive' : 'closedesable'}>Login</Link>}</h3>

        </div>

        <div className="searchAndBuyIcons">
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

export default NavbarCustom;
