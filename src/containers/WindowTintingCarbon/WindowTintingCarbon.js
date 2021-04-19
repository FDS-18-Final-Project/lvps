import { Carousel, PriceCardLayout, DescriptionPriceTable } from 'components/';
import styled from 'styled-components';

const carbon_01 = [
  "Reduces Glare PRIME CS reduces the sun's glare, enhancing visibility and reducing eyestrain.",
  'Keeps You Comfortable PRIME CS window films block solar heat radiation to keep your vehicle at a comfortable temperature and improve fuel efficiency.',
  'UV Ray Protection PRIME CS provides SPF 500 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.',
  'Crystal Clear Signal PRIME CS contains no metalized particles ensuring that it does not interfere with radio, cellular, or Bluetooth signals.',
  'Crystal Clear Signal PRIME CS contains no metalized particles ensuring that it does not interfere with radio, cellular, or Bluetooth signals.'
];

const carbon_02 = [
  'Hybrid Dye-Metal Construction PRIME HP offers higher heat rejection compared to traditional dyed films with a slightly more reflective finish.',
  "UV Ray Protection Our ceramic particle technology blocks the vast majority of the sun's heat-causing infrared radiation — keeping your interior cool and improving fuel efficiency.",
  'Crystal Clear Signal Although PRIME HP contains a metalized layer, we have specifically formulated our hybrid construction so it does not interfere with radio, cellular, or Bluetooth signals.',
  'Looks Good The black color of our PRIME HP series provides a great match to OEM privacy glass and remains the same over the years.',
  'Blend Of Performance And Value PRIME HP series is a perfect marriage of value and performance.'
];

const carbon_group = [
  <DescriptionPriceTable
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
