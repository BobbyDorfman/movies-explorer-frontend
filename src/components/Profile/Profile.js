import './Profile.css';
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__block">
        <form className='profile__form'>
          <h2 className='profile__header'>Привет, Виталий!</h2>
          <div className='profile__text'>
            <label className='profile__form-label'>Имя</label>
            <input className='profile__form-input' value="Виталий"/>
          </div>
          <div className='profile__text'>
            <label className='profile__form-label'>E-mail</label>
            <input className='profile__form-input' value="pochta@yandex.ru"/>
          </div>
          <button className='profile__button' type='submit'>Редактировать</button>
        </form>
        <Link className='profile__link' to='/signin'>Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default Profile;