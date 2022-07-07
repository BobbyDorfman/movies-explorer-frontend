import './Techs.css';

function Techs() {
  return (
    <section className="techs" id='techs'>
      <h2 className='techs__header'>Технологии</h2>
      <div className='techs__text'>
        <h3 className='techs__text_title'>7 технологий</h3>
        <p className='techs__text_subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className='techs__visualizations'>
        <a className='techs__visualizations_block' href="http://htmlbook.ru/html" target="_blank"
        rel="noreferrer">HTML</a>
        <a className='techs__visualizations_block' href="http://htmlbook.ru/samcss" target="_blank"
        rel="noreferrer">CSS</a>
        <a className='techs__visualizations_block' href="https://learn.javascript.ru/" target="_blank"
        rel="noreferrer">JS</a>
        <a className='techs__visualizations_block' href="https://ru.reactjs.org/" target="_blank"
        rel="noreferrer">React</a>
        <a className='techs__visualizations_block' href="https://git-scm.com/" target="_blank"
        rel="noreferrer">Git</a>
        <a className='techs__visualizations_block' href="https://expressjs.com/ru/" target="_blank"
        rel="noreferrer">Express.js</a>
        <a className='techs__visualizations_block' href="https://www.mongodb.com/" target="_blank"
        rel="noreferrer">mongoDB</a>
      </div>
    </section>
  );
}

export default Techs;
