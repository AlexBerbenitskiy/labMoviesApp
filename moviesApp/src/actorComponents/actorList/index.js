import React from "react";
import Actor from "../actorCard/";
import Grid from "@mui/material/Grid";

const ActorList = (props) => {
  let actorCards = props.actors.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={m.id} actor={m} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;