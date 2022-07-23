import './SearchForm.css';
import searchIcon from '../../images/search_border.svg';
import React, {useState} from "react";


function SearchForm({ handleSearch, durationSwitch }) {
  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault()

    handleSearch(value)
  }

  return (
    <section className="search-form">
      <form className='search-form__area' onSubmit={(e) => handleSubmitForm(e)}>
        <input className='search-form__input' type="search" id="search" value={value} name="search" placeholder='Фильм' required
          onChange={(e) => setValue(e.target.value)}/>
        <button className='search-form__button'>
          <img className="search-form__icon" src={searchIcon} alt="Аккаунт"/>
        </button>
      </form>
      <div className="search-form__checkbox">
        <input className={`search-form__toggle search-form__toggle${checked ? ':checked::after' : ":checked"}`} type="checkbox" id="toggle-button"
          onClick={() => {
            setChecked(!checked)
            durationSwitch(checked)
          }}/>
        <label className="search-form__slider">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;