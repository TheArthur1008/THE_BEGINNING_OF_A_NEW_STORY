import styled from "styled-components";

export const Container = styled.div`
  padding: 0 16px;
  padding-bottom: 95px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 64px;
  padding-left: 100px;
  gap: 200px;
  > nav {
    display: flex;
    gap: 80px;
  }
`;

export const Logo = styled.img``;

export const Link = styled.a`
  text-decoration: none;
  color: #ffffff;
  :hover,
  :focus {
    color: orange;
    outline: none;
  }
`;
