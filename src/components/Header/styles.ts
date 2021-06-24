import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const TabContainer = styled.div`
  position: relative;
  padding-top: 60px;
`;

export const LogoLinkBox = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100vw;
  background-color: #fff;
`;

export const LogoLink = styled(Link)`
  width: 100vw;
`;

export const LogoImg = styled.img`
  width: 200px;
  margin-top: 10px;
`;

export const StoryLinkBox = styled(FlexDiv)`
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;
export const StoryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-decoration: none;
  font-size: 1.05em;
  color: #000;
`;

export const StoryImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 50%;
`;
