import React from 'react';
import { HomeLayout } from '../index';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import { GetAQuoteBanner } from 'containers';

const Home = () => {
  return (
    <HomeLayout>
      <A11yHidden>Main Page</A11yHidden>
      <HomeLayout.Container>
        <HomeLayout.FormContainer>
          <GetAQuoteBanner>
            <GetAQuoteBanner.Title />
            <GetAQuoteBanner.Link />
          </GetAQuoteBanner>
        </HomeLayout.FormContainer>
      </HomeLayout.Container>
    </HomeLayout>
  );
};

export default Home;
