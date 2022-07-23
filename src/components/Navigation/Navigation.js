import './Navigation.css';
import { useLocation, Link, useNavigate } from "react-router-dom";
import accountIcon from '../../images/icon__COLOR_icon-main.svg';

function Navigation({ onClose }) {

  const location = useLocation();
  const navigate = useNavigate();

  function handleAccount() {
    navigate('/profile');
  }

  function handleClick() {
    onClose()
    return location
  }

  return (
    <section className="navigation" onClick={onClose}>
      <div className='navigation__block'>
        <div className='navigation__links'>
          <Link className={`navigation__link ${location.pathname === '/' ? 'navigation__link-active' : ''}`} to="/" onClick={handleClick}>Главная</Link>
          <Link className={`navigation__link ${location.pathname === '/movies' ? 'navigation__link-active' : ''}`} to="/movies" onClick={handleClick}>Фильмы</Link>
          <Link className={`navigation__link ${location.pathname === '/saved-movies' ? 'navigation__link-active' : ''}`} to="/saved-movies" onClick={handleClick}>Сохранённые фильмы</Link>
        </div>
        <div className="navigation__account" onClick={handleAccount}>
          <p className="navigation__account-text">Аккаунт</p>
          <button className='navigation__account-button' type="button">
            <img className="navigation__account-logo" src={accountIcon} alt="Аккаунт"/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navigation;