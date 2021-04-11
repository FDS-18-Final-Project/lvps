import React from 'react';
import { HomeLayout } from '../index';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import { GetAQuoteBanner, Review } from 'containers';

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
          <Review>
            <Review.Title />
            <Review.Contents />
          </Review>
        </HomeLayout.FormContainer>
      </HomeLayout.Container>
    </HomeLayout>
  );

export default Home;
