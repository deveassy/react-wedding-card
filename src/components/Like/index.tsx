import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLike } from "../../modules/post";
import { LikeBox, LikeImg, LikeImgBtn, LikeNum } from "./styles";

type LikeProps = {
  likes: number;
};

function LikeComponent(props: LikeProps) {
  const [like, setLike] = useState(false);
  const { likes } = props;

  const dispatch = useDispatch();
  const handleClick = () => {
    setLike(!like);
    if (like === false) return dispatch(addLike());
    if (like === true) return null;
  };

  return (
    <LikeBox>
      <LikeImgBtn onClick={handleClick}>
        {like ? (
          <LikeImg src="/img/heart.png" />
        ) : (
          <LikeImg src="/img/emptyHeart.png" />
        )}
      </LikeImgBtn>
      <LikeNum>좋아요 {likes}개</LikeNum>
    </LikeBox>
  );
}

export default LikeComponent;
