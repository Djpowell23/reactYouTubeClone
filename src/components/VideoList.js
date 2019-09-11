import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1em;
  text-align: right;
  img {
    border: ${props =>
      props.active ? "5px solid palevioletred" : "2px solid grey"};
    border-radius: 10px;
    cursor: pointer;
    :hover {
      border-color: red;
    }
  }
`;

const VideoList = ({ children }) => {
  // Gives permission for this to act as a wrapper element and for other elements to be rendered inside
  return <List>{children}</List>;
};

const VideoListItem = ({ video, selectedVideo, onVideoSelect }) => {
  console.log(video);
  return (
    <ListItem active={video === selectedVideo}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        onClick={() => onVideoSelect(video)}
      ></img>
    </ListItem>
  );
};

export { VideoList, VideoListItem };
