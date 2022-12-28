import React from "react";
import logo from "../../images/logo.png";
import {
  Adress,
  Contacts,
  Container,
  ContainerInput,
  Description,
  Input,
  Item,
  Link,
  SocialList,
  Span,
  Subtitle,
  Wrapper,
  WrapperContact,
} from "./Contact.styled";

import sprite from "../../images/symbol-defs.svg";

const Contact = () => {
  return (
    <WrapperContact id="contact">
      <Container>
        <Contacts>
          <img src={logo} alt="logo" width="83" height="83" />
          <Description>Premium design & build contractor.</Description>
          <Adress>
            <span>212.837.8362</span>
            <Link href="mailto:CONTACT@TITANCONTRACTINGCORP.COM">
              CONTACT@TITANCONTRACTINGCORP.COM
            </Link>
          </Adress>
        </Contacts>
        <Wrapper>
          <div>
            <Subtitle>Business areas</Subtitle>
            <ul>
              <Item>Architecture</Item>
              <Item>Engineering</Item>
              <Item>Design + Build</Item>
              <Item>Construction</Item>
            </ul>
          </div>
          <div>
            <Subtitle>Pages</Subtitle>
            <ul>
              <Item>Home</Item>
              <Item>About</Item>
              <Item>Portfolio</Item>
              <Item>Services</Item>
              <Item>Contact</Item>
            </ul>
          </div>
        </Wrapper>
      </Container>
      <ContainerInput>
        <div>
          <Subtitle>CONTACT US TO SCHEDULE AN APPOINTMENT</Subtitle>
          <p>LET’S GET IN TOUCH</p>
        </div>
        <div>
          <Input type="text" />

          <Span>
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
          </Span>
        </div>
      </ContainerInput>
      <ContainerInput>
        <div>
          <Subtitle>VISIT OUR OFFICE</Subtitle>
          <p>
            25 Broadway
            <br /> New York
            <br /> NY 10004
          </p>
        </div>
        <div>
          <SocialList>
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
          </SocialList>
        </div>
      </ContainerInput>
    </WrapperContact>
  );
};

export default Contact;
