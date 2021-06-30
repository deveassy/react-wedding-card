import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLike } from "../../modules/post";
import { LikeBox, LikeImg, LikeImgBtn, LikeNum } from "./styles";

type LikeProps = {
  likes: number;
};

const flag = localStorage.getItem("like_flag");

function LikeComponent(props: LikeProps) {
  const [like, setLike] = useState(Boolean(flag));
  const { likes } = props;

  const dispatch = useDispatch();
  const handleClick = (): void => {
    if (like && flag) return;
    dispatch(addLike());
    setLike(true);
    fetch("https://us-central1-enoveh-toy.cloudfunctions.net/addLike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: "v6subHi6XYmqJn6xypq2",
      }),
    });
  };

  return (
    <LikeBox>
      <LikeImgBtn onClick={handleClick}>
        <LikeImg src={like ? "/img/heart.png" : "/img/emptyHeart.png"} />
      </LikeImgBtn>
      <LikeNum>좋아요 {likes}개</LikeNum>
    </LikeBox>
  );
}

export default LikeComponent;
