import styled from "styled-components";
import architecture from "../../images/architecture.png";
import engineering from "../../images/engineering.png";
import design from "../../images/design.png";
import construction from "../../images/construction.png";

export const Container = styled.div`
  padding-bottom: 100px;
`;

export const Tittle = styled.h2`
  font-size: 3.2em;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 110px;
  margin-bottom: 100px;
  word-spacing: 0.1em;
  border-bottom: 4px solid rgba(255, 255, 255, 0.4);
`;

export const List = styled.ul`
  text-align: center;
`;

export const Architecture = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${architecture});
  width: 100%;
  height: 500px;
`;

export const ArchitectureSubtittle = styled.h3`
  font-weight: 700;
  font-size: 96px;
`;

export const Subtitle = styled.h3`
  font-size: 48px;
`;

export const Engineering = styled.li`
  background-image: url(${engineering});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
`;
export const Design = styled.li`
  background-image: url(${design});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
`;
export const Construction = styled.li`
  background-image: url(${construction});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
`;
