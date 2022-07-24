import './MoviesCardMore.css';

const MoviesCardMore = ({ addMovies, card }) => {
  return (
    <div className='movies-card-more'>
      <button onClick={() => addMovies()} className="movies-card-more__button">Еще</button>
    </div>
  )
};

export default MoviesCardMore
