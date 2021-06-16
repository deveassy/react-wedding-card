// Action types
const UPDATE_POST = "UPDATE_POST";
// const ADD_LKIE = "ADD_LKIE";
// const ADD_COMMENT = "ADD_COMMENT";

// Actions
export const updatePost = (post: IPost) => {
  return {
    type: UPDATE_POST,
    payload: post,
  };
};

// types
type State = IPost | null;
type Action = ReturnType<typeof updatePost>;

// initial state
const initialState: State = null;

// reducer
const post = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "UPDATE_POST":
      return action.payload;

    default:
      return initialState;
  }
};

export default post;
