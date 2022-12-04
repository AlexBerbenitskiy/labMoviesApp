import React from "react";
import Show from "../showCard";
import Grid from "@mui/material/Grid";

const ShowList = ( {shows, action }) => {
  let showCards = shows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <show key={m.id} show={m} action={action} />
    </Grid>
  ));
  return showCards;
};

export default ShowList;