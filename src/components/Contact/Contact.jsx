import React from 'react';
import logo from '../../images/logo.png';
import s from './Contact.module.scss';

import sprite from '../../images/symbol-defs.svg';

const Contact = () => {
  return (
    <section className={s.wrapperContacts} id="contact">
      <div className={s.container}>
        <div className={s.contacts}>
          <img src={logo} alt="logo" width="83" height="83" />
          <p className={s.description}>Premium design & build contractor.</p>
          <p className={s.adress}>
            <span>212.837.8362</span>
            <a
              href="mailto:CONTACT@TITANCONTRACTINGCORP.COM"
              className={s.link}
            >
              CONTACT@TITANCONTRACTINGCORP.COM
            </a>
          </p>
        </div>
        <div className={s.wrapper}>
          <div>
            <h3 className={s.subtitle}>Business areas</h3>
            <ul>
              <li className={s.item}>Architecture</li>
              <li className={s.item}>Engineering</li>
              <li className={s.item}>Design + Build</li>
              <li className={s.item}>Construction</li>
            </ul>
          </div>
          <div>
            <h3 className={s.subtitle}>Pages</h3>
            <ul>
              <li className={s.item}>Home</li>
              <li className={s.item}>About</li>
              <li className={s.item}>Portfolio</li>
              <li className={s.item}>Services</li>
              <li className={s.item}>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.containerInput}>
        <div>
          <h3 className={s.subtitle}>CONTACT US TO SCHEDULE AN APPOINTMENT</h3>
          <p>LET’S GET IN TOUCH</p>
        </div>
        <div>
          <input type="text" />

          <span className={s.wrapperSvg}>
            <svg width="65" height="35">
              <rect
                width="55"
                height="25"
                fill="black"
                stroke="black"
                strokeWidth="0"
                x="0"
                y="8"
                rx="8"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className={s.containerInput}>
        <div>
          <h3 className={s.subtitle}>VISIT OUR OFFICE</h3>
          <p>
            25 Broadway
            <br /> New York
            <br /> NY 10004
          </p>
        </div>
        <div>
          <ul className={s.list}>
            <li>
              <svg width="30" height="20">
                <use href={`${sprite}#twitter`}></use>
              </svg>
            </li>
            <li>
              <svg width="30" height="20">
                <use href={`${sprite}#instagram`}></use>
              </svg>
            </li>
            <li>
              <svg width="30" height="20">
                <use href={`${sprite}#facebook`}></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
