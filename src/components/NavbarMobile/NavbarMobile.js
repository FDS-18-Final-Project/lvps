import styled, { css } from 'styled-components';
import { calcRem } from 'theme/theme';
import { array } from 'prop-types';
import { NavbarMobileItem } from 'components';

const StyledContainer = styled.ul`
  max-width: 100%;
  margin: 0 ${calcRem(15)};
`;

const NavbarMobile = ({ NavItems }) => {
  return (
    <StyledContainer>
      {NavItems.map(item => {
        return (
          <NavbarMobileItem
            id={item.id}
            value={item.value}
            type={item.type}
            to={item.to}
          ></NavbarMobileItem>
        );
      })}
    </StyledContainer>
  );
};

NavbarMobile.propTypes = {
  NavItems: array.isRequired
};

NavbarMobile.defaultProps = {
  NavItems: [
    {
      id: 'nav_1',
      value: 'HOME',
      type: 'nav',
      to: '/'
    },
    {
      id: 'nav_2',
      value: 'ABOUT',
      type: 'nav',
      to: '/'
    },
    {
      id: 'nav_3',
      value: 'SERVICES',
      type: 'nav',
      to: '/'
    },
    {
      id: 'service_1',
      value: 'Ceramic Coating',
      type: 'service',
      to: '/'
    },
    {
      id: 'coating_1',
      value: 'Ceramic Pro',
      type: 'serviceDetail',
      to: '/'
    },
    {
      id: 'coating_2',
      value: 'IGL Coatings',
      type: 'serviceDetail',
      to: '/'
    },
    {
      id: 'service_2',
      value: 'Paint Protection Film',
      type: 'service',
      to: '/'
    },
    {
      id: 'service_3',
      value: 'Window Tinting',
      type: 'service',
      to: '/'
    },
    {
      id: 'service_4',
      value: 'Detailing & Paint Correction',
      type: 'service',
      to: '/'
    },
    {
      id: 'service_5',
      value: 'Wheel & Tire',
      type: 'service',
      to: '/'
    },
    {
      id: 'nav_4',
      value: 'GET A QUOTE',
      type: 'nav',
      to: '/'
    },
    {
      id: 'nav_5',
      value: 'CONTACT US',
      type: 'nav',
      to: '/'
    }
  ]
};

NavbarMobile.displayName = 'NavbarMobile';
export default NavbarMobile;
