import React from 'react';
import s from './Services.module.scss';

const Services = () => {
  return (
    <section id="services">
      <div className={s.container}>
        <h2 className={s.title}>SERVICES</h2>
        <ul className={s.list}>
          <li className={s.itemArchitecture}>
            <h3 className={s.subtitle}>Architecture</h3>
            <button type="button" className={s.button}>
              LEARN MORE
            </button>
          </li>
          <li className={s.itemEngineering}>
            <h3 className={s.subtitle}>Engineering</h3>
          </li>
          <li className={s.itemDesign}>
            <h3 className={s.subtitle}>Design + Build</h3>
          </li>
          <li className={s.itemConstruction}>
            <h3 className={s.subtitle}>Construction</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
