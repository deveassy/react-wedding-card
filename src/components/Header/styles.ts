import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const TabContainer = styled.div`
  position: relative;
  padding-top: 80px;
`;

export const LogoLinkBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 15px;
  background: linear-gradient(to top left, yellow, orange, #cc0e74, purple);
`;

export const LogoLink = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 1.8em;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
`;

export const StoryLinkBox = styled(FlexDiv)`
  justify-content: space-between;
  /* padding: 10px; */
  border-bottom: 1px solid #ccc;
`;
export const StoryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-decoration: none;
  font-size: 1.2em;
  color: #000;
`;

export const StoryImg = styled(FlexDiv)`
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  font-size: 1.5em;
`;
