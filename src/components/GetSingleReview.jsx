import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export default function GetSingleReview() {
  const [SingleReview, setSingleReview] = useState([]);

  const { review_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => {
        setSingleReview(res.data.review);
      });
  }, [review_id]);

  return (
    <div>
      <h2></h2>
      <h2 className="user_review">{SingleReview.owner}</h2>
      <h3>{SingleReview.title}</h3>

      <h5> Votes {SingleReview.votes}</h5>

      <img
        className="reviewcard_img"
        src={SingleReview.review_img_url}
        alt="review_img"
      ></img>
      <h3>{SingleReview.review_body}</h3>
      <h4>{SingleReview.comment_count} Comments</h4>
    </div>
  );
}
