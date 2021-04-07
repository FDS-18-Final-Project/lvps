import React from 'react';
import { HomeLayout } from '../index';
import A11yHidden from '../../components/A11yHidden/A11yHidden.styled';
import { Button } from 'components';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';

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
          <Paragraph title="ABOUT" type="normal" headingNumber={3}>
            We are Luxury Vehicle Protection <br />
            Services, providing vehicle protection, <br />
            repair, and detailing services based in <br />
            North York, Toronto, Ontario.
          </Paragraph>
          <Paragraph
            title="SERVICES"
            type="list"
            headingNumber={3}
            items={[
              'Ceramic Pro',
              'Paint Protection Film',
              'Window Tinting',
              'Detailing & Paint Correction',
            ]}
            icon
          />
          <Paragraph
            title="Working Hour"
            type="list"
            headingNumber={3}
            items={['Monday – Friday: 8 am – 6 pm', 'Saturday: 8 am – 3 pm']}
          />
          <Paragraph
            title="Customer Reviews"
            type="title"
            headingNumber={1}
            colors={{ main: 'black', sub: 'gray' }}
          >
            Our customers value &amp; trust us with their vehicles.
          </Paragraph>
        </HomeLayout.FormContainer>
      </HomeLayout.Container>
    </HomeLayout>
  );
};

export default Home;
