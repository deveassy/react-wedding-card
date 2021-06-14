import React, { useRef, useState } from "react";
import {
  Container,
  CommentBox,
  ForUserMsg,
  FormBox,
  TextInput,
  SubmitBtn,
  TweetBox,
  TweetUserName,
  TweetText,
  TweetDate,
} from "./styles";

type Tweet = {
  id: number;
  user: string;
  text: string;
  date: string;
};

type tweetProps = {
  tweet: {
    id: number;
    user: string;
    text: string;
    date: string;
  };
};

type AddTweet = (value: string) => void;

function CommentOutput(props: tweetProps) {
  const { tweet } = props;
  return (
    <TweetBox style={{ display: "flex", flexDirection: "row" }}>
      <TweetUserName>{tweet.user}&nbsp;</TweetUserName>
      <TweetText>{tweet.text}</TweetText>
      <TweetText>{tweet.date}</TweetText>
    </TweetBox>
  );
}

export default function Comment() {
  const initialTweet: Tweet[] = [
    {
      id: 1,
      user: "이은지",
      text: "기믄솔 결혼축하해~~!!~",
      date: "2021.06.01",
    },
    {
      id: 2,
      user: "신진아",
      text: "은도리야 추카해~!",
      date: "2021.06.05",
    },
    {
      id: 3,
      user: "백장미",
      text: "어머머 드디어 진ㅉㅏ루~!!!!!",
      date: "2021.06.10",
    },
  ];

  const [value, setValue] = useState("");
  const [tweets, setTweets] = useState(initialTweet);

  const nextId = useRef(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return null;
    setValue("");
    addTweet(value);
  };

  const addTweet: AddTweet = (value) => {
    const tweet = {
      id: nextId.current,
      user: "이은지",
      text: value,
      date: new Date().toISOString().slice(0, 10),
    };
    setTweets(tweets.concat(tweet));
    nextId.current += 1;
  };

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      addTweet(value);
    }
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
        <TextInput
          placeholder="댓글 달기..."
          value={value}
          onChange={handleChange}
        />
        <SubmitBtn type="submit" onKeyPress={handleKey}>
          게시
        </SubmitBtn>
      </FormBox>
    </Container>
  );
}
