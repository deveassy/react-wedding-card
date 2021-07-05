import styled from "styled-components";
import { Link } from "react-router-dom";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const TabContainer = styled.div`
  position: relative;
  padding-top: 70px;
  border-bottom: 0.5px solid #ccc;
`;

const LogoLinkBox = styled.div`
  position: fixed;
  z-index: 80;
  top: 0;
  width: 353px;
  padding: 20px 0 10px 20px;
  background-color: ${(props) => props.theme.basicBg};
  border-bottom: 0.3px solid #f1f3f5;
`;

const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-family: "Marker felt";
  font-size: 2em;
  color: ${(props) => props.theme.basicFont};
`;
const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
const StoryLinkBox = styled(FlexDiv)`
  justify-content: space-between;
`;
const StoryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-decoration: none;
  font-size: 1.05em;
  color: ${(props) => props.theme.basicFont};
`;
const StoryImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 3px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.basicBg};
`;

const StoryImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 50%;
  background-image: linear-gradient(180deg, #c2255c, #ff922b, #fab005);
  background-origin: border-box;
  background-clip: content-box;
`;

const StoryName = styled.div`
  font-size: 0.9em;
`;

export {
  TabContainer,
  LogoLinkBox,
  LogoLink,
  LogoImg,
  StoryLinkBox,
  StoryImgBox,
  StoryImg,
  StoryName,
  StoryLink,
};
