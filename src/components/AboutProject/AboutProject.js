import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id='about_project'>
      <h2 className='about-project__header'>О проекте</h2>
      <div className='about-project__table'>
        <h3 className='about-project__table-title' id='h1'>Дипломный проект включал 5 этапов</h3>
        <h3 className='about-project__table-title' id='h2'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__table-subtitle' id='p1'>Составление плана, работу над бэкендом, вёрстку,
        добавление функциональности и финальные доработки.</p>
        <p className='about-project__table-subtitle' id='p2'>У каждого этапа был мягкий и жёсткий дедлайн, которые
        нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about-project__visualizations'>
        <h3 className='about-project__visualization about-project__visualization_mod-1'>1 неделя</h3>
        <h3 className='about-project__visualization about-project__visualization_mod-2'>4 недели</h3>
      </div>
      <div className='about-project__descriptions'>
        <p className='about-project__description about-project__description_mod_1'>Back-end</p>
        <p className='about-project__description about-project__description_mod_2'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;