import './MoviesCardMore.css';

function MoviesCardMore({ movies }) {
  return (
    <section className="movies-card-more">
      <button className={`${movies.length > 11 ? "movies-card-more__button" : "movies-card-more__button-inactive"}`}>Ещё</button>
    </section>
  );
}

export default MoviesCardMore;
