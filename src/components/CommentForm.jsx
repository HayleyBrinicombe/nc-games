import { useContext, useState } from "react";
import { postComment } from "../utils/api";

import { UserContext } from "../contexts/UserContext";
import Comments from "./Comments";

export default function CommentForm({ review_id }) {
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { user } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true)
    postComment(review_id, user.username, comment)
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>
        Add a comment:
        <input
          required
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button disabled={disabled} type="sunbmit">submit</button>
    </form>
  );
}
