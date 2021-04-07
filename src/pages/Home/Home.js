import React from 'react';
import { HomeLayout } from '../index';
import A11yHidden from '../../components/A11yHidden/A11yHidden.styled';
import { Button } from 'components';
import Icon from 'components/Icon/Icon';

const Home = () => {
  return (
    <HomeLayout>
      <A11yHidden>Main Page</A11yHidden>
      <HomeLayout.Container>
        <HomeLayout.FormContainer>
          <Button />
          <Icon type="more" color="red" width="20" />
          <Icon type="instagram" color="red" width="32" />
          <Icon type="facebook" color="red" width="133" />
          <Icon />
        </HomeLayout.FormContainer>
      </HomeLayout.Container>
    </HomeLayout>
  );
};

export default Home;
