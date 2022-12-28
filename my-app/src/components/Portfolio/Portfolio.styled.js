import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 4px solid rgba(255, 255, 255, 0.4);
`;

export const Container = styled.div`
  margin-right: 60px;
  border-right: 4px solid rgba(255, 255, 255, 0.4);
  padding-right: 75px;
  padding-bottom: 75px;
`;

export const Tittle = styled.h2`
  text-align: end;
  font-size: 3.2em;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 110px;
  word-spacing: 0.1em;
  border-top: 4px solid rgba(255, 255, 255, 0.4);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-bottom: 50px;
`;

export const Buttons = styled.button`
  border: 0;
  position: relative;
  background-color: inherit;
  color: #aaa9a9;
  cursor: pointer;
  :hover {
    color: #ffffff;
  }
  :active {
    color: #ffffff;
    :after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ffffff;
      border-radius: 2px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border: 0;
  border-radius: 4px;
  padding: 7px 32px;
  margin-top: 60px;
`;
