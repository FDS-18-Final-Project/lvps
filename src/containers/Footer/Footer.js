import styled from 'styled-components';
import { colors, calcInterval, calcRem } from 'theme/theme';
import { Logo, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';

const StyledFooterContainer = styled.div`
  background-color: ${colors.black};
  padding: ${calcInterval([95, 100])};

  @media only screen and (max-width: 1200px) {
    padding: ${calcRem(50)};
  }
`;

const FullContainer = styled(Layout.FlexContainer)`
  max-width: 1200px;
  margin: 0 auto;
  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    flex-flow: column;

    h2 {
      margin-bottom: ${calcRem(40)};
    }
    h3 {
      font-size: 13px;
    }
    span,
    p {
      font-size: 12px;
    }
  }
`;

const StyledFooterContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: ${calcInterval([36, 144])};

  @media only screen and (max-width: 1200px) {
    gap: ${calcInterval([36, 80])};
  }

  @media only screen and (max-width: 768px) {
    gap: ${calcInterval([36, 40])};
  }

  span,
  p {
    width: 100%;
  }
`;

const StyledParagraph = styled(Paragraph)`
  /* width: ${calcRem(240)}; */
`;

const Footer = ({ children }) => {
  return (
    <StyledFooterContainer>
      <FullContainer tag="footer" justifyContent="space-around">
        {children}
      </FullContainer>
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
      <StyledParagraph
        title="ABOUT"
        type="normal"
        headingNum={3}
        colors={{ main: white, sub: white }}
        size={12}
      >
        We are Luxury Vehicle Protection Services, providing vehicle protection,
        repair, and detailing services based in North York, Toronto, Ontario.
      </StyledParagraph>

      <Paragraph
        title="SERVICES"
        type="list"
        link
        to="/"
        headingNum={3}
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
        size={12}
      />

      <Paragraph
        title="Working Hour"
        type="list"
        headingNum={3}
        items={['Monday – Friday: 8 am – 6 pm', 'Saturday: 8 am – 3 pm']}
        colors={{ main: white, sub: white }}
        size={12}
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
        size={12}
      />
    </StyledFooterContent>
  );
};

StyledFooterContent.displayName = 'StyledFooterContent';
FullContainer.displayName = 'FullContainer';
Footer.Logo.displayName = 'Footer-Logo';
Footer.Content.displayName = 'Footer-Content';
StyledParagraph.displayName = 'StyledParagraph';

export default Footer;
