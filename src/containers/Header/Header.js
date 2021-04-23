import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { calcRem, calcInterval, colors, fontSizes } from 'theme/theme';
import { AnimatePresence } from 'framer-motion';
import Layout from 'pages/Layout/Layout';
import { useViewSize } from 'hooks/';
import Logo from 'components/Logo/Logo';
import SearchForm from 'components/SearchForm/SearchForm';
import Navbar from 'components/Navbar/Navbar';
import Icon from 'components/Icon/Icon';
import NavbarMobile from 'components/NavbarMobile/NavbarMobile';
import Tooltip from 'components/ToolTip/Tooltip';

const HeaderContainer = styled.header`
  background: ${colors.black};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${colors.white};

  .logo {
    min-width: ${calcRem(100)};
  }
  nav {
    flex: 3;
    margin-right: ${calcRem(20)};
  }

  button + button {
    margin-left: ${calcRem(15)};
  }

  svg {
    height: ${calcRem(95)};
  }
  @media only screen and (max-width: 1200px) {
    padding: ${calcInterval([0, 50])};
    a {
      font-size: ${fontSizes.small};
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([0, 25])};

    svg {
      height: ${calcRem(60)};
    }
    .logo {
      min-width: ${calcRem(75)};
    }
    input {
      margin-right: ${calcRem(12)};
      margin-left: ${calcRem(12)};
    }

    .MobileNav {
      position: absolute;
      width: ${calcRem(350)};
      z-index: 10000;
      top: ${calcRem(65)};
      right: ${calcRem(-10)};
    }
  }
`;

const IconContainer = styled(Layout.FlexContainer)`
  flex: 0.7;
  justify-content: flex-end;
  a {
    margin-left: 20%;
  }

  .searchBtn {
    position: relative;
    height: ${calcRem(60)};
    div {
      opacity: 0;
      z-index: -1000;
      transition: 0.3s;
    }
  }
  .searchBtn:hover div {
    opacity: 1;
    z-index: 1000;
  }

  @media only screen and (max-width: 1200px) {
    svg {
      width: ${calcRem(30)};
    }
  }

  @media only screen and (max-width: 768px) {
    flex: 0;
  }
`;

const variants = {
  visible: { y: 0, transition: { duration: 0.4 } },
  hidden: { y: -100 }
};

const iconVariants = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { duration: 0.4 }
  },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const mobileMenuVariants = {
  hidden: {
    x: 300,
    opacity: 0,
    transition: { duration: 0.4 }
  },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: {
    x: 300,
    opacity: 0,

    transition: { duration: 0.2 }
  }
};

const Header = () => {
  const [searchAcitve, searchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { desktop, mobile } = useViewSize();

  const handleSearchActive = () => {
    searchActive(!searchAcitve);
  };

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    if (desktop) {
      searchActive(false);
      setMenuActive(false);
    } else {
      mobile && searchActive(true);
    }
  }, [desktop, mobile]);

  return (
    <HeaderContainer>
      <Layout>
        <Layout.FlexContainer flex={0.95} justifyContent="flex-start">
          <Logo className="logo" maxWidth={185} />
        </Layout.FlexContainer>
        <Layout.FlexContainer tag="nav">
          <AnimatePresence initial={false}>
            {searchAcitve ? (
              <SearchForm
                mobile={mobile}
                onClick={handleSearchActive}
                variants={variants}
                initial="hidden"
                animate="visible"
              />
            ) : (
              <Navbar variants={variants} initial="hidden" animate="visible" />
            )}
          </AnimatePresence>
        </Layout.FlexContainer>
        <IconContainer>
          {mobile ? (
            <Icon
              button
              title="mobile menu"
              type="mobileMenuIcon"
              color={colors.white}
              width={calcRem(40)}
              height={calcRem(30)}
              onClick={handleMenuActive}
            />
          ) : (
            <>
              <Icon
                button
                title="search button"
                className="searchBtn"
                type="searchWhite"
                color={colors.white}
                width={calcRem(25)}
                onClick={handleSearchActive}
                motionProps={{
                  variants: iconVariants,
                  animate: searchAcitve ? 'hidden' : 'visible'
                }}
              >
                <Tooltip top="75px" right="-65px" />
              </Icon>
              <a href="https://www.instagram.com/lvps.ca/?hl=en">
                <Icon
                  type="instagram"
                  title="instagram"
                  color={colors.white}
                  width={calcRem(25)}
                />
              </a>
              <a href="https://m.facebook.com/lvps.ca/">
                <Icon
                  type="facebook"
                  color={colors.white}
                  width={calcRem(25)}
                  title="facebook"
                />
              </a>
            </>
          )}
        </IconContainer>
      </Layout>
      <AnimatePresence initial={false} exitBeforeEnter>
        {menuActive && mobile && (
          <NavbarMobile
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="MobileNav"
            onClick={handleMenuActive}
          />
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
