import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import { ReactComponent as More } from 'assets/more.svg';

const IconWrapper = styled.div`
  path {
    fill: ${(props) => props.color};
  }
`;

const Icon = ({ type, color, children, ...restProps }) => {
  let Comp = type;

  switch (type) {
    case 'facebook':
      Comp = Facebook;
      break;
    case 'instagram':
      Comp = Instagram;
      break;
    case 'more':
      Comp = More;
      break;
    default:
      throw new Error('타입을 입력해주세요!');
  }

  return (
    <IconWrapper color={color} className="icon-wrapper">
      <Comp title={type} {...restProps} />
      {children}
    </IconWrapper>
  );
};

IconWrapper.displayName = 'IconWrapper';

Icon.defaultProps = {
  type: 'facebook',
  color: 'red',
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;
