import styled from 'styled-components';
import { colors, calcRem, calcInterval, fontSizes, device } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import Paragraph from 'components/Paragraph/Paragraph';
import Carousel from 'components/Carousel/Carousel';
import { reviews } from 'data/Data';

const StyledReviewContainer = styled.section`
  position: relative;
  background: url('assets/reviewBackground.png') no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${calcInterval([75, 100])};

  ${device.desktop} {
    padding: ${calcInterval([70, 50])};
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #2d2d2d;
  z-index: 100;
  opacity: 0.6;
`;

const FullContainer = styled.div`
  z-index: 1000;
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  position: relative;

  ${device.tablet} {
    .review {
      margin: 0 auto;

      font-size: ${fontSizes.base};
      /* max-width: ${calcRem(300)}; */
      padding: ${calcRem(0)};
      box-sizing: border-box;
    }

    h2 {
      font-size: ${fontSizes.xxxl};
      text-align: center;
    }
    .review-title {
      width: 100%;
    }
    .review-title > p {
      display: none;
    }
  }

  ${device.tablet} {
    h2 {
      font-size: ${fontSizes.xl}
    }
  }
`;

const StyledReviewTitleContainer = styled(Layout.FlexContainer)`
  margin-bottom: ${calcRem(100)};

  ${device.tablet} {
    margin-bottom: ${calcRem(0)};
  }

  div + div {
    margin-left: ${calcRem(25)};
  }
`;

const Reviews = () => {
  return (
    <StyledReviewContainer>
      <StyledOverlay />
      <FullContainer>
        <Reviews.Title />
        <Reviews.Contents />
      </FullContainer>
    </StyledReviewContainer>
  );
};

Reviews.Title = () => {
  return (
    <StyledReviewTitleContainer justifyContent="flex-start">
      <Paragraph
        headingNum={2}
        size={24}
        type="title"
        title="Customer Reviews"
        colors={{ main: colors.white, sub: colors.redMain }}
        className="review-title"
      >
        Google Reviews - 5 Stars Link to google page.
      </Paragraph>
    </StyledReviewTitleContainer>
  );
};

Reviews.Contents = () => {
  return <Carousel type="paragraph" contents={reviews} />;
};

StyledReviewContainer.displayName = 'StyledReviewContainer';
StyledReviewTitleContainer.displayName = 'StyledReviewTitleContainer';
Reviews.Title.displayName = 'Review-Title';
Reviews.Contents.displayName = 'Review-Contents';

export default Reviews;
