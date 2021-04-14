import React, { useEffect, useState } from 'react';
import { calcRem, calcInterval, colors } from 'theme/theme';
import styled from 'styled-components';
import Navbar from 'components/Navbar/Navbar';
import Logo from 'components/Logo/Logo';
import Icon from 'components/Icon/Icon';
import SearchForm from 'components/SearchForm/SearchForm';
import { AnimatePresence } from 'framer-motion';
import Layout from 'pages/Layout/Layout';
import useViewSize from 'hooks/useViewSize';

const HeaderContainer = styled.header`
  background: ${colors.black};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${colors.white};
  svg {
    margin-right: 0;
  }

  @media only screen and (max-width: 870px) {
    padding: 15px 25px;

    .iconContainer {
      flex: 0;
      margin-left: 20px;
    }
  }
`;

const variants = {
  visible: { y: 0, transition: { duration: 0.4 } },
  hidden: { y: -100 },
  exit: { y: -100, opacity: 0, transition: { duration: 0.4 } }
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
        <Layout.FlexContainer flex={1}>
          <Logo maxWidth={185} />
        </Layout.FlexContainer>
        <Layout.FlexContainer tag="nav" flex={2}>
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
        <Layout.FlexContainer className="iconContainer" flex={1}>
          {mobile ? (
            <Icon
              type="mobileMenuIcon"
              to="/home"
              color={colors.white}
              width={calcRem(25)}
              link
            />
          ) : (
            <>
              <Icon
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
                style={{ margin: calcInterval([0, 50]) }}
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
        </Layout.FlexContainer>
      </Layout>
    </HeaderContainer>
  );
};

export default Header;
