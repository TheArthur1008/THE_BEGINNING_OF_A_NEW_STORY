import styled from "styled-components";

export const WrapperContact = styled.div`
  margin: 0 100px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 4px solid rgba(255, 255, 255, 0.4);
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Description = styled.p`
  color: #c0c0c0;
`;

export const Adress = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #c0c0c0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #c0c0c0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 90px;
`;

export const Subtitle = styled.h3`
  color: #c0c0c0;
  margin-bottom: 15px;
  font-size: 17px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  border-top: 4px solid rgb(255, 255, 255);
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 10px;
  border: 0;
`;

export const Span = styled.span`
  position: absolute;
  left: 87%;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`;
