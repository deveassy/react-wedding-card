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
  TweetBox,
  TweetUserName,
  TweetText,
} from "./styles";

type Tweet = {
  id: number;
  user: string;
  text: string;
};
type tweetProps = {
  tweet: Tweet;
};

type State = {
  username: string;
  content: string;
};
type AddTweet = (state: State) => void;

function CommentOutput(props: tweetProps) {
  const { tweet } = props;
  return (
    <TweetBox style={{ display: "flex", flexDirection: "row" }}>
      <TweetUserName>{tweet.user}&nbsp;</TweetUserName>
      <TweetText>{tweet.text}</TweetText>
    </TweetBox>
  );
}

export default function Comment() {
  const initialTweet: Tweet[] = [
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

  const [inputs, setInputs] = useState<State>({
    username: "",
    content: "",
  });

  const [tweets, setTweets] = useState(initialTweet);

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

  const addTweet: AddTweet = (args) => {
    const { username, content } = args;
    const tweet = {
      id: nextId.current,
      user: username,
      text: content,
    };
    setTweets(tweets.concat(tweet));
    nextId.current += 1;
  };

  return (
    <Container>
      <CommentBox>
        {tweets.map((tweet) => {
          return <CommentOutput key={tweet.id} tweet={tweet} />;
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
