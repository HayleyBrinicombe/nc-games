import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getComments } from "../utils/api";

const Comments = ({ review_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
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
    <div className="comment">
      {commentsList.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <p>{`${comment.body} by ${comment.author}`}</p>
            <p>{`posted on ${comment.created_at
                .toString()
                .slice(0, 10)}, ${comment.created_at.toString().slice(11, 19)}`}
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <p>No comments</p>
  );
};

export default Comments;
