import { object } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';

const StyledReviewContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledReviewContent = styled.p`
  width: 100%;
  margin: auto;
  color: ${({ colors }) => colors.main};
  line-height: ${calcRem(54)};
  margin-bottom: ${calcRem(50)};
  height: ${calcRem(300)};
`;

const StyledReviewInfo = styled.span`
  display: block;
  margin-bottom: ${calcRem(15)};
  line-height: ${calcRem(54)};
  color: ${({ colors }) => colors.sub};

  span + span {
    margin-bottom: ${calcRem(15)};
  }
`;

const Review = ({ content, colors }) => {
  return (
    <StyledReviewContainer>
      <StyledReviewContent colors={colors}>
        {content.review}
      </StyledReviewContent>
      <StyledReviewInfo aria-label="writer" colors={colors}>
        {content.name}
      </StyledReviewInfo>
      <StyledReviewInfo aria-label="model name" colors={colors}>
        {content.model}
      </StyledReviewInfo>
    </StyledReviewContainer>
  );
};

Review.propTypes = {
  content: object.isRequired,
  colors: object
};

Review.defaultProps = {
  content: {},
  colors: { main: colors.black, sub: colors.black }
};

StyledReviewContent.displayName = 'StyledReviewContent';
StyledReviewInfo.displayName = 'StyledReviewInfo';

export default Review;
