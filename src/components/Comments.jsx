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
    <div class="comment">
      {commentsList.map((comment) => {
        return (
          <p key={comment.comment_id}>
            {comment.body}
            <text> by </text>
            <b>{comment.author}</b> <text> </text>
           
          </p>
        );
      })}
    </div>
  ) : (
    <p>No comments</p>
  );
};

export default Comments;