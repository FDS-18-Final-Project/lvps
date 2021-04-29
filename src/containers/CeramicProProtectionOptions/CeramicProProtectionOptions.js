import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TitlePriceTable from 'components/PriceTable/TitlePriceTable';
import Carousel from 'components/Carousel/Carousel';
import {
  ceramicOption_01,
  ceramicOption_02,
  ceramicOption_03
} from 'data/Data';

const option_group = [
  <TitlePriceTable
    key="1"
    heading="Glass"
    title="Starting from"
    price={199}
    info={ceramicOption_01}
    priceColor="pink"
    hover
  />,
  <TitlePriceTable
    key="2"
    heading="Wheels &amp; Calipers
    Protection"
    title="Starting from"
    price={399}
    info={ceramicOption_02}
    priceColor="pink"
    hover
  />,
  <TitlePriceTable
    key="3"
    heading="Interior Protection"
    title="Starting from"
    price={599}
    info={ceramicOption_03}
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
