import './Portfolio.css';

function Portfolio() {
    return (
      <section className="portfolio">
        <h3 className='portfolio__header'>Портфолио</h3>
        <div className='portfolio__links'>
          <a className='portfolio__link' href="https://bobbydorfman.github.io/how-to-learn/" target="_blank" rel="noreferrer">
            <p className='portfolio__link-text'>Статичный сайт</p>
            <p className='portfolio__link-text'>↗</p>
          </a>
          <a className='portfolio__link' href="https://bobbydorfman.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <p className='portfolio__link-text'>↗</p>
          </a>
          <a className='portfolio__link' href="https://bobbydorfman.nomoredomains.xyz/" target="_blank" rel="noreferrer">
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <p className='portfolio__link-text'>↗</p>
          </a>
        </div>
      </section>
  );
}

export default Portfolio;