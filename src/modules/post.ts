// fetch POST 작업을 위한 reducer

// Action Types
// const UPDATE_POST = "UPDATE_POST" as const;
const ADD_LIKE = "ADD_LIKE" as const;
const ADD_COMMENT = "ADD_COMMENT" as const;

// Action function
// export const updatePost = (post: PostTypes) => {
//   return {
//     type: UPDATE_POST,
//     payload: post,
//   };
// };

export const addLike = () => {
  return {
    type: ADD_LIKE,
  };
};

// export const addComment = (comment: CommentType) => {
//   return {
//     type: ADD_COMMENT,
//     payload: comment,
//   };
// };
export const addComment = (comment: comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

// types
// type State = PostTypes | null;

type State = {
  likes: number;
  comments: comment[];
  location: {
    _latitude: number;
    _longitude: number;
  };
};
type Action = ReturnType<typeof addLike> | ReturnType<typeof addComment>;

// initialState
// const initialState: State = null;
const initialState: State = {
  likes: 8,
  comments: [
    {
      id: 1,
      user: "이은지",
      text: "첫번째 댓글",
    },
    {
      id: 2,
      user: "이은지",
      text: "두번째 댓글",
    },
    {
      id: 3,
      user: "이은지",
      text: "세번째 댓글",
    },
  ],
  location: {
    _latitude: 37.73111593924737,
    _longitude: 126.4753500759531,
  },
};

// reducer
const postReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // case UPDATE_POST:
    //   return action.payload;
    case ADD_LIKE:
      if (state?.likes) {
        return {
          ...state,
          likes: state.likes + 1,
        };
      } else {
        throw new Error("포스트가 존재하지 않음");
      }
    case ADD_COMMENT:
      if (state?.comments) {
        return {
          ...state,
          comments: state.comments.concat(action.payload),
        };
      } else {
        throw new Error("포스트가 존재하지 않음");
      }
    default:
      return state;
  }
};

export default postReducer;
