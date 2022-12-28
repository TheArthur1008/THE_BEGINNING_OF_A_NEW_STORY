import React from "react";
import logo from "../../images/logo.png";
import { Container, Header, Link, Logo } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <nav>
          <Link href="#home">HOME</Link>

          <Link href="#about">ABOUT</Link>

          <Link href="#portfolio">PORTFOLIO</Link>

          <Link href="#services">SERVICES</Link>

          <Link href="#contact">CONTACT</Link>
        </nav>
      </Header>
    </Container>
  );
};

export default Navigation;
