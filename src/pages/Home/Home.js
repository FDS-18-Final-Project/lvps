import React from 'react';
import { HomeLayout } from '../index';
import A11yHidden from '../../components/A11yHidden/A11yHidden.styled';

const Home = () => {
  return (
    <HomeLayout>
      <A11yHidden as='h2'>Main Page</A11yHidden>
      <HomeLayout.Container>
        <HomeLayout.FormHeader>Get a Quote</HomeLayout.FormHeader>
        <HomeLayout.FormBody></HomeLayout.FormBody>
      </HomeLayout.Container>
    </HomeLayout>
  );
};

export default Home;
