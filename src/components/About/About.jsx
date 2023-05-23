import React from 'react';
import skyscraper from '../../images/skyscraper.png';
import tower from '../../images/tower.png';
import s from './About.module.scss';

const About = () => {
  return (
    <div id="about" className={s.container}>
      <div className={s.containerAbout}>
        <h2 className={s.title}>ABOUT US</h2>
        <div className={s.wrapper}>
          <img
            className={s.image}
            src={skyscraper}
            alt="skyscraper"
            width="600"
            heigth="500"
          />
          <ul className={s.list}>
            <li>
              TITAN is a premium design & build contractor based in New York
              City.
            </li>
            <li>
              We specialize in building unique, innovative and high-impact
              design projects.
            </li>
            <li>
              We believe a collaborative process, with clear communication
              between client, architect and contractor is key to achieving our
              highest goal – client satisfaction.
            </li>
          </ul>
        </div>
      </div>
      <div className={s.wrapperSubtitle}>
        <h3 className={s.subtitle}>
          We are a client-focused team with a passion <br /> for creating
          enduring and sustainable impact.
        </h3>
        <div className={s.wrapper}>
          <ul className={s.list}>
            <li>
              Established in 2011, we’ve quickly distinguished ourselves as a
              contractor of choice among clients and architects who expect
              perfection.
            </li>
            <li>
              We have a well-earned reputation for integrity and transparency at
              every stage of the building process, and we work hard to create
              lasting and productive relationships with all of our clients and
              design professionals.
            </li>
            <li>
              We love a challenge, and our passion for innovation and
              sustainability combined with our driving commitment to excellence
              mean we deliver the difference between easy solutions and
              intelligent solutions.
            </li>
          </ul>
          <img
            className={s.image}
            src={tower}
            alt="tower"
            width="600"
            heigth="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
