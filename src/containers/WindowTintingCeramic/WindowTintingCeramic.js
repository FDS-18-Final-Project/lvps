import styled from 'styled-components';
import PriceCardLayout from 'pages/Layout/PriceCardLayout';
import DescriptionPriceTable from 'components/PriceTable/DescriptionPriceTable';
import Carousel from 'components/Carousel/Carousel';

const carbon_01 = [
  "Ceramic Particle Technology PRIME XR contains ceramic particles that filter out the sun's infrared radiation — making them more effective than traditional metallized or dyed films.",
  "Superior Heat Rejection Our ceramic particle technology blocks the vast majority of the sun's heat-causing infrared radiation — keeping your interior cool and improving fuel efficiency.",
  'UV Ray Protection PRIME XR provides SPF 1,000 protection that effectively blocks over 99% of harmful Ultraviolet rays that can lead to numerous skin cancers, premature aging and skin cell damage.',
  'Greater Clarity In the past, keeping cool meant darker shades. The ceramic technology in PRIME XR allows us to provide the highest performance without sacrificing clarity and color.',
  'Crystal Clear Signal Our nano-ceramic particle technology does not interfere with radio, cellular, and Bluetooth signals like traditional metallized films.'
];

const carbon_02 = [
  'Ceramic Particle Technology Contains a proprietary blend of ceramic particles to act as a solid barrier to infrared heat while maintaining the ease of install in a 1.5 mil construction.',
  'Superior Heat Rejection Our multilayer nano-ceramic particle technology blocks up to 98% of the infrared heat.',
  'UV Ray Protection PRIME XR PLUS provides SPF 1,000 protection that effectively blocks over 99% of harmful UV rays that can lead to numerous skin cancers, premature aging and skin cell damage.',
  'Greater Clarity In the past, keeping cool meant choosing a darker shade of tint. The multi-layer nano construction in PRIME XR PLUS provides ultra-high performance without reducing outbound visibility.',
  'Crystal Clear Signal In a digital world, clear communication is key. PRIME XR PLUS construction will not interfere with radio, cellular, or bluetooth signals.'
];

const carbon_group = [
  <DescriptionPriceTable
    heading="PRIME XR"
    subject="Signature Features"
    description="Utilizing a nano-ceramic construction, PRIME XR ™ maintains the same flawless appearance and clarity throughout the years. Blocking up to 88% infrared heat rejection, PRIME XR will provide you with the level of performance you expect from a top-of-the line film without breaking the bank."
    title="Starting At"
    price={400}
    info={carbon_01}
    priceColor="red_05"
    minHeight={200}
    padding={[130, 80, 114]}
  />,
  <DescriptionPriceTable
    heading="PRIME XR PLUS ™"
    subject="Signature Features"
    description="The Pinnacle Of High Performance Tint. Period.
    Offering 98% infrared heat rejection thanks to multi-layer nanoparticle technology, PRIME XR PLUS ™ combines a cool look with extreme performance. Let PRIME XR PLUS keep you comfortable and protected no matter the weather.
    "
    title="Starting At"
    price={600}
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
