import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import SortBy from "./SortBy";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://hb-games.herokuapp.com/api/reviews`, {
        params: {
          category: category,
          sort_by: sortBy,
          order: order
        }
      })
      .then((res) => {
        setIsLoading(false);
        setReviews(res.data.reviews);
      });
  }, [category, setReviews, sortBy, order]);

  return (
    <div>
      <SortBy setSortBy={setSortBy} setOrder={setOrder} />
      <br></br>

      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review}></ReviewCard>;
      })}
    </div>
  );
}
