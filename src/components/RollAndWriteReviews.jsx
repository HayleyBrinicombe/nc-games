import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const RollAndWriteReviews = () => {
  const [RollAndWriteReviews, setRollAndWriteReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews?category=roll-and-write`)
      .then((res) => {
        setRollAndWriteReviews(res.data.reviews);
      });
  }, []);

  return (
    <div>
      {RollAndWriteReviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </div>
  );
};

export default RollAndWriteReviews;
