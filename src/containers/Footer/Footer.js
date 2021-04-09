import Logo from 'components/Logo/Logo';
import Paragraph from 'components/Paragraph/Paragraph';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

const { colors, calcRem, calcInterval } = theme;

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.black};
  padding: ${calcInterval([186, 230, 188, 200])};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, ${calcRem(190)});
  grid-template-columns: repeat(2, ${calcRem(460)});
  gap: ${calcInterval([112, 60])};
`;

const Footer = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FooterWrapper>{children}</FooterWrapper>
    </ThemeProvider>
  );
};

Footer.Logo = () => {
  return <Logo maxWidth={790} />;
};

Footer.Content = () => {
  const { white, lightGray } = theme.colors;
  return (
    <FooterContent>
      <Paragraph
        title="ABOUT"
        type="normal"
        headingNumber={3}
        colors={{ main: white, sub: white }}
        size="20"
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
        colors={{ main: white, sub: white }}
        items={[
          'Ceramic Pro',
          'Paint Protection Film',
          'Window Tinting',
          'Detailing & Paint Correction',
        ]}
        icon="facebook"
        size="20"
      />

      <Paragraph
        title="Working Hour"
        type="list"
        headingNumber={3}
        items={['Monday – Friday: 8 am – 6 pm', 'Saturday: 8 am – 3 pm']}
        colors={{ main: white, sub: white }}
        size="20"
      />

      <Paragraph
        type="list"
        colors={{ main: white, sub: lightGray }}
        items={[
          'map 9 Vanley Cres, North York, ON M3J 2B7',
          '(647) 703 5857',
          'info@lvps.ca',
        ]}
        icon="map"
        size="20"
      />
    </FooterContent>
  );
};

FooterContent.displayName = 'Footer';
Footer.Logo.displayName = 'Footer-Logo';
Footer.Content.displayName = 'Footer-Content';

export default Footer;
