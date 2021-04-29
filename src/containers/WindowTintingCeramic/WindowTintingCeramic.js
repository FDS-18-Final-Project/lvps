import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import DescriptionPriceTable from 'components/PriceTable/DescriptionPriceTable';
import Carousel from 'components/Carousel/Carousel';
import { ceramic_01, ceramic_02 } from 'data/Data';

const carbon_group = [
  <DescriptionPriceTable
    key="1"
    heading="PRIME XR"
    subject="Signature Features"
    description="Utilizing a nano-ceramic construction, PRIME XR ™ maintains the same flawless appearance and clarity throughout the years. Blocking up to 88% infrared heat rejection, PRIME XR will provide you with the level of performance you expect from a top-of-the line film without breaking the bank."
    title="Starting At"
    price={400}
    info={ceramic_01}
    priceColor="red_05"
    minHeight={200}
    padding={[130, 80, 114]}
  />,
  <DescriptionPriceTable
    key="2"
    heading="PRIME XR PLUS ™"
    subject="Signature Features"
    description="The Pinnacle Of High Performance Tint. Period.
    Offering 98% infrared heat rejection thanks to multi-layer nanoparticle technology, PRIME XR PLUS ™ combines a cool look with extreme performance. Let PRIME XR PLUS keep you comfortable and protected no matter the weather.
    "
    title="Starting At"
    price={600}
    info={ceramic_02}
    priceColor="red_05"
    minHeight={200}
    padding={[130, 80, 114]}
  />
];

const StyledPriceCardLayoutContainer = styled(PriceCardLayout)`
  background: linear-gradient(
      0deg,
      rgba(225, 224, 224, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ffffff;
`;

const WindowTintingCeramic = () => {
  return (
    <StyledPriceCardLayoutContainer
      title="Window Tinting Packages Options - Ceramic"
      cardList={carbon_group}
      marginRight={20}
      mode="desc"
    >
      <Carousel type="card" contents={carbon_group} />
    </StyledPriceCardLayoutContainer>
  );
};

export default WindowTintingCeramic;
