type IPost = {
  createdAt: string;
  comments: IComment[];
  likes: number;
  location: {
    _latitude: number;
    _longitude: number;
  };
};

type IComment = {
  id: string;
  text: string;
  name: string;
  createdAt: string;
};
