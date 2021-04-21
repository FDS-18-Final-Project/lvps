import { string, object } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, device } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledIconExplanList = styled(Layout.FlexContainer)`
  width: ${({ contentWidth }) => calcRem(contentWidth)};

  ${device.tablet} {
    margin-bottom: ${calcRem(50)};
  }
`;

const StyledIcon = styled(Icon)`
  margin-bottom: ${calcRem(40)};
  margin-right: ${({ direction }) => (direction === 'row' ? calcRem(40) : '0')};

  path:first-child {
    stroke: ${({ iconcolor }) => iconcolor};
  }
  path:last-child {
    fill: ${({ iconcolor }) => iconcolor};
  }
`;

const StyledParagraph = styled(Paragraph)`
  max-width: ${({ paragraphWidth }) => paragraphWidth};
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
  iconcolor,
  textAlign,
  contentWidth,
  paragraphWidth,
  ...restProps
}) => {
  return (
    <StyledIconExplanList
      direction={direction}
      key={content.id}
      textAlign={textAlign}
      contentWidth={contentWidth}
      {...restProps}
    >
      <StyledIcon type={iconType} iconcolor={iconcolor} direction={direction} />
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
  iconcolor: string,
  textAlign: object,
  contentWidth: string,
  paragraphWidth: string
};

IconParagraph.defaultProps = {
  direction: 'column',
  content: { id: 1, title: '타이틀을 입력해주세요!' },
  iconType: 'facebook',
  iconcolor: '',
  textAlign: { title: 'center', content: 'left' },
  contentWidth: '100%',
  paragraphWidth: '100%'
};

StyledIconExplanList.displayName = 'StyledIconExplanList';
StyledIcon.displayName = 'StyledIcon';
StyledParagraph.displayName = 'StyledParagraph';

export default IconParagraph;
