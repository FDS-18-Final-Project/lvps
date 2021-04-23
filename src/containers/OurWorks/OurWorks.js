import styled from 'styled-components';
import { calcInterval, calcRem, colors, device, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { useViewSize } from 'hooks/';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Carousel from 'components/Carousel/Carousel';

const carouselImgs = [
  {
    id: 1,
    path: 'assets/ceramicOurWorks_01.png'
  },
  {
    id: 2,
    path: 'assets/ceramicOurWorks_02.png'
  },
  {
    id: 3,
    path: 'assets/ceramicOurWorks_03.png'
  },
  {
    id: 4,
    path: 'assets/ceramicOurWorks_04.png'
  },
  {
    id: 5,
    path: 'assets/ceramicOurWorks_05.png'
  }
];

const StyledOurWorksContainer = styled.section`
  padding: ${calcInterval([75, 100])};
  background-color: ${colors.black};

  ${device.desktop} {
    padding: ${calcRem(50)};
  }

  ${device.tablet} {
    padding: ${calcInterval([30, 15])};
  }
`;

const FullContainer = styled(Layout.FlexContainer)`
  max-width: ${calcRem(1200)};
  /* box-sizing: border-box;
  padding: ${calcInterval([0, 100])}; */
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const StyledOurWorksTitle = styled(Layout.FlexContainer)`
  width: 100%;
  margin-bottom: ${calcRem(70)};

  ${device.tablet} {
    text-align: center;
    margin-bottom: ${calcRem(40)};
    div {
      margin: 0 auto;
    }
    h2 {
      font-size: ${fontSizes.xl};
    }
    p {
      font-size: ${fontSizes.small};
    }
  }
`;

const OurWorks = ({ contents }) => {
  const { desktop } = useViewSize();

  return (
    <StyledOurWorksContainer>
      <FullContainer justifyContent="space-between" direction="column">
        <OurWorks.Title desktop={desktop ? 1 : 0} />
        <OurWorks.Contents contents={contents} />
      </FullContainer>
    </StyledOurWorksContainer>
  );
};

OurWorks.Title = ({ desktop }) => {
  return (
    <StyledOurWorksTitle justifyContent="space-between">
      <Paragraph
        type="title"
        title="Our Works"
        headingNum={2}
        colors={{ main: colors.white, sub: colors.lightGray }}
        size={15}
        className="ourWorks-title"
      >
        Our works about Paint Protection Film
      </Paragraph>
      {desktop ? (
        <a href="https://www.instagram.com/lvps.ca/?hl=en">
          <Button width={270} fontSize={18} padding="10">
            Visit Our Instagram
            <Icon title="instagram" type="instagram" color={colors.white} />
          </Button>
        </a>
      ) : null}
    </StyledOurWorksTitle>
  );
};

OurWorks.Contents = ({ contents = carouselImgs }) => {
  return <Carousel type="img" contents={contents}></Carousel>;
};

export default OurWorks;
