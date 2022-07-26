import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const HiddenRolesReviews = () => {
  const [HiddenRolesReviews, setHiddenRolesReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hb-games.herokuapp.com/api/reviews?category=hidden-roles`)
      .then((res) => {
        setHiddenRolesReviews(res.data.reviews);
      });
  }, []);

  return (
    <div>
      {HiddenRolesReviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </div>
  );
};

export default HiddenRolesReviews;
