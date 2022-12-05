import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ movie }) => {
  return (
    <Link
      to={'/reviews/form'}
      state={{
          movieId: movie.id,
        }}
    >
      <RateReviewIcon variant="outlined" color="primary" fontSize="large">

      </RateReviewIcon>
    </Link>
  );
};

export default WriteReviewIcon;