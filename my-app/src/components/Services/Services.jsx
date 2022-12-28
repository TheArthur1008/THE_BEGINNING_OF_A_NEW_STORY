import React from "react";
import { Button } from "../Portfolio/Portfolio.styled";
import {
  Architecture,
  ArchitectureSubtittle,
  Construction,
  Container,
  Design,
  Engineering,
  List,
  Subtitle,
  Tittle,
} from "./Services.styled";

const Services = () => {
  return (
    <div id="services">
      <Container>
        <Tittle>SERVICES</Tittle>
        <List>
          <Architecture>
            <ArchitectureSubtittle>Architecture</ArchitectureSubtittle>
            <Button>LEARN MORE</Button>
          </Architecture>
          <Engineering>
            <Subtitle>Engineering</Subtitle>
          </Engineering>
          <Design>
            <Subtitle>Design + Build</Subtitle>
          </Design>
          <Construction>
            <Subtitle>Construction</Subtitle>
          </Construction>
        </List>
      </Container>
    </div>
  );
};

export default Services;
