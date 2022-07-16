import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <section className="movies-card-list">
      {movies.map((card, id) => {
        return (
          <div className='movies-card-list__block' key={id}>
            <MoviesCard title={card.title} duration={card.duration} link={card.link} isLiked={card.isLiked} owner={card.owner} />
          </div>
        )
      })}
    </section>
  );
}

export default MoviesCardList;