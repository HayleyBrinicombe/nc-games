import { useEffect, useState } from "react";
import { getComments } from "./utils/api";

const Comments = ({ review_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(review_id).then((data) => {
      setCommentsList(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return commentsList.length !== 0 ? (
    <ul>
      {commentsList.map((comment) => {
        return (
          <h4 key={comment.comment_id}>
            <h3>User: {comment.author}</h3>
            <h4>created:  {comment.created_at}</h4>
            <p>Votes: {comment.votes}</p>

            <p>{comment.body}</p>
          </h4>
        );
      })}
    </ul>
  ) : (
    <p>No comments</p>
  );
};

export default Comments;
