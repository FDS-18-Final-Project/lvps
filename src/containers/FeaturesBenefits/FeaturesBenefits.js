import styled from 'styled-components';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import useViewSize from 'hooks/useViewSize';
import { calcRem } from 'theme/theme';

const features = [
  {
    id: 1,
    iconType: 'iglSilica',
    title: '100% Silica',
    content: '100% silica content, 0% solvent creating a thick film build'
  },
  {
    id: 2,
    iconType: 'iGL10H',
    title: 'Extreme Hardness',
    content: 'Crosslinks and full cures to hardness of up to 10H(pencil scale)'
  },
  {
    id: 3,
    iconType: 'iGLWarranty',
    title: 'Warranty',
    content:
      'Backed by an official warranty provided by IGL Coatings and supported by certified IGL Coatings Master Applicator'
  },
  {
    id: 4,
    iconType: 'iGLWater',
    title: 'Super Hydrophobic Quality',
    content:
      'Water contact angle that surpasses 120º and retaining close to this angle for a long period'
  },
  {
    id: 5,
    iconType: 'iGLSoft',
    title: 'Silky Soft Surface',
    content:
      'First coating to provide a texture similar to soft luxurious silk that rivals bespoke wax'
  },
  {
    id: 6,
    iconType: 'iGLSpot',
    title: 'Waterspot Resistance',
    content:
      'Improved formulation to increase the resistance of water spotting on coated vehicles'
  }
];

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  display: ${({ desktop }) => (desktop ? 'grid' : 'block')};
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  .icon-paragraph {
    width: 80%;
    div:last-child {
      height: ${calcRem(190)};
    }
  }

  svg {
    margin-bottom: ${calcRem(34)};
    margin-right: 0;
  }
`;

const FeaturesBenefits = () => {
  const { desktop } = useViewSize();

  return (
    <StyledIconParagraphLayout
      title="Features &amp; Benefits"
      contents={features}
      paragraphWidth={calcRem(304)}
      direction="column"
      desktop={desktop}
      className="benefits"
      textAlign={{ title: 'center', content: 'center' }}
    />
  );
};

export default FeaturesBenefits;
