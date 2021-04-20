import styled from 'styled-components';
import { object } from 'prop-types';
import { colors, calcRem, fontSizes } from 'theme/theme';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

const StyledButton = styled(Button)`
  display: flex;
  width: auto;
  border: none;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: ${calcRem(18)} ${calcRem(37)} ${calcRem(18)} ${calcRem(30)};
  font-size: ${fontSizes.lg};
  & p {
    flex-grow: 1;
  }
  & div {
    width: ${calcRem(8)};
    opacity: 0;
  }
  &:hover {
    background-color: ${colors.black};
    border: none;
    color: ${colors.redMain};
    & div {
      opacity: 1;
    }
  }
`;

const StyledButtonContainer = styled.li`
  max-width: ${calcRem(348)};
  border-bottom: ${calcRem(1)} solid transparent;
  :hover {
    ul {
      display: block;
    }
  }
`;

const HoverItem = ({ value, to, children }) => {
  return (
    <StyledButtonContainer>
      <StyledButton mode="link" to={to}>
        <p>{value}</p>
        <Icon type="rightArrow" color="white" />
      </StyledButton>
      {children}
    </StyledButtonContainer>
  );
};

HoverItem.propTypes = {
  item: object.isRequired
};

HoverItem.defaultProps = {
  item: {
    id: 1,
    title: 'Ceramic Pro',
    to: '/'
  }
};

HoverItem.displayName = 'HoverItem';

export default HoverItem;
