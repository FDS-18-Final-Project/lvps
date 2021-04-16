import { string, object } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import { Icon, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';

const StyledIconExplanList = styled(Layout.FlexContainer)`
  width: ${({ contentWidth }) => contentWidth};

  @media only screen and (max-width: 768px) {
    margin-bottom: ${calcRem(50)};
  }
`;

const StyledIcon = styled(Icon)`
  margin-bottom: ${calcRem(40)};
  margin-right: ${({ direction }) => (direction === 'row' ? calcRem(40) : '0')};

  path:first-child {
    stroke: ${({ iconColor }) => iconColor};
  }
  path:last-child {
    fill: ${({ iconColor }) => iconColor};
  }
`;

const StyledParagraph = styled(Paragraph)`
  width: ${({ paragraphWidth }) => paragraphWidth};
  h3 {
    margin-bottom: ${calcRem(20)};
    text-align: ${({ textAlign }) => textAlign.title};
  }
  p {
    text-align: ${({ textAlign }) => textAlign.content};
  }
`;

const IconParagraph = ({
  direction,
  content,
  iconType,
  iconColor,
  textAlign,
  contentWidth,
  paragraphWidth
}) => {
  return (
    <StyledIconExplanList
      direction={direction}
      key={content.id}
      textAlign={textAlign}
      contentWidth={contentWidth}
    >
      <StyledIcon type={iconType} iconColor={iconColor} direction={direction} />
      <StyledParagraph
        title={content.title}
        headingNum={3}
        size={18}
        paragraphWidth={paragraphWidth}
        textAlign={textAlign}
      >
        {content.content}
      </StyledParagraph>
    </StyledIconExplanList>
  );
};

IconParagraph.propTypes = {
  direction: string,
  content: object,
  iconType: string,
  iconColor: string,
  textAlign: object,
  contentWidth: string,
  paragraphWidth: string
};

IconParagraph.defaultProps = {
  direction: 'column',
  content: { id: 1, title: '타이틀을 입력해주세요!' },
  iconType: 'facebook',
  iconColor: colors.red_05,
  textAlign: { title: 'center', content: 'left' },
  contentWidth: '100%',
  paragraphWidth: calcRem(304)
};

StyledIconExplanList.displayName = 'StyledIconExplanList';
StyledIcon.displayName = 'StyledIcon';
StyledParagraph.displayName = 'StyledParagraph';

export default IconParagraph;
