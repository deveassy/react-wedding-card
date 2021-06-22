import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../modules/post";
import {
  Container,
  CommentBox,
  ForUserMsg,
  FormBox,
  NameInput,
  ContentBox,
  ContentInput,
  SubmitBtn,
  SingleComment,
  User,
  Text,
} from "./styles";

type InputState = {
  username: string;
  content: string;
};
type AddComment = (state: InputState) => void;

type CommentStateProps = {
  comments: CommentType[];
};

type CommentOutputProps = {
  comment: CommentType;
};

function CommentOutput(props: CommentOutputProps) {
  const { comment } = props;
  return (
    <SingleComment style={{ display: "flex", flexDirection: "row" }}>
      <User>{comment.username}</User>
      <Text>{comment.text}</Text>
    </SingleComment>
  );
}

export default function CommentComponent(props: CommentStateProps) {
  const { comments } = props;

  const [inputs, setInputs] = useState<InputState>({
    username: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.username || !inputs.content) return null;
    addTweet(inputs);
    setInputs({
      username: "",
      content: "",
    });
  };

  const dispatch = useDispatch();

  const addTweet: AddComment = (args) => {
    const { username, content } = args;
    const comment = {
      postId: "v6subHi6XYmqJn6xypq2",
      username: username,
      text: content,
    };
    fetch("http://localhost:5001/enoveh-toy/us-central1/addComment", {
      method: "POST",
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("댓글 결과", json);
        if (json.status === 200) {
          dispatch(addComment(comment));
        }
      });
  };

  return (
    <Container>
      <CommentBox>
        {comments.map((comment, index) => {
          return <CommentOutput key={index} comment={comment} />;
        })}
        <ForUserMsg>
          신랑,신부에게 축하의 메세지를 남겨주세요! (게시 후엔 삭제 불가능)
        </ForUserMsg>
      </CommentBox>
      <FormBox onSubmit={handleSubmit}>
        <NameInput
          name="username"
          placeholder="이름을 넣어주세요"
          value={inputs.username}
          onChange={handleChange}
        />
        <ContentBox>
          <ContentInput
            name="content"
            placeholder="댓글 달기..."
            value={inputs.content}
            onChange={handleChange}
          />
          <SubmitBtn type="submit">게시</SubmitBtn>
        </ContentBox>
      </FormBox>
    </Container>
  );
}
