import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TitlePriceTable from 'components/PriceTable/TitlePriceTable';
import Carousel from 'components/Carousel/Carousel';

const option_01 = [
  'Premium high solids silica coating',
  '8H hardness',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 1 year'
];

const option_02 = [
  'Premium high solids silica coating',
  '9H hardness',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 2 years'
];

const option_03 = [
  'Premium high solids silica coating',
  '9H hardness with improved chemical resistance',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 3 years'
];

const option_group = [
  <TitlePriceTable
    heading="Glass"
    title="Starting from"
    price={199}
    info={option_01}
    priceColor="pink"
    hover
  />,
  <TitlePriceTable
    heading="Wheels &amp; Calipers
    Protection"
    title="Starting from"
    price={399}
    info={option_02}
    priceColor="pink"
    hover
  />,
  <TitlePriceTable
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
