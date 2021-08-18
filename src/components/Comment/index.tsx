import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../modules/post";
import ToastMessage from "../ToastMessage";
import {
  Container,
  CommentBox,
  FolderSpan,
  ForUserMsg,
  CommentFooter,
  FormBox,
  NameInput,
  BtnInInput as BtnInInputBox,
  ContentInput,
  SubmitBtn,
  SingleComment,
  User,
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

/**
 * @returns 개별 댓글
 */
function CommentOutput(props: CommentOutputProps) {
  const { comment } = props;
  return (
    <SingleComment>
      <User>
        <span style={{ fontWeight: "bold", marginRight: "8px" }}>
          {comment.username}
        </span>
        <span>{comment.text}</span>
      </User>
    </SingleComment>
  );
}

export default function CommentComponent(props: CommentStateProps) {
  const { comments } = props;

  const [inputs, setInputs] = useState<InputState>({
    username: "",
    content: "",
  });
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsActive(true);
    if (!inputs.username || !inputs.content)
      return setMessage("빈칸을 채워주세요.");
    addTweet(inputs);
    setMessage("게시되었습니다.");
    setInputs({
      username: "",
      content: "",
    });
  };

  /**
   * 댓글창에 값 새로 추가하기
   * @param args input창에 입력되는 값
   */
  const addTweet: AddComment = (args) => {
    const { username, content } = args;
    const comment = {
      postId: "v6subHi6XYmqJn6xypq2",
      username: username,
      text: content,
    };
    dispatch(addComment(comment));
    fetch("https://us-central1-enoveh-toy.cloudfunctions.net/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 200) {
        }
        console.log(json);
      });
  };

  const count = comments.length;

  /**
   * 댓글창 여닫는 함수
   */
  const handleFolder = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (visible) {
      window.scrollTo(0, document.body.scrollHeight);
      if (inputRef.current) inputRef.current?.focus();
    }
  }, [visible]);

  return (
    <Container>
      <CommentBox>
        <FolderSpan onClick={handleFolder}>
          댓글 {count}개 {visible ? "접기" : "모두 보기"}
        </FolderSpan>
        {visible
          ? comments.map((comment, index) => {
              return <CommentOutput key={index} comment={comment} />;
            })
          : null}
      </CommentBox>
      <CommentFooter visible={visible}>
        <ForUserMsg>
          신랑,신부에게 축하의 메세지를 남겨주세요! (게시 후엔 삭제 불가능)
        </ForUserMsg>
        <FormBox onSubmit={handleSubmit}>
          <NameInput
            ref={inputRef}
            name="username"
            placeholder="이름을 넣어주세요"
            value={inputs.username}
            onChange={handleChange}
          />
          <BtnInInputBox>
            <ContentInput
              name="content"
              placeholder="댓글 달기..."
              value={inputs.content}
              onChange={handleChange}
            />
            <SubmitBtn type="submit">게시</SubmitBtn>
            <ToastMessage isActive={isActive} setIsActive={setIsActive}>
              {message}
            </ToastMessage>
          </BtnInInputBox>
        </FormBox>
      </CommentFooter>
    </Container>
  );
}
