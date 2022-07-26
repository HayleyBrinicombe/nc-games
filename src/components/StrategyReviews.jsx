import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const StrategyReviews = () => {
  const [strategyReviews, setstrategyReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews?category=strategy`)
      .then((res) => {
        setstrategyReviews(res.data.reviews);
      });
  }, []);

  return (
    <div>
      {strategyReviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </div>
  );
};

export default StrategyReviews;
