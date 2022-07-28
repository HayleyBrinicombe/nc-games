const axios = require("axios");

export const getComments = async (review_id) => {
  const { data } = await axios.get(
    `https://hb-games.herokuapp.com/api/reviews/${review_id}/comments`
  );
  return data.comments;
};

export const postComment = async (review_id, username, body) => {
  const { data } = await axios.post(
    `https://hb-games.herokuapp.com/api/reviews/${review_id}/comments`,
    {
      username: username,
      body: body
    }
  );
  
  return data.comment;
};
