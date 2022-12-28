import React from "react";
import card from "../../images/rectangle.png";
import {
  Button,
  Buttons,
  Container,
  List,
  Tittle,
  Wrapper,
} from "./Portfolio.styled";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Wrapper>
        <Container>
          <Tittle>PORTFOLIO</Tittle>
          <List>
            <li>
              <Buttons type="button">All</Buttons>
            </li>
            <li>
              <Buttons type="button">Consulting</Buttons>
            </li>
            <li>
              <Buttons type="button">Design</Buttons>
            </li>
            <li>
              <Buttons type="button">Restoration</Buttons>
            </li>
          </List>
          <img src={card} alt="rectangle" width="900" height="700" />
          <Button type="submit">PORTFOLIO</Button>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Portfolio;
