import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";
import API from "./utils/API";
import _ from "lodash";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.searchYouTube("classic WoW");
  }

  // Template ... Function Declaration
  searchYouTube = term => {
    API.searchYouTube(term)
      // Call the return value from call above
      .then(res =>
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0]
        })
      )
      .catch(err => console.log(err));
  };

  onVideoSelect = selectedVideo => {
    this.setState({
      selectedVideo: selectedVideo
    });
  };

  throttledSearch = _.debounce(this.searchYouTube, 600);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Magical YouTube Search</h1>
            <SearchBar searchYouTube={this.throttledSearch} />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </Col>
          <Col md="4">
            <VideoList>
              {this.state.videos.map(video => (
                <VideoListItem
                  video={video}
                  key={video.id.videoId}
                  id={video.id.videoId}
                  selectedVideo={this.state.selectedVideo}
                  onVideoSelect={this.onVideoSelect}
                />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
