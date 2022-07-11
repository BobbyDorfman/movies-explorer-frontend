import './MoviesCard.css';

function MoviesCard({ title, duration, link, isLiked, owner }) {
  return (
    <section className="movies-card">
      <div className='movies-card__text'>
        <h3 className='movies-card__header'>{title}</h3>
        <p className='movies-card__duration'>{duration}</p>
      </div>
      <img className='movies-card__image' src={link} alt={title}/>
      <div className={`movies-card__like ${isLiked ? (isLiked.length > 0 ? "movies-card__like_active" : "movies-card__like_inactive") : owner && "movies-card__like_delete"}`}></div>
    </section>
  );
}

export default MoviesCard;