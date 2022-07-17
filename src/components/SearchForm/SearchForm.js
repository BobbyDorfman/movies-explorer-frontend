import './SearchForm.css';
// import searchIcon from '../../images/search.svg';
import searchIcon from '../../images/search_border.svg';


function SearchForm() {
    return (
      <section className="search-form">
        <form className='search-form__area' action="">
          <input className='search-form__input' type="search" id="search" name="search" placeholder='Фильм' required/>
          <button className='search-form__button'>
            <img className="search-form__icon" src={searchIcon} alt="Аккаунт"/>
          </button>
        </form>
        <div className="search-form__checkbox">
          <input className="search-form__toggle" type="checkbox" id="toggle-button"/>
          <label className="search-form__slider">Короткометражки</label>
        </div>
      </section>
  );
}

export default SearchForm;