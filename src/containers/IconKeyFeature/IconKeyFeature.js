import useViewSize from 'hooks/useViewSize';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled, { css } from 'styled-components';
import { calcInterval, calcRem } from 'theme/theme';

const explanCeramic = [
  {
    id: 1,
    title: 'Self Healing',
    iconType: 'paintProtectionHealing',
    content:
      'When exposed to heat, the enhanced clear coat properties eliminate fine scratches and swirl marks'
  },
  {
    id: 2,
    title: 'Discolouration & Stain Resistant',
    iconType: 'paintProtectionDiscolouration',

    content:
      'Stain resistant and will maintain clarity under the harshest conditions here in Canada'
  },
  {
    id: 3,
    title: 'Absolute Clarity & Protection',
    iconType: 'paintProtectionShield',

    content:
      'Zero orange peel finish, leaves the film virtually invisible. Protection should be indistinguishable from factory paint.'
  },
  {
    id: 4,
    title: 'Warranty',
    iconType: 'paintProtectionWarranty',
    content:
      'Built to last. ULTIMATE PLUS is backed by our comprehensive 10 year warranty, ensuring your vehicle looks its best for years to come.'
  }
];

const styledMobile = css`
  display: flex;
  justify-content: space-between;
  .icon-paragraph {
    width: ${calcRem(304)};
  }
  svg {
    margin-right: 0;
    margin-bottom: ${calcRem(34)};
  }
`;

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: ${calcInterval([70, 20])};
  .icon-paragraph {
    width: 100%;
  }
  ${({ desktop }) => !desktop && styledMobile}
`;

const IconKeyFeature = () => {
  const { desktop } = useViewSize();
  return (
    <StyledIconParagraphLayout
      title="Xpel Ultimate Plus Key Features"
      contents={explanCeramic}
      paragraphWidth="100%"
      direction={desktop ? 'row' : 'column'}
      desktop={desktop}
    />
  );
};

export default IconKeyFeature;
