import './Header.css';
import logoHeader from '../../images/logo.svg';
import accountIcon from '../../images/icon__COLOR_icon-main.svg';
import { useLocation, Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {

  const [isActive, setIsActive] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  function handleRegister() {
    navigate('/signup');
  }

  function handleLogin() {
    navigate('/signin');
  }

  function handleStartPage() {
    navigate('/');
  }

  function handleMovies() {
    navigate('/movies');
  }

  function handleSavedMovies() {
    navigate('/saved-movies');
  }

  function handleAccount() {
    navigate('/profile');
  }

  function handleNav() {
    setIsActive(!isActive);
  }

  return (
    <div className="location">
      {location.pathname === '/signup' ||
      location.pathname === '/signin' ? null :
        (!loggedIn ?
          (<header className={`header ${location.pathname === '/' ? '' : 'header__not-home-page'}`}>
            <img className="header__logo" onClick={handleStartPage} src={logoHeader} alt="Логотип"/>
            <nav className="header__nav">
              <p className="header__text" onClick={handleRegister}>Регистрация</p>
              <button className='header__button' type="button" onClick={handleLogin}>Войти</button>
            </nav>
          </header>)
          :
          (<header className={`header ${location.pathname === '/' ? '' : 'header__not-home-page'}`}>
            <img className="header__logo" onClick={handleStartPage} src={logoHeader} alt="Логотип"/>
            <nav className="header__navigation">
              <div className="header__navigation-links">
                <Link className="header__navigation-link" to="/movies" onClick={handleMovies}>Фильмы</Link>
                <Link className="header__navigation-link" to="/saved-movies" onClick={handleSavedMovies}>
                  Сохраненные фильмы</Link>
              </div>
              <div className="header__account" onClick={handleAccount}>
                <p className="header__account-text">Аккаунт</p>
                <button className={`header__account-button ${location.pathname === '/' ? 'header__account-button_home-page' : ''}`} type="button">
                  <img className="header__account-logo" src={accountIcon} alt="Аккаунт"/>
                </button>
              </div>
              <button className={`header__burger ${location.pathname === '/' ? 'header__burger_home-page' : ''} ${isActive ? "header__burger_active" : ''}`} type="button" onClick={handleNav}>
              </button>
            </nav>
            {isActive ? <Navigation onClose={handleNav} /> : ""}
        </header>))
      }
    </div>
  );
}

export default Header;