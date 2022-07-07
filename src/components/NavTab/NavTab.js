import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__navigation">
        <ul className="nav-tab__navigation-links">
          <li className="nav-tab__navigation-li"><a className="nav-tab__navigation-link"
          href="#about_project">О проекте</a></li>
          <li className="nav-tab__navigation-li"><a className="nav-tab__navigation-link"
          href="#techs">Технологии</a></li>
          <li className="nav-tab__navigation-li"><a className="nav-tab__navigation-link"
          href="#about_me">Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;