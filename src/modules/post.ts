// fetch POST 작업을 위한 reducer

// Action Types
const UPDATE_POST = "UPDATE_POST" as const;
const ADD_LIKE = "ADD_LIKE" as const;
const ADD_COMMENT = "ADD_COMMENT" as const;

// Action function
export const updatePost = (post: PostTypes) => {
  return {
    type: UPDATE_POST,
    payload: post,
  };
};

export const addLike = () => {
  return {
    type: ADD_LIKE,
  };
};

export const addComment = (comment: CommentType) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

// types
type State = PostTypes | null;

type Action =
  | ReturnType<typeof updatePost>
  | ReturnType<typeof addLike>
  | ReturnType<typeof addComment>;

// initialState
const initialState: State = null;

// reducer
const postReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case UPDATE_POST:
      return action.payload;
    case ADD_LIKE:
      const flag = "like_flag";
      if (state?.likes && !localStorage.getItem(flag)) {
        // localStorage에 플래그 표시
        localStorage.setItem(flag, "true");
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
