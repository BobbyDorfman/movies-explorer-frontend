import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardMore from "../MoviesCardMore/MoviesCardMore";

function MoviesCardList({ movieCards, onSave, onDelete, savedMovies, listLength, addMovies }) {
  return (
    <section className="movies-card-list">
      <div className='movies-card-list__container'>
        {movieCards.map((card, id) => {
          return (
            <div className='movies-card-list__block' key={card.id ? card.id : id}>
              <MoviesCard card={card} isLiked={card.isLiked} onSave={onSave} onDelete={onDelete}
                savedMovies={savedMovies} />
            </div>
          )
        }).slice(0, listLength)}
      </div>

      {<div className={`${movieCards.length > 12 ? "movies-card-list__button" : "movies-card-list__button-none"}`}>
        <MoviesCardMore addMovies={addMovies}/>
      </div>}
    </section>
  );
}

export default MoviesCardList;