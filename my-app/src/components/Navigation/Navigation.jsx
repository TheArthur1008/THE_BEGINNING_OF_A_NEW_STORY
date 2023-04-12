import React from 'react';
import logo from '../../images/logo.png';
import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <img src={logo} alt="logo" className={s.image} />
        <ul className={s.navigation}>
          <li>
            <a className={s.link} href="#home">
              HOME
            </a>
          </li>
          <li>
            <a className={s.link} href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a className={s.link} href="#portfolio">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a className={s.link} href="#services">
              SERVICES
            </a>
          </li>
          <li>
            <a className={s.link} href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
