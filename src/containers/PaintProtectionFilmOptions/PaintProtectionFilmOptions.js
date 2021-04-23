import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TitlePriceTable from 'components/PriceTable/TitlePriceTable';
import Carousel from 'components/Carousel/Carousel';

const StyledTitlePriceTable = styled(TitlePriceTable)`
  .divider {
    display: none;
  }
`;

const film_group = [
  <StyledTitlePriceTable
    key="1"
    heading="18'' Hood
    and Fenders"
    title="Starting from"
    price={199}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
    hover
  />,
  <StyledTitlePriceTable
    key="2"
    heading="24'' Hood
    and Fenders"
    title="Starting from"
    price={399}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
    hover
  />,
  <StyledTitlePriceTable
    key="3"
    heading="Trunk Strip
    Paint protection"
    title="Starting from"
    price={599}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
    hover
  />,
  <StyledTitlePriceTable
    key="4"
    heading="Rocker Panel
    Paint Protection"
    title="Starting from"
    price={199}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
    hover
  />,
  <StyledTitlePriceTable
    key="5"
    heading="Front Headlight
    Paint Protection"
    title="Starting from"
    price={399}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
    hover
  />,
  <StyledTitlePriceTable
    key="6"
    heading="Full Bumper
    Paint Protection"
    title="Starting from"
    price={599}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
    hover
  />,
  <StyledTitlePriceTable
    key="7"
    heading="Full Hood
    Paint Protection"
    title="Starting from"
    price={199}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
    hover
  />,
  <StyledTitlePriceTable
    key="8"
    heading="Pillars
    Paint Protection"
    title="Starting from"
    price={399}
    info={[]}
    priceColor="red_05"
    padding={[78, 20, 81]}
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

const PaintProtectionFilmOptions = () => {
  return (
    <StyledPriceCardLayoutPlusContainer
      title="+ Paint Protection Options"
      cardList={film_group}
      marginRight={20}
      display="grid"
    >
      <Carousel type="card" contents={film_group} />
    </StyledPriceCardLayoutPlusContainer>
  );
};

export default PaintProtectionFilmOptions;
