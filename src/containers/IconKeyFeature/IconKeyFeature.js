import useViewSize from 'hooks/useViewSize';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled, { css } from 'styled-components';
import { calcInterval, calcRem } from 'theme/theme';
import { PPFXpelFeatures } from 'data/Data';

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
      contents={PPFXpelFeatures}
      paragraphWidth="100%"
      direction={desktop ? 'row' : 'column'}
      desktop={desktop ? 1 : 0}
    />
  );
};

export default IconKeyFeature;
