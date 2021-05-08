import styled from 'styled-components';
import { calcRem, colors, device, fontSizes } from 'theme/theme';
import TagPriceTable from 'components/PriceTable/TagPriceTable';
import Carousel from 'components/Carousel/Carousel';
import { useViewSize } from 'hooks';
import { PPFPackage_01, PPFPackage_02, PPFPackage_03 } from 'data/Data';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StyledTitle = styled.h2`
  margin-bottom: ${calcRem(60)};
  color: ${colors.black};
  font-size: ${fontSizes.titleBase};
  font-family: Montserrat;
  font-weight: 700;

  ${device.tablet} {
    margin-left: ${calcRem(50)};
    font-size: ${fontSizes.xl};
  }
`;

const ImageContainer = styled.div`
  max-width: ${calcRem(880)};

  img {
    width: 100%;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ type }) => (type === 'card' ? 0 : calcRem(60))};
`;

const StyledContainer = styled.section`
  max-width: ${calcRem(1200)};
  margin: auto;
  padding: ${calcRem(75)} 0;
`;

const CarouselContainer = styled(Carousel)`
  margin-bottom: -60px;

  div {
    flex-direction: column;
  }

  img {
    margin-bottom: ${calcRem(35)};
  }
`;

const paint_group = [
  <OptionContainer key="opt_3">
    <ImageContainer key="img_3">
      <LazyLoadImage
        src="assets/desktop-car1.png"
        alt="Paint Protection Film Silver Package"
      />
    </ImageContainer>
    <TagPriceTable
      key="3"
      type="tagSilver"
      typeText="SILVER"
      title="From"
      price={1200}
      info={PPFPackage_03}
      minHeight={200}
      nonSelectedIdx={4}
    />
  </OptionContainer>,
  <OptionContainer key="opt_2">
    <ImageContainer key="img_2">
      <LazyLoadImage
        src="assets/desktop-car2.png"
        alt="Paint Protection Film Gold Package"
      />
    </ImageContainer>
    <TagPriceTable
      key="2"
      type="tagGold"
      typeText="GOLD"
      title="From"
      price={1800}
      info={PPFPackage_02}
      minHeight={200}
      nonSelectedIdx={4}
    />
  </OptionContainer>,
  <OptionContainer key="opt_1">
    <ImageContainer key="img_1">
      <LazyLoadImage
        src="assets/desktop-car3.png"
        alt="Paint Protection Film Platinum Package"
      />
    </ImageContainer>
    <TagPriceTable
      key="1"
      type="tagPlatinum"
      typeText="PLATINUM"
      title="From"
      price={5000}
      info={PPFPackage_01}
      minHeight={200}
    />
  </OptionContainer>
];

const PaintProtectionFilmPackageOption = () => {
  const { desktop } = useViewSize();

  return (
    <StyledContainer>
      <StyledTitle>Paint Protection Film Package Options</StyledTitle>
      {desktop ? (
        <>{paint_group}</>
      ) : (
        <CarouselContainer type="card" contents={paint_group} />
      )}
    </StyledContainer>
  );
};

PaintProtectionFilmPackageOption.displayName =
  'PaintProtectionFilmPackageOption';

export default PaintProtectionFilmPackageOption;
