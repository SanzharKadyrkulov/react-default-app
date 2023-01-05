import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
// import '../Navbar/Navbar.css';

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            makers
          </NavLink>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={() => (click ? handleClick : null)}>
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={() => (click ? handleClick : null)}
              >
                Текущая группа
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className="nav-links"
                onClick={() => (click ? handleClick : null)}
              >
                Посещения
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={() => (click ? handleClick : null)}
              >
                События
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={() => (click ? handleClick : null)}
              >
                Новости
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <img
              // src="./assets/images/navbar_btn.png"
              src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
              alt="error:("
              className="burger-menu__btn_close"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
