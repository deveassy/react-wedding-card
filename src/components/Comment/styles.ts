import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CommentBox = styled.div`
  width: 100%;
  padding-top: 10px;
`;

const ForUserMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  border-top: 1px solid #ccc;
  font-size: 0.8em;
`;

const FormBox = styled.form``;

const NameInput = styled.input`
  width: 40vw;
  padding: 10px 25px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
`;

const ContentBox = styled.div`
  justify-content: space-between;
  width: 85vw;
  padding: 5px 15px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
`;

const ContentInput = styled.input`
  width: 70vw;
  padding: 10px;
  border: none;
  outline: none;
`;

const SubmitBtn = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
  color: #52a6df;
`;

// comment 부분 스타일링
const TweetBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25px;
  margin: 0 10px;
`;

const TweetUserName = styled.p`
  font-weight: 800;
  margin: 0;
`;

const TweetText = styled.p`
  margin: 0;
`;

export {
  Container,
  CommentBox,
  ForUserMsg,
  FormBox,
  NameInput,
  ContentBox,
  ContentInput,
  SubmitBtn,
  TweetBox,
  TweetUserName,
  TweetText,
};
