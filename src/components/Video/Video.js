import React from 'react';
import styled from 'styled-components';

const StyledVideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 56.25%;
  padding-top: 30px;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ videoId, videoTitle, ...restProps }) => {
  return (
    <StyledVideoContainer>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={videoTitle}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </StyledVideoContainer>
  );
};

Video.defaultProps = {
  videoId: 'dEHu-STjB-Q',
  videoTitle: 'service-ceramic-pro-vedio'
};
export default Video;
