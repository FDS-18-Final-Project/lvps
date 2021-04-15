import { array, string } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import { Icon, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';

const StyledIconExplanList = styled(Layout.FlexContainer)`
  text-align: ${({ sort }) => (sort === 'row' ? 'left' : 'center')};
`;

const StyledIcon = styled(Icon)`
  margin-bottom: ${calcRem(40)};
  margin-right: ${({ sort }) => (sort === 'row' ? calcRem(40) : '0')};
  path:first-child {
    stroke: ${({ iconColor }) => iconColor};
  }
  path:last-child {
    fill: ${({ iconColor }) => iconColor};
  }
`;

const StyledParagraph = styled(Paragraph)`
  width: ${calcRem(304)};
  h3 {
    margin-bottom: ${calcRem(20)};
  }
`;

const IconParagraph = ({ sort, content, iconColor }) => {
  return (
    <StyledIconExplanList
      tag="article"
      direction={sort}
      key={content.id}
      sort={sort}
    >
      <StyledIcon type="likeCircle" iconColor={iconColor} sort={sort} />
      <StyledParagraph title={content.title} headingNum={3} size={18}>
        {content.content}
      </StyledParagraph>
    </StyledIconExplanList>
  );
};

IconParagraph.propTypes = {
  sort: string,
  content: array,
  iconColor: string
};

IconParagraph.defaultProps = {
  sort: 'column',
  content: [
    { id: 1, title: '타이틀을 입력해주세요!' },
    { id: 2, title: '타이틀을 입력해주세요!' },
    { id: 3, title: '타이틀을 입력해주세요!' }
  ],
  iconColor: colors.red_05
};

StyledIconExplanList.displayName = 'StyledIconExplanList';
StyledIcon.displayName = 'StyledIcon';
StyledParagraph.displayName = 'StyledParagraph';

export default IconParagraph;
