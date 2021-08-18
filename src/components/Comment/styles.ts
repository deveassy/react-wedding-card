import styled from "styled-components";

type FooterProps = {
  visible: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

const CommentBox = styled.div`
  width: 100%;
`;

const FolderSpan = styled.span`
  margin: 0 20px;
  font-size: 0.95em;
  color: #999;
  cursor: pointer;
`;

const ForUserMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  font-size: 0.8em;
`;

const CommentFooter = styled.div<FooterProps>`
  display: ${(props) => {
    if (props.visible === false) return "none";
  }};
  visibility: ${(props) => {
    if (props.visible === true) return "visible";
    if (props.visible === false) return "hidden";
  }};
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #ccc;
`;

const FormBox = styled.form`
  padding: 0 10px;
`;

const NameInput = styled.input`
  width: 30%;
  padding: 10px 25px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  background-color: ${(props) => props.theme.basicBg};
`;

const BtnInInputBox = styled.div`
  position: relative;
  justify-content: space-between;
  width: inherit;
  padding: 5px 15px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
  background-color: ${(props) => props.theme.basicBg};
`;

const ContentInput = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.basicBg};
`;

const SubmitBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #52a6df;
  cursor: pointer;
`;

// comment 부분 스타일링
const SingleComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  margin: 10px 20px;
`;

const User = styled.p`
  margin: 0;
  display: inline;
`;

export {
  Container,
  CommentBox,
  FolderSpan,
  ForUserMsg,
  CommentFooter,
  FormBox,
  NameInput,
  BtnInInputBox as BtnInInput,
  ContentInput,
  SubmitBtn,
  SingleComment,
  User,
};
