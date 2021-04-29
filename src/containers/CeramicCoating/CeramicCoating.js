import useViewSize from 'hooks/useViewSize';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import { explainCeramic } from 'data/Data';

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  svg {
    margin-right: 0;
    margin-bottom: ${calcRem(35)};
  }
`;

const IconExplanCard = () => {
  const { desktop } = useViewSize();

  return (
    <StyledIconParagraphLayout
      title="Car Care Guide"
      contents={explainCeramic}
      paragraphWidth="100%"
      direction="column"
      desktop={desktop}
    />
  );
};

export default IconExplanCard;
