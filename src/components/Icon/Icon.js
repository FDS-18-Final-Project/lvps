import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import { ReactComponent as RightArrow } from 'assets/rightArrow.svg';
import { ReactComponent as Map } from 'assets/map.svg';

const IconWrapper = styled.div`
  // TODO: rem으로 변경
  margin-bottom: 10px;
  svg {
    // TODO: rem으로 변경
    margin-right: 5px;
  }
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
    case 'rightArrow':
      Comp = RightArrow;
      break;
    case 'map':
      Comp = Map;
      break;
    default:
      throw new Error('타입을 입력하지 않으셨거나 잘못 입력하신것 같아요!');
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
  color: 'red',
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;
