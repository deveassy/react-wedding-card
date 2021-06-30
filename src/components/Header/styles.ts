import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const TabContainer = styled.div`
  position: relative;
  padding-top: 70px;
  border-bottom: 0.5px solid #ccc;
`;

export const LogoLinkBox = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  width: 353px;
  padding: 20px 0 10px 20px;
  background-color: #fff;
  border-bottom: 0.3px solid #f1f3f5;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-family: "Marker felt";
  font-size: 2em;
  color: #000;
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const StoryLinkBox = styled(FlexDiv)`
  justify-content: space-between;
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
