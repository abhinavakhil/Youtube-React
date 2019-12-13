import React from "react";
import logo from "./logo.svg";
import "./App.css";
// exporting grid from material ui
import { Grid } from "@material-ui/core";

//importing component
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  // lifecycle hook
  componentDidMount() {
    this.handleSubmit("pdf generation with react and node");
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet", // part:snippet === https://www.googleapis.com/youtube/v3?&part=snippet
        maxResults: 5,
        key: "AIzaSyC7j7VOWhjhsbJ2aFmvPrHlUyTvEJhbQCg",
        q: searchTerm
      }
    });
    console.log(response);
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={0}>
        <Grid item xs={12}>
          <SearchBar onFormSubmit={this.handleSubmit} />
        </Grid>

        <Grid item xs={11} style={{ marginTop: "30px" }}>
          <Grid container spacing={10}>
            {/* <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid> */}
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
