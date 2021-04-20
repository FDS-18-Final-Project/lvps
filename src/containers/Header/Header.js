import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { calcRem, calcInterval, colors, fontSizes } from 'theme/theme';
import { Navbar, Logo, Icon, SearchForm } from 'components';

import { AnimatePresence } from 'framer-motion';
import Layout from 'pages/Layout/Layout';
import useViewSize from 'hooks/useViewSize';

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

  @media only screen and (max-width: 1200px) {
    padding: ${calcInterval([0, 50])};
    a {
      font-size: ${fontSizes.small};
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([15, 25])};

    input {
      margin-right: ${calcRem(12)};
    }
  }
`;

const IconContainer = styled(Layout.FlexContainer)`
  flex: 0.7;
  justify-content: flex-end;
  div {
    margin-left: 20%;
  }

  @media only screen and (max-width: 1200px) {
    svg {
      width: ${calcRem(18)};
    }
  }
  @media only screen and (max-width: 768px) {
    flex: 0;

    svg {
      width: 25px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex: 0;

    svg {
      width: 18px;
    }
  }
`;

const variants = {
  visible: { y: 0, transition: { duration: 0.4 } },
  hidden: { y: -100 }
  //exit: { y: -100, opacity: 0, transition: { duration: 0.4 } }
};

const iconVariants = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { duration: 0.4 }
  },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { desktop, mobile } = useViewSize();

  const handleClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    mobile && setIsShow(true);
    desktop && setIsShow(false);
  }, [desktop, mobile]);

  return (
    <HeaderContainer>
      <Layout>
        <Layout.FlexContainer flex={0.95} justifyContent="flex-start">
          <Logo className="logo" maxWidth={185} />
        </Layout.FlexContainer>
        <Layout.FlexContainer tag="nav">
          <AnimatePresence initial={false}>
            {isShow ? (
              <SearchForm
                mobile={mobile}
                onClick={handleClick}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            ) : (
              <Navbar
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            )}
          </AnimatePresence>
        </Layout.FlexContainer>
        <IconContainer>
          {mobile ? (
            <Icon
              button
              type="mobileMenuIcon"
              color={colors.white}
              width={calcRem(40)}
              height={calcRem(30)}
            />
          ) : (
            <>
              <Icon
                button
                type="searchWhite"
                color={colors.white}
                width={calcRem(25)}
                onClick={handleClick}
                motionProps={{
                  variants: iconVariants,
                  animate: isShow ? 'hidden' : 'visible'
                }}
              />
              <Icon
                to="/"
                type="instagram"
                color={colors.white}
                width={calcRem(25)}
                link
              />
              <Icon
                type="facebook"
                to="/home"
                color={colors.white}
                width={calcRem(25)}
                link
              />
            </>
          )}
        </IconContainer>
      </Layout>
    </HeaderContainer>
  );
};

export default Header;
