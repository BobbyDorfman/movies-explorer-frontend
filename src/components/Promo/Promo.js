import './Promo.css';
import promoImg from '../../images/pic__COLOR_landing-logo.png';

function Promo() {
    return (
      <section className="promo">
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__img" src={promoImg} alt="П - фоновый рисунок Практикума"/>
      </section>
  );
}

export default Promo;