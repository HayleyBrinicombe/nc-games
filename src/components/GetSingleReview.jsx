import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";
import CommentForm from "./CommentForm";



export default function GetSingleReview() {
  const [SingleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews/${review_id}`)
      .then((res) => {
        setIsLoading(false);
        setSingleReview(res.data.review);
      });
  }, [review_id]);

  if (isLoading) return(
    <div className="Page-Content Loading-Screen">
      <img
      src="https://qph.cf2.quoracdn.net/main-qimg-7a960949a5d51cf8b6ffef964d57feec"
      alt="Loading reviews..."
      ></img>

    </div>
  )

  return (
    <div>
      <h2 className="user_review">{SingleReview.owner}</h2>
      <h3>{SingleReview.title}</h3>

      <img
        className="reviewcard_img"
        src={SingleReview.review_img_url}
        alt="review_img"
      ></img>
      <h3>{SingleReview.review_body}</h3>
      <Votes
        review_id={review_id}
        SingleReview={SingleReview}
        setSingleReview={setSingleReview}
      ></Votes>
      <div className="votes-num">
        Like ths review? If so, then please vote for it!
      </div>
      <h4 className="user_review2"> comments {SingleReview.comment_count} </h4>
      <Comments review_id={review_id}  />
      <CommentForm review_id={review_id} />
      <br></br>
    </div>
  );
}
