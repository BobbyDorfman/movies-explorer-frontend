import './Profile.css';
import { Link } from "react-router-dom";
import {CurrentUserContext} from "../../constexts/CurrentUserContext";
import {useContext, useState} from "react";

function Profile({ signOut, onSubmit }) {
  const user = useContext(CurrentUserContext);

  const [userName, setUserName] = useState(user?.name);
  const [userEmail, setUserEmail] = useState(user?.email);

  function handleChangeName(evt) {
    setUserName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setUserEmail(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      name: userName,
      email: userEmail
    })
  }

  return (
    <section className="profile">
      <div className="profile__block">
        <form className='profile__form' onSubmit={handleSubmit}>
          <h2 className='profile__header'>{`Привет, ${user.name}!`}</h2>
          <div className='profile__text'>
            <label className='profile__form-label'>Имя</label>
            <input
              className='profile__form-input'
              onChange={handleChangeName}
              name="name"
              id="name"
              type="text"
              minLength="2"
              maxLength="30"
              defaultValue={user.name}
              required
            />
          </div>
          <div className='profile__text'>
            <label className='profile__form-label'>E-mail</label>
            <input
              className='profile__form-input'
              onChange={handleChangeEmail}
              name="email"
              id="email"
              type="email"
              defaultValue={user.email}
              required
            />
          </div>
          <button className='profile__button' type='submit'>Редактировать</button>
        </form>
        <Link className='profile__link' to='/signin' onClick={signOut}>Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default Profile;