import { IconParagraph } from 'components/';
import Layout from 'pages/Layout/Layout';
import styled from 'styled-components';
import { colors, calcRem, calcInterval, fontSizes } from 'theme/theme';

const explanCeramic = [
  {
    id: 1,
    title: 'GOOD INVESTMENT',
    content:
      'The coating will protect the vehicle’s exterior and interior from deteriorating for a lifetime. The resale market value will therefore be substantially higher! Ceramic Pro pays for itself in the end.'
  },
  {
    id: 2,
    title: 'LOOK NEW ALL THE TIME',
    content:
      'Once the coating is applied you will see a mirror effect, glossiness and color depth, incomparable to anything else! With proper maintenance your car’s finish will shine for many years to come.'
  },
  {
    id: 3,
    title: 'LESS MAINTENANCE',
    content:
      'The slick coated surface won’t allow dirt, brake dust and tar to stick to your paint, wheels or glass. This makes washing your vehicle less labor intensive and less frequent. Waxing is now obsolete.'
  }
];

const StyledIconExplanCardContainer = styled.section`
  padding: ${calcRem(75)};

  @media only screen and (max-width: 1200px) {
    padding: ${calcRem(50)};
  }

  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([75, 15, 0])};
  }
`;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;

  h3 {
    height: 65px;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      text-align: center;
      font-size: ${fontSizes.xl};
      margin-bottom: 35px;
    }
    h3 {
      height: 30px;
      font-size: ${fontSizes.small};
      margin-bottom: 0;
    }
    p {
      text-align: center;
      font-size: ${fontSizes.small};
    }
  }
`;

const StyledHeading = styled.h2`
  color: ${colors.black};
  font-size: ${calcRem(45)};
  font-weight: 700;
  margin-bottom: ${calcRem(60)};
`;

const StyledIconExplanListContainer = styled(Layout.FlexContainer)`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-flow: column;
    p {
      width: ${calcRem(304)};
      text-align: center;
      margin: 0 auto;
    }
  }
`;

const IconExplanCard = ({ children }) => {
  return (
    <StyledIconExplanCardContainer>
      <FullContainer>{children}</FullContainer>
    </StyledIconExplanCardContainer>
  );
};

IconExplanCard.Title = () => {
  return <StyledHeading>Why Ceramic Pro Protection?</StyledHeading>;
};

IconExplanCard.Contents = () => {
  return (
    <StyledIconExplanListContainer>
      {explanCeramic.map(content => (
        <IconParagraph
          key={content.id}
          content={content}
          iconType="likeCircle"
          paragraphWidth="100%"
        />
      ))}
    </StyledIconExplanListContainer>
  );
};

export default IconExplanCard;
