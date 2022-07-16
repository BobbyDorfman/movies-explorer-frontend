import './SavedMovies.css';
import saveMovies from '../../utils/saveMoviesConst';
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies() {
  return (
      <main>
          <section className="saved-movies">
            <SearchForm/> {/* форма поиска, куда пользователь будет вводить запрос */}
            <MoviesCardList movies={saveMovies}/> {/* форма поиска, куда пользователь будет вводить запрос */}
          </section>
      </main>
  );
}

export default SavedMovies;
