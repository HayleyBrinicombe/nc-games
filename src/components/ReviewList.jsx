import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews`, {
        params: {
          category: category
        }
      })
      .then((res) => {
        setIsLoading(false);
        setReviews(res.data.reviews);
      });
  }, [category]);
  

  return (
    <div>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review}></ReviewCard>;
      })}
    </div>
  );
}

