import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TitlePriceTable from 'components/PriceTable/TitlePriceTable';
import Carousel from 'components/Carousel/Carousel';

const option_01 = ['2 Layers of "Glass" on all glass and mirrors.'];

const option_02 = ['1 Layer of “Wheel & Caliper” on Wheels & Calipers.'];

const option_03 = [
  '1 Coat of "Leather" on the high traffic area and "Textile" on the carpet floor.'
];

const option_group = [
  <TitlePriceTable
    key="1"
    heading="Glass"
    title="Starting from"
    price={199}
    info={option_01}
    priceColor="pink"
    hover
  />,
  <TitlePriceTable
    key="2"
    heading="Wheels &amp; Calipers
    Protection"
    title="Starting from"
    price={399}
    info={option_02}
    priceColor="pink"
    hover
  />,
  <TitlePriceTable
    key="3"
    heading="Interior Protection"
    title="Starting from"
    price={599}
    info={option_03}
    priceColor="pink"
    hover
  />
];

const StyledPriceCardLayoutPlusContainer = styled(PriceCardLayout)`
  border-top: none;
  background: linear-gradient(
      0deg,
      rgba(225, 224, 224, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ffffff;
`;

const CeramicProProtectionOptions = () => {
  return (
    <StyledPriceCardLayoutPlusContainer
      title="+ Ceramic Pro Protection Additional Options"
      cardList={option_group}
      marginRight={20}
    >
      <Carousel type="card" contents={option_group} />
    </StyledPriceCardLayoutPlusContainer>
  );
};

export default CeramicProProtectionOptions;
