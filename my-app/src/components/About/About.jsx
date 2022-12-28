import React from "react";
import skyscraper from "../../images/skyscraper.png";
import tower from "../../images/tower.png";
import {
  Container,
  Div,
  Image,
  List,
  Subtitle,
  Tittle,
  Wrapper,
} from "./About.styled";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Tittle>ABOUT US</Tittle>
        <Wrapper>
          <Image src={skyscraper} alt="skyscraper" width="600" heigth="500" />
          <List>
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
          </List>
        </Wrapper>
      </Container>
      <Div>
        <Subtitle>
          We are a client-focused team with a passion <br /> for creating
          enduring and sustainable impact.
        </Subtitle>
        <Wrapper>
          <List>
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
          </List>
          <Image src={tower} alt="tower" width="600" heigth="400" />
        </Wrapper>
      </Div>
    </div>
  );
};

export default About;
