import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 95px 0;
  border-bottom: 4px solid rgba(255, 255, 255, 0.4);
`;

export const Tittle = styled.h1`
  color: #f5f5f5;
  font-size: 3.8em;
  word-spacing: 0.1em;
`;

export const List = styled.ul`
  border-left: 4px solid #706e6d;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-left: 60px;
`;

export const Item = styled.li`
  color: #aaa9a9;
  display: flex;
  flex-direction: column;
`;
