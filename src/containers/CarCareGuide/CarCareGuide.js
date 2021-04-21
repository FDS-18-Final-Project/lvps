import useViewSize from 'hooks/useViewSize';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';

const explanCeramic = [
  {
    id: 1,
    iconType: 'iGLBus',
    title: 'WASHING',
    content:
      'For best results wash with IGL, Ecoclean Wash or IGL Ecoshine Paint on a bi-weekly basis to avoid excessive contamination build up. Avoid washing in direct sunlight to minimize streaking and water spotting. Wash from the top down leaving the dirtiest sections for last to avoid cross contamination. Use separate soap and sponge/mitt for wheels.'
  },
  {
    id: 2,
    iconType: 'iGLCar',
    title: 'DRYING',
    content:
      'Always dry completely and never leave to “air” dry. Tap water contains minerals that may leave deposits creating water spots. Use quality IGL Microfiber towels for best results and avoid aggressive wiping, allowing the material to absorb the water.'
  },
  {
    id: 3,
    iconType: 'iGLHand',
    title: 'SPOT REMOVAL',
    content:
      'Never use aggressive products to polish the coating or remove surface contamination. Never use excessive force to remove spots. Bird droppings, tar, sap, etc. should be removed as soon as possible to avoid temporary staining or hardening on the coating. Any staining left behind from the bird droppings will break down over a few days without affecting the coating.'
  }
];

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  svg {
    margin-right: 0;
    margin-bottom: ${calcRem(35)};
  }

  .icon-paragraph {
    /* width: 80%; */
    div:last-child {
      height: ${calcRem(290)};
    }
  }

  align-items: center;
  justify-items: center;
`;

const CarCareGuide = () => {
  const { desktop } = useViewSize();

  return (
    <StyledIconParagraphLayout
      title="Why Ceramic Pro Protection?"
      contents={explanCeramic}
      paragraphWidth="100%"
      direction="column"
      desktop={desktop}
      textAlign={{ title: 'center', content: 'center' }}
    />
  );
};

export default CarCareGuide;
