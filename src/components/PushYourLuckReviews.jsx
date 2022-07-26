import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const PushYourLuckReviews = () => {
  const [PushYourLuckReviews, setPushYourLuckReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews?category=push-your-luck`)
      .then((res) => {
        setPushYourLuckReviews(res.data.reviews);
      });
  }, []);

  return (
    <div>
      {PushYourLuckReviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </div>
  );
};

export default PushYourLuckReviews;
