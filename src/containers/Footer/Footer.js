import styled from 'styled-components';
import { colors, calcInterval, calcRem, fontSizes, device } from 'theme/theme';
import Paragraph from 'components/Paragraph/Paragraph';
import Logo from 'components/Logo/Logo';
import Icon from 'components/Icon/Icon';

const StyledFooterContainer = styled.footer`
  background-color: ${colors.black};
  padding: ${calcInterval([65, 0, 35])};
`;

const StyledFooterContent = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: ${calcInterval([30, 100])};
  margin: 0 auto;
  align-items: start;

  div:nth-child(4) {
    grid-area: 2 / 2 / 3 / 3;
  }

  div:nth-child(5) {
    grid-area: 2 / 3 / 3 / 4;
  }

  a:hover {
    text-decoration: underline;
  }

  p,
  li {
    font-size: ${fontSizes.small};
  }

  span {
    max-width: 200px;
  }

  p {
    max-width: ${calcRem(300)};
  }
  .list-content {
    margin: 0;
  }

  svg {
    margin-right: ${calcRem(10)};
  }
  .white-text {
    color: ${colors.white};
  }
  ${device.desktop} {
    gap: ${calcInterval([36, 80])};
    padding-left: ${calcRem(50)};
    gap: ${calcInterval([30, 0])};
  }

  ${device.tablet} {
    padding: ${calcInterval([50, 20, 0])};
    grid-template-columns: repeat(2, 1fr);
    position: relative;

    div:nth-child(4) {
      grid-area: 2 / 1 / 3 / 2;
    }

    div:nth-child(5) {
      grid-area: 2 / 2 / 3 / 3;
    }

    & > h2 {
      position: absolute;
      top: -7%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    h3 {
      font-size: ${fontSizes.small};
    }

    span,
    p,
    li {
      width: 100%;
      font-size: ${calcRem(12)};
    }
  }
`;

const linkLists = [
  {
    id: 1,
    keyword: 'Ceramic Coating',
    link: '/ceramic-coating',
    icon: 'footerCeramicPro'
  },
  {
    id: 2,
    keyword: 'Paint Protection Film',
    link: '/paint-protection',
    icon: 'footerDetailingCorrection'
  },
  {
    id: 3,
    keyword: 'Window Tinting',
    link: '/window-tinting',
    icon: 'footerWindowTinting'
  },
  {
    id: 4,
    keyword: 'Detailing & Painting Correction',
    link: '/detailing-and-correction',
    icon: 'footerDetailingCorrection'
  },
  {
    id: 5,
    keyword: 'Wheels & Tires',
    link: '/wheel-and-tire',
    icon: 'footerWheelTire'
  }
];

const Footer = () => {
  const { white, lightGray } = colors;
  return (
    <StyledFooterContainer>
      <StyledFooterContent>
        <Logo tag="h2" />
        <Paragraph
          title="ABOUT"
          type="normal"
          headingNum={3}
          colors={{ main: white, sub: white }}
          size={12}
        >
          Luxury Vehicle Protection Services is your ultimate one-stop-shop for
          auto care where you will receive the best quality of services and
          products.
        </Paragraph>

        <div>
          {linkLists.map((linkList, idx) => (
            <Paragraph
              key={linkList.id}
              title={!idx ? 'SERVICES' : ''}
              type="list"
              link
              to={linkList.link}
              headingNum={3}
              colors={{ main: white, sub: white }}
              items={[linkList.keyword]}
              icon={[linkList.icon]}
              iconcolor={colors.white}
              size={12}
            />
          ))}
        </div>

        <Paragraph
          title="Working Hours"
          type="list"
          headingNum={3}
          items={[
            'Mondays - Fridays: 8 am – 6 pm',
            'Saturdays: 8 am – 3 pm',
            'Sundays: Closed',
            'Due to COVID-19, by appointment only.'
          ]}
          colors={{ main: white, sub: white }}
          size={12}
        />

        <Paragraph
          type="list"
          colors={{ main: white, sub: lightGray }}
          items={[
            <Icon type="footerLocationOnBlack">
              <span className="white-text">
                9 Vanley Cres, North York, ON M3J 2B7
              </span>
            </Icon>,
            <Icon type="footerMail">
              <span className="white-text">info@lvps.ca</span>
            </Icon>,
            <Icon type="footerPhone">
              <span className="white-text">(647) 703 5857</span>
            </Icon>
          ]}
          size={12}
        />
      </StyledFooterContent>
    </StyledFooterContainer>
  );
};

StyledFooterContent.displayName = 'StyledFooterContent';

export default Footer;
