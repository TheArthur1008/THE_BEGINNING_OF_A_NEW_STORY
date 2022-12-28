import React from "react";
import { Container, Item, List, Tittle } from "./Home.styled";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Tittle>
          THE BEGINNING OF <br /> A NEW STORY
        </Tittle>
        <List>
          <Item>
            <span>01</span>
            <span>Complete engineering, architectural & design services</span>
          </Item>
          <Item>
            <span>02</span>
            <span>Construction & construction management services</span>
          </Item>
          <Item>
            <span>03</span>
            <span>Turn key design & build projects</span>
          </Item>
        </List>
      </Container>
    </div>
  );
};

export default Home;
