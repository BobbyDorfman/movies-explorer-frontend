import './Register.css';
import logoHeader from '../../images/logo.svg';
import { Link, useNavigate } from "react-router-dom";


function Register() {

  const navigate = useNavigate();

  function handleStartPage() {
    navigate('/');
  }

  return (
    <section className="register">
      <img className="register__logo" onClick={handleStartPage} src={logoHeader} alt="Логотип"/>
      <div className='register__block'>
        <form className='register__form'>
          <h2 className='register__header'>Добро пожаловать!</h2>
          <div className='register__form-input'>
            <label className='register__label'>Имя</label>
            <input
              className="register__input"
              type="text"
              placeholder="Имя"
              name="name"
              id="name"
              value="Виталий"
              minlength="2"
              maxlength="30"
              required
            />
          </div>
          <div className='register__form-input'>
            <label className='register__label'>E-mail</label>
            <input
              className="register__input"
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              value="pochta@yandex.ru"
              required
            />
          </div>
          <div className='register__form-input'>
            <label className='register__label'>Пароль</label>
            <input
              className="register__input"
              type="password"
              placeholder="password"
              name="password"
              id="password"
              value="••••••••••••••"
              required
            />
          </div>
          <button className='register__button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className="register__text">Уже зарегистрированы?
          <Link className="register__link" to="/signin"> Войти</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;