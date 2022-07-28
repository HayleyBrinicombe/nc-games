import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Votes({ SingleReview, setSingleReview }) {
  const { review_id } = useParams();
  const upVote = { inc_votes: 1 };
  const downVote = { inc_votes: -1 };
  const [isError, setIsError] = useState(false);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
  const [voteNumber, setVoteNumber] = useState(SingleReview.votes);

  function updateVotes(vote) {
    return axios
      .patch(`https://hb-games.herokuapp.com/api/reviews/${review_id}`, vote)
      .then((response) => {
        return response.data;
      });
  }

  const handleUpClick = () => {
    setIsError(false);
    setHasUpVoted(true);
    setHasDownVoted(false);
    setVoteNumber(voteNumber + 1);

    updateVotes(upVote).catch(() => {
      setIsError(true);
    });
  };

  const handleDownClick = () => {
    setIsError(false);
    setHasDownVoted(true);
    setHasUpVoted(false);
    setVoteNumber(voteNumber - 1);
    updateVotes(downVote).catch(() => {
      setIsError(true);
    });
  };

  return (
    <section className="votesCard">
      <p className="votes-num">Votes: {voteNumber}</p>

      <button className="button1" onClick={handleUpClick}>
        {hasUpVoted ? (
          <p className="votes-num">Thank you for voting</p>
        ) : (
          <p>👍</p>
        )}
      </button>
      <button className="button1" onClick={handleDownClick}>
        {hasDownVoted ? (
          <p className="votes-num">Thank you for voting</p>
        ) : (
          <p>👎 </p>
        )}
      </button>

      <br></br>
      {isError && <p>Vote not registered, please try again</p>}
    </section>
  );
}
