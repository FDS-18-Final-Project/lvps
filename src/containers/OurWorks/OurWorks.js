import styled from 'styled-components';
import { calcInterval, calcRem, colors } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { Button, Carousel, Icon, Paragraph } from 'components/';

const carouselImgs = [
  {
    id: 1,
    path: 'assets/dummy_background.png'
  },
  {
    id: 2,
    path: 'assets/dummy_background_02.png'
  },
  {
    id: 3,
    path: 'assets/dummyImage.png'
  },
  {
    id: 4,
    path: 'assets/dummy_ourbestservice.png'
  },
  {
    id: 5,
    path: 'assets/dummy_car1.png'
  }
];

const StyledOurWorksContainer = styled.section`
  padding: ${calcInterval([75, 100])};
  background-color: ${colors.black};
`;

const FullContainer = styled(Layout.FlexContainer)`
  width: ${calcRem(1200)};
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const StyledOurWorksTitle = styled(Layout.FlexContainer)`
  width: 100%;
  margin-bottom: ${calcRem(70)};
`;

const OurWorks = ({ children }) => {
  return (
    <StyledOurWorksContainer>
      <FullContainer justifyContent="space-between" direction="column">
        {children}
      </FullContainer>
    </StyledOurWorksContainer>
  );
};

OurWorks.Title = () => {
  return (
    <StyledOurWorksTitle justifyContent="space-between">
      <Paragraph
        type="title"
        title="Our Works"
        headingNum={2}
        colors={{ main: colors.white, sub: colors.lightGray }}
        size={15}
      >
        Our works about Paint Protection Film
      </Paragraph>
      <Button mode="link" to="/" width={270} fontSize={18} padding="10">
        Visit Our Instagram
        <Icon type="instagram" color={colors.white} />
      </Button>
    </StyledOurWorksTitle>
  );
};

OurWorks.Contents = () => {
  return <Carousel type="img" contents={carouselImgs}></Carousel>;
};

export default OurWorks;
