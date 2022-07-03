import './Main.css';
import React from "react";
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'

function Main() {
  return (
      <main>
          <section className="main">
            <Promo/> {/* компонент с вёрсткой баннера страницы «О проекте» */}
            <NavTab/> {/* компонент с навигацией по странице «О проекте». */}
            <AboutProject/> {/* компонент с описанием дипломного проекта. */}
            <Techs/> {/* компонент с использованными технологиями. */}
            <AboutMe/> {/* компонент с информацией о студенте. */}
            <Portfolio/> {/* компонент со ссылками на другие проекты. */}
          </section>
      </main>
  );
}

export default Main;
