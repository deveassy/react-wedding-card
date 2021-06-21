type PostTypes = {
  createdAt: string;
  location: {
    _latitude: number;
    _longitude: number;
  };
  comments: CommentType[];
  likes: number;
};

type CommentType = {
  id: string;
  text: string;
  name: string;
  createdAt: string;
};

type comment = {
  id: number;
  user: string;
  text: string;
};
