export default function SingleReview({ review }) {
  return (
    <div className="review-border" src={review} alt="review-border">
      <h3>{review.title}</h3>
      <p>{review.review_body}</p>
      <img
        className="reviewcard_img"
        src={review.review_img_url}
        alt="review_img"
      ></img>
      <h5>{review.category}</h5>
    </div>
  );
}
