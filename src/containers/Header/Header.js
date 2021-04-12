import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Logo from 'components/Logo/Logo';
import Icon from 'components/Icon/Icon';
import SearchForm from 'components/SearchForm/SearchForm';
import { AnimatePresence } from 'framer-motion';
import Layout from 'pages/Layout/Layout';
import { calcRem, calcInterval, colors } from 'theme/theme';

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
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Layout>
      <Layout.FlexContainer flex={1}>
        <Logo maxWidth={237} />
      </Layout.FlexContainer>
      <Layout.FlexContainer tag="nav" flex={2}>
        <AnimatePresence initial={false}>
          {isShow ? (
            <SearchForm
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
      <Layout.FlexContainer flex={1}>
        <Icon
          type="searchWhite"
          color={colors.white}
          width={calcRem(30)}
          onClick={handleClick}
          motionProps={{
            variants: iconVariants,
            animate: isShow ? 'hidden' : 'visible'
          }}
        />
        <Icon
          type="instagram"
          color={colors.white}
          width={calcRem(30)}
          style={{ margin: calcInterval([0, 50]) }}
        />
        <Icon type="facebook" color={colors.white} width={calcRem(30)} />
      </Layout.FlexContainer>
    </Layout>
  );
};

export default Header;
