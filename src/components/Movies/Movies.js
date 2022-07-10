import './Movies.css';
import React from "react";
import SearchForm from '../SearchForm/SearchForm'
// import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoviesCard from '../MoviesCard/MoviesCard'

function Movies() {
  return (
      <main>
          <section className="movies">
            <SearchForm/> {/* форма поиска, куда пользователь будет вводить запрос */}
            {/* <Preloader/> отвечает за работу прелоадера. */}
            <MoviesCardList/> {/* компонент, который управляет отрисовкой карточек фильмов на страницу
            и их количеством. */}
            <MoviesCard/> {/* компонент одной карточки фильма. */}
          </section>
      </main>
  );
}

export default Movies;
