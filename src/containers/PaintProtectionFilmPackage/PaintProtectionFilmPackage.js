import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import { Carousel, TagPriceTable } from 'components/';

const paint_01 = [
  'Full Front & Rear Bumpers',
  'Hood & Fenders 18″',
  'Mirror Covers',
  'Headlights & Fog Lights',
  'Full Door Panels',
  'Full Quater & Pillar Panels'
];

const paint_02 = [
  'Full Front Bumper',
  'Full Hood & Fenders',
  'Mirror Covers',
  'Headlights & Fog Lights',
  'Full Door Panels',
  'Full Quater & Pillar Panels'
];

const paint_03 = [
  'Full Front Bumper',
  'Hood & Fenders 18″',
  'Mirror Covers',
  'Headlights & Fog Lights',
  'Full Door Panels',
  'Full Quater & Pillar Panels'
];

const paint_group = [
  <TagPriceTable
    type="tagPlatinum"
    typeText="PLATINUM"
    title="From"
    price={5000}
    info={paint_01}
    minHeight={200}
  />,
  <TagPriceTable
    type="tagGold"
    typeText="GOLD"
    title="From"
    price={1800}
    info={paint_02}
    minHeight={200}
    nonSelectedIdx={4}
  />,
  <TagPriceTable
    type="tagSilver"
    typeText="SILVER"
    title="From"
    price={599}
    info={paint_03}
    minHeight={200}
    nonSelectedIdx={4}
  />
];

const StyledPriceCardLayoutContainer = styled(PriceCardLayout)`
  border-bottom: none;
`;

const PaintProtectionFilmPackage = () => {
  return (
    <StyledPriceCardLayoutContainer
      title="Paint Protection Film Package Options"
      cardList={paint_group}
      marginRight={20}
    >
      <Carousel type="card" contents={paint_group} />
    </StyledPriceCardLayoutContainer>
  );
};

export default PaintProtectionFilmPackage;
