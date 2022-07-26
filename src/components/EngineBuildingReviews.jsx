import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const EngineBuildingReviews = () => {
  const [EngineBuildingReviews, setEngineBuildingReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews?category=engine-building`)
      .then((res) => {
        setEngineBuildingReviews(res.data.reviews);
      });
  }, []);

  return (
    <div>
      {EngineBuildingReviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </div>
  );
};

export default EngineBuildingReviews;
