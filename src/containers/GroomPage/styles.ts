import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const GroomImg = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 50%;
`;

const GroomMsg = styled.p`
  margin: 10px;
  font-size: 1.2em;
`;

const AccountBox = styled.div`
  display: flex;
  align-items: center;
`;

const AccountButton = styled.button`
  width: 70px;
  height: 35px;
  padding: 10px;
  margin-left: 20px;
  border: 0;
  border-radius: 50%;
  background-color: #b6c9f0;
  cursor: pointer;
`;

const AccountMsg = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-top: 20px;
  font-size: 0.7em;
  border-top: 1px solid #ccc;
`;

const AccountNum = styled.input`
  border: 0;
  outline: none;
`;

const CopyButton = styled.button`
  margin-left: 10px;
`;

export {
  Container,
  GroomImg,
  GroomMsg,
  AccountMsg,
  AccountBox,
  AccountButton,
  AccountNum,
  CopyButton,
};
