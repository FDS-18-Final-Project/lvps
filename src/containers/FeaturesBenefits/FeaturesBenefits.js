import styled from 'styled-components';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import useViewSize from 'hooks/useViewSize';
import { calcRem } from 'theme/theme';
import { iGLFeatures } from 'data/Data';

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
      contents={iGLFeatures}
      paragraphWidth={calcRem(304)}
      direction="column"
      desktop={desktop}
      className="benefits"
      textAlign={{ title: 'center', content: 'center' }}
    />
  );
};

export default FeaturesBenefits;
