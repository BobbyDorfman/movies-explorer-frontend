import './Movies.css';
import movies from '../../utils/moviesConst';
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardMore from '../MoviesCardMore/MoviesCardMore';

function Movies() {
  return (
      <main>
          <section className="movies">
            <SearchForm/> {/* форма поиска, куда пользователь будет вводить запрос */}
             {/* <Preloader/> отвечает за работу прелоадера. */}
            <MoviesCardList movies={movies}/> {/* компонент, который управляет отрисовкой карточек фильмов на страницу
            и их количеством. */}
            {/* <MoviesCard/> компонент одной карточки фильма. */}
            <MoviesCardMore movies={movies}/>
          </section>
      </main>
  );
}

export default Movies;
