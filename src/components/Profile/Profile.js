import './Profile.css';
import { Link } from "react-router-dom";
import {CurrentUserContext} from "../constexts/CurrentUserContext";
import {useContext, useState} from "react";

function Profile({ signOut, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);

  function handleChangeName(evt) {
    setUserName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setUserEmail(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({name: userName, email: userEmail})
  }

  return (
    <section className="profile">
      <div className="profile__block">
        <form className='profile__form' onSubmit={handleSubmit}>
          <h2 className='profile__header'>{`Привет, ${currentUser.name}!`}</h2>
          <div className='profile__text'>
            <label className='profile__form-label'>Имя</label>
            <input className='profile__form-input' value={userName} onChange={handleChangeName}/>
          </div>
          <div className='profile__text'>
            <label className='profile__form-label'>E-mail</label>
            <input className='profile__form-input' value={userEmail} onChange={handleChangeEmail}/>
          </div>
          <button className='profile__button' type='submit'>Редактировать</button>
        </form>
        <Link className='profile__link' to='/signin'>Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default Profile;