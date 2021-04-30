import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import { array } from 'prop-types';
import NavbarMobileItem from 'components/NavbarMobileItem/NavbarMobileItem';
import { motion } from 'framer-motion';

const StyledContainer = styled(motion.ul)`
  max-width: 100%;
  margin: 0 ${calcRem(15)};
`;

const NavbarMobile = ({ NavItems, onClick, ...restProps }) => {
  return (
    <StyledContainer {...restProps}>
      {NavItems.map((item, i) => (
        <NavbarMobileItem
          key={i}
          onClick={onClick}
          idx={i}
          id={item.id}
          value={item.value}
          type={item.type}
          to={item.to}
        ></NavbarMobileItem>
      ))}
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
      to: '/about-us'
    },
    {
      id: 'nav_3',
      value: 'SERVICES',
      type: 'nav',
      to: '/main-service'
    },
    {
      id: 'service_1',
      value: 'Ceramic Coating',
      type: 'service',
      to: '/ceramic-coating'
    },
    {
      id: 'coating_2',
      value: 'IGL Coatings',
      type: 'serviceDetail',
      to: '/igl-coatings'
    },
    {
      id: 'service_2',
      value: 'Paint Protection Film',
      type: 'service',
      to: '/paint-protection'
    },
    {
      id: 'service_3',
      value: 'Window Tinting',
      type: 'service',
      to: '/window-tinting'
    },
    {
      id: 'service_4',
      value: 'Detailing & Paint Correction',
      type: 'service',
      to: '/detailing-and-correction'
    },
    {
      id: 'service_5',
      value: 'Wheels & Tires',
      type: 'service',
      to: '/wheel-and-tire'
    },
    {
      id: 'nav_4',
      value: 'GET A QUOTE',
      type: 'nav',
      to: '/get-a-quote'
    },
    {
      id: 'nav_5',
      value: 'FAQ',
      type: 'nav',
      to: '/faq'
    },
    {
      id: 'nav_6',
      value: 'CONTACT US',
      type: 'nav',
      to: '/contact-us'
    }
  ]
};

NavbarMobile.displayName = 'NavbarMobile';
export default NavbarMobile;
