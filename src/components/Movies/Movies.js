import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movieCards, onSave, savedMovies, handleSearch, durationSwitch, listLength, addMovies }) {
  return (
      <main>
          <section className="movies">
            <SearchForm /* форма поиска, куда пользователь будет вводить запрос */
              handleSearch={handleSearch}
              durationSwitch={durationSwitch}
            />
            <MoviesCardList /* компонент, который управляет отрисовкой карточек фильмов на страницу
            и их количеством. */
              movieCards={movieCards}
              onSave={onSave}
              savedMovies={savedMovies}
              listLength={listLength}
              addMovies={addMovies}/>
          </section>
      </main>
  );
}

export default Movies;
