import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const DeckBuildingReviews = () => {
  const [DeckBuildingReviews, setDeckBuildingReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews?category=deck-building`)
      .then((res) => {
        setDeckBuildingReviews(res.data.reviews);
      });
  }, []);

  return (
    <div>
      {DeckBuildingReviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </div>
  );
};

export default DeckBuildingReviews;
