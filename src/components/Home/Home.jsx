import React from 'react';
import s from './Home.module.scss';

const Home = () => {
  return (
    <section id="home">
      <div className={s.container}>
        <h1 className={s.title}>
          THE BEGINNING OF <br /> A NEW STORY
        </h1>
        <ul className={s.list}>
          <li className={s.item}>
            <span>01</span>
            <span>Complete engineering, architectural & design services</span>
          </li>
          <li className={s.item}>
            <span>02</span>
            <span>Construction & construction management services</span>
          </li>
          <li className={s.item}>
            <span>03</span>
            <span>Turn key design & build projects</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
