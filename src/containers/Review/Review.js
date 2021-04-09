import { Paragraph, Carousel, Icon } from 'components/';
import styled from 'styled-components';
import theme from 'theme/theme';

const { colors, interval, calcInterval } = theme;

const ReviewWrapper = styled.section`
  background: url('assets/dummy_background.png') no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${calcInterval([140, 200])};
  height: 1080px;
`;

const ReviewTitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: ${interval.lg};

  div + div {
    margin-left: 25px;
  }
`;

const Review = ({ children }) => {
  return <ReviewWrapper>{children}</ReviewWrapper>;
};

Review.Title = () => {
  return (
    <ReviewTitleWrapper>
      <Paragraph
        headingNum={2}
        size={24}
        type="title"
        title="Customer Reviews"
        colors={{ main: colors.white, sub: colors.redMain }}
      >
        Our customers value &amp; trust us with their vehicles.
      </Paragraph>
      {/* TODO: 아이콘 이상하게뜸 */}
      <Icon type="checkedCar" />
    </ReviewTitleWrapper>
  );
};

Review.Contents = () => {
  return <Carousel />;
};

ReviewWrapper.displayName = 'ReviewWrapper';
ReviewTitleWrapper.displayName = 'ReviewTitleWrapper';

export default Review;
