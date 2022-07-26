import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const DexterityReviews = () => {
  const [DexterityReviews, setDexterityReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews?category=dexterity`)
      .then((res) => {
        setDexterityReviews(res.data.reviews);
      });
  }, []);

  return (
    <div>
      {DexterityReviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </div>
  );
};

export default DexterityReviews;
