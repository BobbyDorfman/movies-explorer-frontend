import './SearchForm.css';
import searchIcon from '../../images/search_border.svg';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ handleSearch, durationSwitch }) {
  const localStorageValue = localStorage.getItem('saveSearchValue')
  const localChecked = localStorage.getItem('saveCheck')

  const location = useLocation()

  const [checked, setChecked] = useState(localChecked ?? '0')
  const [value, setValue] = useState(localStorageValue ?? '')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setChecked('0')
    handleSearch(value)
  }

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setChecked('0')
      handleSearch(value)
      setValue('')
    }
  }, [location])


  useEffect(() => {
    if (location.pathname === '/movies') {
      localStorage.setItem('saveSearchValue', value)
      localStorage.setItem('saveCheck', checked)
    }
  }, [value, checked])


  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      durationSwitch(checked)
    }
    if (location.pathname === '/movies') {
      handleSearch(localStorageValue ?? '')
      durationSwitch(checked ?? '0')
    }
  }, [location, checked])

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
        {/* <input className={`search-form__toggle search-form__toggle${checked === '1' ? ':checked::after' : ":checked"}`} type="checkbox" id="toggle-button"
          onClick={() => {
            setChecked(checked === '0' ? '1' : '0')
            durationSwitch(checked)
          }}/> */}

        <button type='button' className={`search-form__toggle search-form__toggle${checked === '1' ? '_on' : "_off"}`}
          onClick={() => {
            setChecked(checked === '0' ? '1' : '0')
            durationSwitch(checked)
          }}/>

        <label className="search-form__slider">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;