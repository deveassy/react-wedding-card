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

type Comment = {
  id: number;
  user: string;
  text: string;
};
type CommentProps = {
  comment: Comment;
};

type InputState = {
  username: string;
  content: string;
};
type AddComment = (state: InputState) => void;

function CommentOutput(props: CommentProps) {
  const { comment } = props;
  return (
    <SingleComment style={{ display: "flex", flexDirection: "row" }}>
      <User>{comment.user}</User>
      <Text>{comment.text}</Text>
    </SingleComment>
  );
}

export default function CommentComponent() {
  const initialTweet: Comment[] = [
    {
      id: 1,
      user: "이은지",
      text: "기믄솔 결혼축하해~~!!~",
    },
    {
      id: 2,
      user: "신진아",
      text: "은도리야 추카해~!",
    },
    {
      id: 3,
      user: "백장미",
      text: "어머머 드디어 진ㅉㅏ루~!!!!!",
    },
  ];
  const nextId = useRef(0);

  const [inputs, setInputs] = useState<InputState>({
    username: "",
    content: "",
  });

  const [comments, setComments] = useState<Comment[]>(initialTweet);

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
    setComments(comments.concat(comment));
    nextId.current += 1;
  };

  return (
    <Container>
      <CommentBox>
        {comments.map((comment) => {
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
