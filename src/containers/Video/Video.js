import React from 'react';
import { string } from 'prop-types';
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

const Video = ({ videoId, videoTitle }) => {
  return (
    <StyledVideoContainer>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </StyledVideoContainer>
  );
};
Video.prototype = {
  videoId: string,
  videoTitle: string
};
Video.defaultProps = {
  videoId: 'dEHu-STjB-Q',
  videoTitle: 'service-ceramic-pro-vedio'
};

StyledVideoContainer.displayName = 'VideoContainer';

export default Video;
