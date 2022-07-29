import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  return (
    <div className="review-border" src={review} alt="review-border">
      <h2>{review.title}</h2>
      <h3>
        posted on {review.created_at.toString().slice(0, 10)}, at{" "}
        {review.created_at.toString().slice(11, 19)}
      </h3>

      <h3>{review.review_body}</h3>

      <img
        className="reviewcard_img"
        src={review.review_img_url}
        alt="review_img"
      ></img>
      <h5>comments:{review.comment_count}</h5>
      <h5>votes:{review.votes}</h5>
      <h5>{review.category}</h5>
      <button className="review-card-button">
        <Link to={`/review/${review.review_id}`} className="navigation_link">
          Read more
        </Link>
      </button>
    </div>
  );
}
