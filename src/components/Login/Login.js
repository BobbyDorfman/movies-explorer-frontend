import './Login.css';
import logoHeader from '../../images/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";

function Login({ submit }) {

  const {values, handleChange, isValid, resetForm} = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    resetForm()
    if (isValid) {
      submit(values)
    }
  }

  const navigate = useNavigate();

  function handleStartPage() {
    navigate('/');
  }

  return (
    <section className="login">
      <img className="login__logo" onClick={handleStartPage} src={logoHeader} alt="Логотип"/>
      <div className='login__block'>
        <form className='login__form' onSubmit={handleSubmit}>
          <h2 className='login__header'>Рады видеть!</h2>
          <div className='login__form-input'>
            <label className='login__label'>E-mail</label>
            <input
              className="login__input"
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              minLength="2"
              maxLength="64"
              // value="pochta@yandex.ru"
              onChange={handleChange}
              required
            />
          </div>
          <div className='login__form-input'>
            <label className='login__label'>Пароль</label>
            <input
              className="login__input"
              type="password"
              placeholder="Пароль"
              name="password"
              id="password"
              minLength="2"
              maxLength="40"
              // value=""
              onChange={handleChange}
              required
            />
          </div>
          <button className='login__button' type='submit' /* disabled={isValid !== true}*/>
            Войти
          </button>
        </form>
        <p className="login__text">Ещё не зарегистрированы?
          <Link className="login__link" to="/signup">Регистрация</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;