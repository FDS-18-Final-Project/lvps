import useViewSize from 'hooks/useViewSize';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';

const explanCeramic = [
  {
    id: 1,
    iconType: 'ceramicDollar',
    title: 'GOOD INVESTMENT',
    content:
      'The coating will protect the vehicle’s exterior and interior from deteriorating for a lifetime. The resale market value will therefore be substantially higher! Ceramic Pro pays for itself in the end.'
  },
  {
    id: 2,
    iconType: 'ceramicCar',
    title: 'LOOK NEW ALL THE TIME',
    content:
      'Once the coating is applied you will see a mirror effect, glossiness and color depth, incomparable to anything else! With proper maintenance your car’s finish will shine for many years to come.'
  },
  {
    id: 3,
    iconType: 'ceramicLike',
    title: 'LESS MAINTENANCE',
    content:
      'The slick coated surface won’t allow dirt, brake dust and tar to stick to your paint, wheels or glass. This makes washing your vehicle less labor intensive and less frequent. Waxing is now obsolete.'
  }
];

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  svg {
    margin-right: 0;
    margin-bottom: ${calcRem(35)};
  }
`;

const IconExplanCard = () => {
  const { desktop } = useViewSize();

  return (
    <StyledIconParagraphLayout
      title="Why Ceramic Pro Protection?"
      contents={explanCeramic}
      paragraphWidth="100%"
      direction="column"
      desktop={desktop}
    />
  );
};

export default IconExplanCard;
