import React from 'react';
import card from '../../images/rectangle.png';
import s from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className={s.wrapper}>
        <div className={s.container}>
          <h2 className={s.title}>PORTFOLIO</h2>
          <ul className={s.list}>
            <li>
              <button className={s.buttons} type="button">
                All
              </button>
            </li>
            <li>
              <button className={s.buttons} type="button">
                Consulting
              </button>
            </li>
            <li>
              <button className={s.buttons} type="button">
                Design
              </button>
            </li>
            <li>
              <button className={s.buttons} type="button">
                Restoration
              </button>
            </li>
          </ul>
          <img src={card} alt="rectangle" width="900" height="700" />
          <button className={s.button} type="submit">
            PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
