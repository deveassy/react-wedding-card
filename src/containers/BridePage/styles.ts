import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const BrideImg = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 50%;
`;

export const BrideMsg = styled.p`
  margin: 10px;
  font-size: 1.2em;
`;

export const AccountBox = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountButton = styled.button`
  width: 70px;
  height: 35px;
  padding: 10px;
  margin-left: 20px;
  border: 0;
  border-radius: 50%;
  background-color: #ffcead;
`;

export const AccountMsg = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-top: 20px;
  font-size: 0.7em;
  border-top: 1px solid #ccc;
`;
