import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import DescriptionPriceTable from 'components/PriceTable/DescriptionPriceTable';
import Carousel from 'components/Carousel/Carousel';
import { carbon_01, carbon_02 } from 'data/Data';

const carbon_group = [
  <DescriptionPriceTable
    key="1"
    heading="PRIME CS™"
    subject="Signature Features"
    description=""
    title="Starting At"
    price={250}
    info={carbon_01}
    priceColor="red_05"
    minHeight={200}
    padding={[130, 80, 114]}
  />,
  <DescriptionPriceTable
    key="2"
    heading="Hybrid Film"
    subject="Signature Features"
    description=""
    title="Starting At"
    price={300}
    info={carbon_02}
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

const WindowTintingCarbon = () => {
  return (
    <StyledPriceCardLayoutContainer
      title="Window Tinting Packages Options - Carbon"
      cardList={carbon_group}
      marginRight={20}
      mode="desc"
    >
      <Carousel type="card" contents={carbon_group} />
    </StyledPriceCardLayoutContainer>
  );
};

export default WindowTintingCarbon;
