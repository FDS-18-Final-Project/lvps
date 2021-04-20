import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';
import { string } from 'prop-types';
import Button from 'components/Button/Button';

const StyledText = styled.p`
  margin-left: ${({ type }) => {
    return type === 'nav'
      ? calcRem(25)
      : type === 'service'
      ? calcRem(50)
      : calcRem(75);
  }};
`;

const StyledButton = styled(Button)`
  background-color: ${colors.lightGray};
  border: none;
  width: 100%;
  color: ${colors.black};
  font-size: ${fontSizes.lg};
  justify-content: left;
  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.black};
    border: none;
  }
`;

const StyledButtonContainer = styled.li`
  border-bottom: ${calcRem(1)} solid transparent;
  display: flex;
`;
const NavbarMobileItem = ({ value, type, to }) => {
  return (
    <StyledButtonContainer>
      <StyledButton mode="link" to={to}>
        <StyledText type={type}>{value}</StyledText>
      </StyledButton>
    </StyledButtonContainer>
  );
};

NavbarMobileItem.propTypes = {
  value: string,
  type: string,
  to: string
};

NavbarMobileItem.defaultProps = {
  value: 'HOME',
  type: 'nav',
  to: '/'
};

NavbarMobileItem.displayName = 'NavbarMobileItem';
export default NavbarMobileItem;
