import React, { useRef, useState } from "react";
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

type CommentProps = {
  comment: comment;
};

type InputState = {
  username: string;
  content: string;
};
type AddComment = (state: InputState) => void;

type commentStateProps = {
  comments: comment[];
};

function CommentOutput(props: CommentProps) {
  const { comment } = props;
  return (
    <SingleComment style={{ display: "flex", flexDirection: "row" }}>
      <User>{comment.user}</User>
      <Text>{comment.text}</Text>
    </SingleComment>
  );
}

export default function CommentComponent(props: commentStateProps) {
  const { comments } = props;

  const nextId = useRef(0);

  const [inputs, setInputs] = useState<InputState>({
    username: "",
    content: "",
  });

  const [tweet, setTweet] = useState<comment[]>(comments);

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

  const addTweet: AddComment = (args) => {
    const { username, content } = args;
    const comment = {
      id: nextId.current,
      user: username,
      text: content,
    };
    setTweet(tweet.concat(comment));
    nextId.current += 1;
  };

  return (
    <Container>
      <CommentBox>
        {tweet.map((comment) => {
          return <CommentOutput key={comment.id} comment={comment} />;
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
