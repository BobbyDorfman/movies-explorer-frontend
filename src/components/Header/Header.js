import './Header.css';
import logoHeader from '../../images/logo.svg';
import accountIcon from '../../images/icon__COLOR_icon-main.svg';
import { useLocation, Link, useNavigate } from "react-router-dom";

function Header() {

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

  return (
    <div className='location'>
      {location.pathname === '/' &&
        (<header className="header">
          <img className="header__logo" onClick={handleStartPage} src={logoHeader} alt="Логотип"/>
          <nav className="header__nav">
            <p className="header__text" onClick={handleRegister}>Регистрация</p>
            <button className='header__button' type="button" onClick={handleLogin}>Войти</button>
          </nav>
        </header>)}
      {(location.pathname === '/movies' ||
        location.pathname === '/saved-movies' ||
        location.pathname === '/profile') &&
          (<header className="header header__not-home-page">
            <img className="header__logo" onClick={handleStartPage} src={logoHeader} alt="Логотип"/>
            <nav className="header__navigation">
              <div className="header__navigation-links">
                <Link className="header__navigation-link" to="/movies" onClick={handleMovies}>Фильмы</Link>
                <Link className="header__navigation-link" to="/saved-movies" onClick={handleSavedMovies}>
                  Сохраненные фильмы</Link>
              </div>
              <div className="header__account" onClick={handleAccount}>
                <p className="header__account-text">Аккаунт</p>
                <button className='header__account-button' type="button">
                  <img className="header__account-logo" src={accountIcon} alt="Аккаунт"/>
                </button>
              </div>
            </nav>
          </header>)}
    </div>
  );
}

export default Header;