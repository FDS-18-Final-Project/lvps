import useViewSize from 'hooks/useViewSize';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import { explaniGL } from 'data/Data';

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
      title="Car Care Guide"
      contents={explaniGL}
      paragraphWidth="100%"
      direction="column"
      desktop={desktop}
      textAlign={{ title: 'center', content: 'center' }}
    />
  );
};

export default CarCareGuide;
