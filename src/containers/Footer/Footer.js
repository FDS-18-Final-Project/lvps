import Paragraph from 'components/Paragraph/Paragraph';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  // TODO: theme 색으로 변경
  background-color: black;
  // TODO: rem으로 변경
  padding: 100px 50px 10px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 200px);
  grid-template-columns: repeat(2, 350px);
`;

const Footer = ({ children }) => {
  return <FooterWrapper>{children}</FooterWrapper>;
};

Footer.Logo = () => {
  return <div style={{ background: 'white' }}>로고</div>;
};

Footer.Content = () => {
  return (
    <FooterContent>
      <Paragraph
        title="ABOUT"
        type="normal"
        headingNumber={3}
        colors={{ main: 'white', sub: 'gray' }}
      >
        We are Luxury Vehicle Protection <br />
        Services, providing vehicle protection, <br />
        repair, and detailing services based in <br />
        North York, Toronto, Ontario.
      </Paragraph>

      <Paragraph
        title="SERVICES"
        type="list"
        headingNumber={3}
        colors={{ main: 'white', sub: 'gray' }}
        items={[
          'Ceramic Pro',
          'Paint Protection Film',
          'Window Tinting',
          'Detailing & Paint Correction',
        ]}
        icon="facebook"
      />

      <Paragraph
        title="Working Hour"
        type="list"
        headingNumber={3}
        items={['Monday – Friday: 8 am – 6 pm', 'Saturday: 8 am – 3 pm']}
        colors={{ main: 'white', sub: 'gray' }}
      />

      <Paragraph
        type="list"
        colors={{ main: 'white', sub: 'white' }}
        items={[
          'map 9 Vanley Cres, North York, ON M3J 2B7',
          '(647) 703 5857',
          'info@lvps.ca',
        ]}
        icon="map"
      />
    </FooterContent>
  );
};

export default Footer;
