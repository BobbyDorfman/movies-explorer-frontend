import './Login.css';
import logoHeader from '../../images/logo.svg';
import { Link, useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  function handleStartPage() {
    navigate('/');
  }

  return (
    <section className="login">
      <img className="login__logo" onClick={handleStartPage} src={logoHeader} alt="Логотип"/>
      <div className='login__block'>
        <form className='login__form'>
          <h2 className='login__header'>Рады видеть!</h2>
          <div className='login__form-input'>
            <label className='login__label'>E-mail</label>
            <input
              className="login__input"
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              value="pochta@yandex.ru"
              required
            />
          </div>
          <div className='login__form-input'>
            <label className='login__label'>Пароль</label>
            <input
              className="login__input"
              type="password"
              placeholder=""
              name="password"
              id="password"
              value=""
              required
            />
          </div>
          <button className='login__button' type='submit'>Войти</button>
        </form>
        <p className="login__text">Ещё не зарегистрированы?
          <Link className="login__link" to="/signup">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;