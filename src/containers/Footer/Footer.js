import styled from 'styled-components';
import { colors, calcInterval } from 'theme/theme';
import { Logo, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';

const StyledFooterContainer = styled(Layout.FlexContainer)`
  background-color: ${colors.black};
  padding: ${calcInterval([95, 100])};

  a:hover {
    text-decoration: underline;
  }
`;

const StyledFooterContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: ${calcInterval([85, 200])};
`;

const Footer = ({ children }) => {
  return (
    <StyledFooterContainer tag="footer" justifyContent="space-around">
      {children}
    </StyledFooterContainer>
  );
};

Footer.Logo = () => {
  return <Logo tag="h2" />;
};

Footer.Content = () => {
  const { white, lightGray } = colors;
  return (
    <StyledFooterContent>
      <Paragraph
        title="ABOUT"
        type="normal"
        headingNumber={3}
        colors={{ main: white, sub: white }}
        size="12"
      >
        We are Luxury Vehicle Protection Services, <br />
        providing vehicle protection, repair, and <br />
        detailing services based in North York, <br />
        Toronto, Ontario.
      </Paragraph>

      <Paragraph
        title="SERVICES"
        type="list"
        link
        to="/"
        headingNumber={3}
        colors={{ main: white, sub: white }}
        items={[
          'Ceramic Pro',
          'Paint Protection Film',
          'Window Tinting',
          'Detailing & Paint Correction',
          'Wheel & Tire'
        ]}
        icon="map"
        iconColor={colors.white}
        size="12"
      />

      <Paragraph
        title="Working Hour"
        type="list"
        headingNumber={3}
        items={['Monday – Friday: 8 am – 6 pm', 'Saturday: 8 am – 3 pm']}
        colors={{ main: white, sub: white }}
        size="12"
      />

      <Paragraph
        type="list"
        colors={{ main: white, sub: lightGray }}
        items={[
          '9 Vanley Cres, North York, ON M3J 2B7',
          '(647) 703 5857',
          'info@lvps.ca'
        ]}
        icon="map"
        size="12"
      />
    </StyledFooterContent>
  );
};

StyledFooterContent.displayName = 'StyledFooterContent';
Footer.Logo.displayName = 'Footer-Logo';
Footer.Content.displayName = 'Footer-Content';

export default Footer;
