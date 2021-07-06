/**
 * Post Scheme
 */
type PostTypes = {
  createdAt: string;
  location: {
    _latitude: number;
    _longitude: number;
  };
  comments: CommentType[];
  likes: number;
};

/**
 * Comment Scheme
 */
type CommentType = {
  text: string;
  username: string;
};
