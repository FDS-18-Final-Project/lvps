import styled from 'styled-components';
import { colors, calcRem, calcInterval, fontSizes, device } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import Paragraph from 'components/Paragraph/Paragraph';
import Carousel from 'components/Carousel/Carousel';

const reviews = [
  {
    id: 1,
    name: 'Eavan',
    model: 'Chevrolet',
    star: 5,
    review:
      'Incidunt facilis dolorum commodi consequatur quia iste? Fuga minima consectetur odit doloribus temporibus tempora quidem modi quaerat perferendis praesentium magnam, impedit dolorem velit qui nostrum! Quis asperiores consectetur tempora temporibus, similique assumenda exercitationem architecto quod ipsum!'
  },
  {
    id: 2,
    name: 'Tesla Parts',
    model: '2019 Tesla Model S',
    star: 4,
    review:
      'Got my Tesla tinted and ceramic coated with Lvps Great service, quality and price! Got complimentary interior clean up and sanitization because of covid. Thanks guys! Would  definitely recommend to friends and family!'
  },
  {
    id: 3,
    name: 'Daniel Guarino',
    model: '2018 Tesla Model 3',
    star: 5,
    review:
      "Got my Tesla model 3 ceramic coated by Max @ LVPS.... did a fantastic job..the car looks cleaner, shines brighter, has a deep finish look.  I couldn't be more happier!"
  },
  {
    id: 4,
    name: 'Natasha Bayarskaya',
    model: '2016 Honda Pilot',
    star: 5,
    review:
      'Amazing service! Thanks to Max and LVPS. Got my 2016 Honda Pilot all detailed and paint corrected with Ceramic Coating package. My car looks like brand new again. Would recommend to all my friends and family.'
  },
  {
    id: 5,
    name: 'Randy Cho',
    model: '2021 Tesla Model 3',
    star: 5,
    review:
      'Amazing job on my Tesla model 3! Did a ceramic coat and it turned out so nice! Recommend going to see Max at LVP for all your vehicle needs !'
  }
];

const StyledReviewContainer = styled.section`
  background: url('assets/dummy_background.png') no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${calcInterval([75, 100])};

  ${device.desktop} {
    padding: ${calcInterval([70, 50])};
  }
`;

const FullContainer = styled.div`
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
