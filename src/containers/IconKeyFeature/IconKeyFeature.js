import { IconParagraph } from 'components/';
import { useViewSize } from 'hooks/';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';

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
  },
  {
    id: 4,
    title: 'LESS MAINTENANCE',
    content:
      'The slick coated surface won’t allow dirt, brake dust and tar to stick to your paint, wheels or glass. This makes washing your vehicle less labor intensive and less frequent. Waxing is now obsolete.'
  }
];

const StyledIconKeyFeature = styled.section`
  padding: ${calcRem(75)};

  @media only screen and (max-width: 1200px) {
    padding: ${calcRem(50)};
  }

  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([75, 15, 0])};

    h2 {
      text-align: center;
      font-size: ${fontSizes.xl};
      margin-bottom: ${calcRem(35)};
      line-height: ${calcRem(36)};
    }
  }
`;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
`;

const StyledHeading = styled.h2`
  color: ${colors.black};
  font-size: ${calcRem(45)};
  font-weight: 700;
  margin-bottom: ${calcRem(60)};
`;

const StyledIconKeyFeatureContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 15% 5%;
  .icon-paragraph {
    p {
      width: 80%;
    }
  }

  @media only screen and (max-width: 1200px) {
    gap: 8% 5%;
    margin-bottom: ${calcRem(75)};
    h3,
    p {
      font-size: ${fontSizes.small};
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
    .icon-paragraph {
      padding: 2%;
      margin: 0 auto;
      margin-bottom: ${calcRem(34)};
      p {
        margin: 0 auto;
      }
    }
  }
`;

const IconKeyFeature = () => {
  const { desktop } = useViewSize();

  return (
    <StyledIconKeyFeature>
      <FullContainer>
        <IconKeyFeature.Title />
        <IconKeyFeature.Contents desktop={desktop} />
      </FullContainer>
    </StyledIconKeyFeature>
  );
};

IconKeyFeature.Title = () => {
  return <StyledHeading>Xpel Ultimate Plus Key Features</StyledHeading>;
};
IconKeyFeature.Contents = ({ desktop }) => {
  return (
    <StyledIconKeyFeatureContainer>
      {explanCeramic.map(content => (
        <IconParagraph
          key={content.id}
          direction={desktop ? 'row' : 'column'}
          content={content}
          textAlign={{
            title: desktop ? 'left' : 'center',
            content: desktop ? 'left' : 'center'
          }}
          iconType="likeCircle"
          paragraphWidth="100%"
          contentWidth={desktop ? '100%' : calcRem(304)}
          className="icon-paragraph"
        />
      ))}
    </StyledIconKeyFeatureContainer>
  );
};

export default IconKeyFeature;
