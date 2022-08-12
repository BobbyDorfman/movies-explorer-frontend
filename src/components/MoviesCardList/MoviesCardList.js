import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardMore from "../MoviesCardMore/MoviesCardMore";

function MoviesCardList({ movieCards, onSave, onDelete, savedMovies, listLength, addMovies, currentUser }) {
  return (
    <section className="movies-card-list">
      <div className='movies-card-list__container'>
        {movieCards.map((card, id) => {
          return (
            <div className='movies-card-list__block' key={card.id ? card.id : id}>
              <MoviesCard
                card={card}
                isLiked={card.isLiked}
                onSave={onSave}
                onDelete={onDelete}
                savedMovies={savedMovies}
                currentUser={currentUser}
              />
            </div>
          )
        }).slice(0, listLength)}
      </div>

      {movieCards.length === 0 ? <p>Введите название фильма в поисковой строке</p> : movieCards.length > listLength &&
        <MoviesCardMore addMovies={addMovies}/>}
    </section>
  );
}

export default MoviesCardList;