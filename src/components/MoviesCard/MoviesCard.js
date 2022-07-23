import './MoviesCard.css';
import {useLocation} from "react-router-dom";

function MoviesCard({ card, onSave, onDelete, savedMovies }) {
  const location = useLocation();

  return (
    <section className="movies-card">
      <div className='movies-card__text'>
        <h3 className='movies-card__header'>{card.nameRU}</h3>
        <p className='movies-card__duration'>{card.duration} минут(ы)</p>
      </div>
      <a className='movies-card__link' href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className='movies-card__image' src={location.pathname === "/movies" ?
        `https://api.nomoreparties.co${card.image.url}` : card.image} alt={card.nameRU}/>
      </a>
      <button className={`movies-card__like ${location.pathname === "/movies" ?
        (card.id && savedMovies.some((m) => m.movieId === card.id) ? "movies-card__like_active" : "movies-card__like_inactive")
        : "movies-card__like_delete"}`}
        onClick={() => {
          if (location.pathname === "/movies") {
            onSave(card)
          }
          if (location.pathname === "/saved-movies") {
            onDelete(card)
          }
        }}
      />
    </section>
  );
}

export default MoviesCard;