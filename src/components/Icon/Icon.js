import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import { ReactComponent as RightArrow } from 'assets/rightArrow.svg';
import { ReactComponent as Map } from 'assets/map.svg';
import { ReactComponent as CheckedCar } from 'assets/checkedCar.svg';
import { ReactComponent as ClickHand } from 'assets/clickHand.svg';
import { ReactComponent as Close } from 'assets/close.svg';
import { ReactComponent as SearchWhite } from 'assets/search-white.svg';
import { ReactComponent as SearchGray } from 'assets/search-gray.svg';

const IconWrapper = styled.div`
  // TODO: rem으로 변경
  margin-bottom: 10px;
  svg {
    // TODO: rem으로 변경
    margin-right: 5px;
  }
  path {
    fill: ${props => props.color};
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
    case 'checkedCar':
      Comp = CheckedCar;
      break;
    case 'clickHand':
      Comp = ClickHand;
      break;
    case 'close':
      Comp = Close;
      break;
    case 'searchWhite':
      Comp = SearchWhite;
      break;
    case 'searchGray':
      Comp = SearchGray;
      break;
    default:
      throw new Error('타입을 입력하지 않으셨거나 잘못 입력하신것 같아요!');
  }

  return (
    <IconWrapper color={color} className='icon-wrapper'>
      <Comp title={type} {...restProps} />
      {children}
    </IconWrapper>
  );
};

Icon.defaultProps = {
  type: 'rightArrow',
  color: 'red'
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string
};

IconWrapper.displayName = 'IconWrapper';

export default Icon;
