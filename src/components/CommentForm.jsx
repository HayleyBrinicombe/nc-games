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
    setDisabled(true);
    postComment(review_id, user.username, comment);
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <br></br>
      <label className="form">
        <br></br>
        Add a comment:
        <br></br>
        <input
          className="form"
          required
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>

      <button className="submit-button" disabled={disabled} type="submit">
        submit
      </button>
    </form>
  );
}
