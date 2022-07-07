import './AboutMe.css';
import AboutMeAvatar from '../../images/Avatar.jpg';

function AboutMe() {
    return (
      <section className="about-me" id='about_me'>
        <h2 className='about-me__header'>Студент</h2>
        <div className='about-me__card'>
          <div className='about-me__text'>
            <h3 className='about-me__title'>Сергей</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 27 лет</p>
            <p className='about-me__descriptions'>Я родился в Омске и перехал в Санкт-Петербург, закончил
            энергетический институт в ОмГТУ.
            У меня есть жена и собака. Я люблю играть в PS, гулять и собираться с родствениками и друзьями.
            Недавно начал кодить. Занялся изучением веб-разработки, т.к. мне нравится воплощать идеи в жизнь.
            Веб-разработка имеет неограниченные возможности, которые впечатляют. Очень нравиться видеть как
            задумка оживает! С 2019 и по настоящее время работаю в сфере IT, занимаюсь продажами и
            сопровождением клиентов по облачным сервисам 1С.</p>
            <div className='about-me__links'>
              <a className='about-me__link' href="https://www.facebook.com/" target="_blank"
              rel="noreferrer">Facebook</a>
              <a className='about-me__link' href="https://github.com/BobbyDorfman" target="_blank"
              rel="noreferrer">Github</a>
            </div>
          </div>
          <img className="about-me__avatar" src={AboutMeAvatar} alt="Аватар"/>
        </div>
      </section>
  );
}

export default AboutMe;