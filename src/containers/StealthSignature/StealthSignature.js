import { useViewSize } from 'hooks';
import IconParagraphLayout from 'pages/Layout/IconParagraphLayout';
import styled, { css } from 'styled-components';
import { calcRem } from 'theme/theme';

const stealths = [
  {
    id: 1,
    iconType: 'facebook',
    title: 'Self Healing',
    content:
      'When exposed to heat, the enhanced clear coat properties eliminate fine scratches and swirl marks over time'
  },
  {
    id: 2,
    iconType: 'facebook',
    title: 'Easy Maintenance',
    content:
      'Flat finishes are notoriously difficult to maintain and even harder to repair. STEALTH enables you to easily wash and dry your car without damaging its sheen.'
  },
  {
    id: 3,
    iconType: 'facebook',
    title: 'Custom Applications',
    content:
      'Utilize STEALTH to accentuate gloss aero or carbon fiber, and protect factory flares, splitters, and trim pieces.'
  },
  {
    id: 4,
    iconType: 'facebook',
    title: 'Sleek Satin Finish',
    content:
      'With an unique satin finish, STEALTH helps match most factory flat paint jobs and virtually disappears on most surfaces. With a finish that’s uniformly smooth, you can add STEALTH to your matte or gloss paint job for a unique satin finish.'
  },
  {
    id: 5,
    iconType: 'facebook',
    title: 'Warranty & Durability',
    content:
      'STEALTH features the same superior impact protection as ULTIMATE PLUS back by our industry-leading 10 year warranty.'
  }
];

const styledDesktop = css`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(2, 1fr);

  .icon-paragraph {
    width: 100%;
  }
  .icon-paragraph:nth-child(1) {
    grid-area: 1 / 1 / 3 / 2;
  }
  .icon-paragraph:nth-child(2) {
    grid-area: 3 / 1 / 5 / 2;
  }
  .icon-paragraph:nth-child(3) {
    grid-area: 5 / 1 / 7 / 2;
  }
  .icon-paragraph:nth-child(4) {
    grid-area: 2 / 2 / 4 / 3;
  }
  .icon-paragraph:nth-child(5) {
    grid-area: 4 / 2 / 6 / 3;
  }
`;
const styledMobile = css`
  svg {
    margin-right: 0;
    margin-bottom: ${calcRem(35)};
  }
`;

const StyledIconParagraphLayout = styled(IconParagraphLayout)`
  ${({ desktop }) => (desktop ? styledDesktop : styledMobile)}
`;

const StealthSignature = () => {
  const { desktop } = useViewSize();
  return (
    <StyledIconParagraphLayout
      title="STEALTH ™ SIGNATURE FEATURES"
      contents={stealths}
      className="stealths"
      desktop={desktop}
    />
  );
};

export default StealthSignature;
