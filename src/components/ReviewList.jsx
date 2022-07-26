import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://hb-games.herokuapp.com/api/reviews`).then((res) => {
      setReviews(res.data.reviews);
    });
  }, []);
console.log(reviews)


  return (
    <div>
      {reviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>
      })}
    </div>
  );
}
