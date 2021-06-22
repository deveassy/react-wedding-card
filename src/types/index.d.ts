type PostTypes = {
  createdAt: string;
  location: {
    _latitude: number;
    _longitude: number;
  };
  comments: CommentType[];
  likes: number;
};

// type CommentType = {
//   comment: {
//     // id: string;
//     text: string;
//     name: string;
//     // createdAt: string;
//   };
// };

type CommentType = {
  text: string;
  username: string;
};
