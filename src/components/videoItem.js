import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ width: "200px", align: "center" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />

        <Typography style={{ marginLeft: "4px" }} variant="p">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
