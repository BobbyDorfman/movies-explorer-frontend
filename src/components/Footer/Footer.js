import './Footer.css';
import { useLocation } from "react-router-dom";
const date = new Date().getFullYear();

function Footer() {
  const location = useLocation();

  return (
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile" ?
    <footer className="footer">
      <h3 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__block'>
        <p className="footer__copyright">&copy; {date}</p>
        <nav className='footer__nav'>
          <a className='footer__link' href="https://practicum.yandex.ru/" target="_blank"
          rel="noreferrer">Яндекс.Практикум</a>
          <a className='footer__link' href="https://github.com/BobbyDorfman" target="_blank"
          rel="noreferrer">Github</a>
          <a className='footer__link' href="https://www.facebook.com/" target="_blank"
          rel="noreferrer">Facebook</a>
        </nav>
      </div>
    </footer> : <></>
  );
}

export default Footer;