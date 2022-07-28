import { useEffect, useState } from "react";

import { getComments } from "../utils/api";

const Comments = ({ review_id }) => {
  const [commentsList, setCommentsList] = useState([]);

import { getComments } from "./utils/api";

const Comments = ({ review_id }) => {
const [commentsList, setCommentsList] = useState([])

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

          <li
            key={comment.comment_id}
            className="text-center border border-dark justify-content-center col-md-6 offset-md-3 mt-2 mb-2"
          >
            <h3>{comment.author}</h3>
            <p>Votes: {comment.votes}</p>

            <p>{comment.body}</p>
          </li>

        );
      })}
    </ul>
  ) : (

    <p>No comments</p>

    <p className="text-center border border-dark justify-content-center col-md-6 offset-md-3 p-4 mt-2 mb-10">
      No comments
    </p>

  );
};

export default Comments;
