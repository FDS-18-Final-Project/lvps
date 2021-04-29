import { useViewSize } from 'hooks';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled, { css } from 'styled-components';
import { calcRem } from 'theme/theme';
import { PPFStealthFeatures } from 'data/Data';

const styledDesktop = css`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(2, 1fr);

  .icon-paragraph {
    width: 100%;
  }
  .icon-paragraph:nth-child(1) {
    grid-area: 1 / 1 / 3 / 2;
  }
  .icon-paragraph:nth-child(2) {
    grid-area: 3 / 1 / 5 / 2;
  }
  .icon-paragraph:nth-child(3) {
    grid-area: 5 / 1 / 7 / 2;
  }
  .icon-paragraph:nth-child(4) {
    grid-area: 2 / 2 / 4 / 3;
  }
  .icon-paragraph:nth-child(5) {
    grid-area: 4 / 2 / 6 / 3;
  }
`;
const styledMobile = css`
  svg {
    margin-right: 0;
    margin-bottom: ${calcRem(35)};
  }
`;

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  ${({ desktop }) => (desktop ? styledDesktop : styledMobile)}
`;

const StealthSignature = () => {
  const { desktop } = useViewSize();
  return (
    <StyledIconParagraphLayout
      title="STEALTH ™ SIGNATURE FEATURES"
      contents={PPFStealthFeatures}
      className="stealths"
      desktop={desktop}
      direction="row"
    />
  );
};

export default StealthSignature;
