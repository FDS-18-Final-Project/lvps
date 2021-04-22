import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TitlePriceTable from 'components/PriceTable/TitlePriceTable';
import Carousel from 'components/Carousel/Carousel';
import { calcRem } from 'theme/theme';

const product_01 = [
  'Premium high solids silica coating',
  '8H hardness',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 1 year'
];

const product_02 = [
  'Premium high solids silica coating',
  '9H hardness',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 2 years'
];

const product_03 = [
  'Premium high solids silica coating',
  '9H hardness with improved chemical resistance',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 3 years'
];

const product_04 = [
  'Premium 100% solid hybrid silica coating',
  '10H hardness with extreme silk like slick',
  'Ultimate gloss & shine',
  'Repels water, oil & dirt',
  'Extremely durable lasting up to 5 years'
];

const product_group = [
  <TitlePriceTable
    key="1"
    heading="IGL POLY"
    title="Starting from"
    price={400}
    info={product_01}
    priceColor="green"
    padding={[78, 10, 81]}
  />,
  <TitlePriceTable
    key="2"
    heading="IGL QUARTZ"
    title="Starting from"
    price={600}
    info={product_02}
    priceColor="green"
    padding={[78, 10, 81]}
  />,
  <TitlePriceTable
    key="3"
    heading="IGL QUARTZ+"
    title="Starting from"
    price={800}
    info={product_03}
    priceColor="green"
    padding={[78, 10, 81]}
  />,
  <TitlePriceTable
    key="4"
    heading="IGL KENZO"
    title="Starting from"
    price={1200}
    info={product_04}
    priceColor="green"
    padding={[78, 10, 81]}
  />
];

const StyledIGLProtectionProductsContainer = styled(PriceCardLayout)`
  border-top: none;
  background: linear-gradient(
      0deg,
      rgba(225, 224, 224, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ffffff;

  .card-container {
    div {
      padding-left: ${calcRem(10)};
    }
    li {
      line-height: 1.4;
    }
    li > div {
      margin-right: 8px;
    }
  }
`;

const IGLProtectionProducts = () => {
  return (
    <StyledIGLProtectionProductsContainer
      title="IGL Protection Products"
      cardList={product_group}
      marginRight={10}
    >
      <Carousel type="card" contents={product_group} />
    </StyledIGLProtectionProductsContainer>
  );
};

export default IGLProtectionProducts;
