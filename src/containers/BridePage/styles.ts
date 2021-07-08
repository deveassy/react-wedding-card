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
  background-image: linear-gradient(180deg, #c2255c, #ff922b, #fab005);
  background-origin: border-box;
  background-clip: content-box;
  cursor: pointer;
`;
const MoneyImg = styled.img`
  width: 100px;
  margin: 3px;
  /* border: 3px solid #fff; */
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

const AccountNum = styled.input`
  border: 0;
  outline: none;
`;

const CopyButton = styled.button`
  position: absolute;
  right: 50px;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: transparent;
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
  AccountNum,
  CopyButton,
};
