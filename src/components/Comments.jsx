import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

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
          <div key={comment.comment_id}>
            <h5>User: {comment.author}</h5>
            <h6>created:  {comment.created_at}</h6>
            <h6>Votes: {comment.votes}</h6>

            <h6>{comment.body}</h6>
          </div>
        );
      })}
    </ul>
  ) : (
    <p>No comments</p>
  );
};

export default Comments;
