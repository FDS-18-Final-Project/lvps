import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import TagPriceTable from 'components/PriceTable/TagPriceTable';
import Carousel from 'components/Carousel/Carousel';
import { DPCcardInfolist } from 'data/Data';

const paint_group = [
  <TagPriceTable
    key="1"
    type="tagGold"
    typeText="GOLD"
    title="From"
    price={499.99}
    info={DPCcardInfolist}
    minHeight={200}
  />,
  <TagPriceTable
    key="2"
    type="tagSilver"
    typeText="SILVER"
    title="From"
    price={299.99}
    info={DPCcardInfolist}
    minHeight={200}
    nonSelectedIdx={10}
  />,
  <TagPriceTable
    key="3"
    type="tagBronze"
    typeText="BRONZE"
    title="From"
    price={199.99}
    info={DPCcardInfolist}
    minHeight={200}
    nonSelectedIdx={8}
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

const DetailingPaintPackage = () => {
  return (
    <StyledPriceCardLayoutContainer
      title="Detailing &amp; Paint Correction Packages Options"
      cardList={paint_group}
      marginRight={20}
    >
      <Carousel type="card" contents={paint_group} />
    </StyledPriceCardLayoutContainer>
  );
};

export default DetailingPaintPackage;
