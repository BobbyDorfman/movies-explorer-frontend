import '../index.css';
import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoviesCard from '../MoviesCard/MoviesCard'

function SavedMovies() {
  return (
      <main>
          <section className="saved-movies">
            <MoviesCardList/> {/* форма поиска, куда пользователь будет вводить запрос */}
            <MoviesCard/> {/* компонент одной карточки фильма. */}
          </section>
      </main>
  );
}

export default SavedMovies;
