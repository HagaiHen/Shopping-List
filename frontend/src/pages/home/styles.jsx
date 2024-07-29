import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 80%;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const RightBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 20%;
  background-color: #ffffff;
  position: absolute;
  right: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  background-color: #ffffff;
  padding: 10px;
  margin-top: 20%;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 90%;
  background-color: #dddddd;
  margin-left: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const CategoryButton = styled.button`
  height: 60px;
  background-color: transparent;
  color: black;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  border-bottom: 1px solid #aaaaaa;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const ProductButton = styled.button`
  height: 20px;
  background-color: transparent;
  color: black;
  align-items: center;
  border: none;
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media (max-width: 768px) {
    height: 40px;
    margin-top: 5px;
  }
`;

export const CompleteButton = styled.button`
  height: 60px;
  margin-right: 20px;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const TextFieldBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;