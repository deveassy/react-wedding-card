import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled(FlexDiv)`
  flex-direction: column;
`;

const ProfileNameBox = styled(FlexDiv)`
  flex-direction: row;
  width: 358px;
  margin-left: 15px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileName = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

const BrideImg = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 50%;
`;

const BrideMsg = styled.p`
  margin: 10px;
  font-size: 1.2em;
`;

const AccountBox = styled(FlexDiv)``;

const MoneyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border: 0;
  background-color: transparent;
  background-image: linear-gradient(130deg, #6578f2, #c2255c, #ff922b, #fff6b7);
  background-origin: border-box;
  background-clip: content-box;
  cursor: pointer;
`;
const MoneyImg = styled.img`
  width: 100px;
  margin: 3px;
  border: 3px solid ${(props) => props.theme.basicBg};
  border-radius: 3px;
`;

const AccountMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 0.7em;
  border-top: 1px solid #ccc;
`;

const MainContainer = styled(FlexDiv)`
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.basicFont};
`;

const NumContainer = styled(FlexDiv)`
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const AccountNum = styled.input`
  width: 80px;
  margin-left: 10px;
  border: 0;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.basicFont};
`;

const CopyButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;

export {
  Container,
  ProfileNameBox,
  ProfileImg,
  ProfileName,
  BrideImg,
  BrideMsg,
  AccountMsg,
  AccountBox,
  MoneyButton,
  MoneyImg,
  MainContainer,
  NumContainer,
  AccountNum,
  CopyButton,
};
