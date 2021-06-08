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
