import './SavedMovies.css';
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies({ movieCards, onDelete, listLength, handleSearch, durationSwitch }) {
  return (
      <main>
          <section className="saved-movies">
            <SearchForm handleSearch={handleSearch} durationSwitch={durationSwitch}/>
            {/* форма поиска, куда пользователь будет вводить запрос */}
            <MoviesCardList movieCards={movieCards} onDelete={onDelete} listLength={listLength}/>
            {/* форма поиска, куда пользователь будет вводить запрос */}
          </section>
      </main>
  );
}

export default SavedMovies;
