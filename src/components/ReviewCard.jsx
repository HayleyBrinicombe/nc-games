import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  return (
    <div className="review-border" src={review} alt="review-border">
      <h2>{review.title}</h2>
      <h3>{review.review_body}</h3>

      <img
        className="reviewcard_img"
        src={review.review_img_url}
        alt="review_img"
      ></img>
      <h5>{review.category}</h5>
      <button>
        <Link to={`/review/${review.review_id}`} className="navigation_link">
          Read more
        </Link>
      </button>
    </div>
  );
}
