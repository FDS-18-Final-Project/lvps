import Icon from 'components/Icon/Icon';
import { colors, calcRem } from 'theme/theme';
import styled from 'styled-components';
import { string } from 'prop-types';

const TagBlock = styled.div`
  display: inline-block;
  width: ${calcRem(115)};
  div {
    position: relative;
    margin: 0;
  }
  svg {
    margin: 0;
  }
`;

const TagText = styled.span`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: ${({ type }) => (type === 'tagWhite' ? colors.red_05 : colors.white)};
  font-size: ${calcRem(15)};
  font-weight: 700;
`;

const Tag = ({ type, children, ...restProps }) => {
  console.log(type);
  return (
    <TagBlock>
      <Icon type={type} {...restProps}>
        <TagText type={type} {...restProps}>
          {children}
        </TagText>
      </Icon>
    </TagBlock>
  );
};

Tag.propTypes = {
  type: string,
  color: string
};

Tag.defaultProps = {
  type: 'tagGold',
  color: colors.white
};

export default Tag;
