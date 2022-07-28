import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getComments } from "../utils/api";

const Comments = ({ review_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getComments(review_id)
      .then((data) => {
        setCommentsList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) {
          setIsLoading(false);
        }
      });
  }, [commentsList]);

  if (isLoading) return <p>Loading...</p>;

  return commentsList.length !== 0 ? (
    <div>
      {commentsList.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <h5>User: {comment.author}</h5>
            <h6>created: {comment.created_at}</h6>
            <h6>Votes: {comment.votes}</h6>
            <h6>{comment.body}</h6>
          </div>
        );
      })}
    </div>
  ) : (
    <p>SorryNo comments</p>
  );
};

export default Comments;
