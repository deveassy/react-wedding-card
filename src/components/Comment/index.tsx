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

type commentStateProps = {
  comments: CommentType[];
};

type commentOutputProps = {
  comment: CommentType;
};

function CommentOutput(props: commentOutputProps) {
  const { comment } = props;
  return (
    <SingleComment style={{ display: "flex", flexDirection: "row" }}>
      <User>{comment.name}</User>
      <Text>{comment.text}</Text>
    </SingleComment>
  );
}

export default function CommentComponent(props: commentStateProps) {
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
      name: username,
      text: content,
    };
    dispatch(addComment(comment));
  };

  return (
    <Container>
      <CommentBox>
        {comments.map((comment) => {
          return <CommentOutput key={comment.name} comment={comment} />;
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
