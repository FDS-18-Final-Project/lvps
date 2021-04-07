import React from 'react';
import { HomeLayout } from '../index';
import A11yHidden from '../../components/A11yHidden/A11yHidden.styled';
import { Button } from 'components';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';
import Footer from 'containers/Footer/Footer';

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

          <Paragraph
            title="Customer Reviews"
            type="title"
            headingNumber={1}
            colors={{ main: 'black', sub: 'gray' }}
          >
            Our customers value &amp; trust us with their vehicles.
          </Paragraph>

          <Footer>
            <Footer.Logo />
            <Footer.Content />
          </Footer>
        </HomeLayout.FormContainer>
      </HomeLayout.Container>
    </HomeLayout>
  );
};

export default Home;
