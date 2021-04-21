import styled from 'styled-components';
import { colors, calcRem, calcInterval, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { useViewSize } from 'hooks/';
import IconParagraph from 'components/IconParagraph/IconParagraph';

const StyledIconExplanCardContainer = styled.section`
  padding: ${calcRem(75)};
  @media only screen and (max-width: 1200px) {
    padding: ${calcRem(50)};
  }
  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([75, 15])};
  }
`;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  .icon-paragraph {
    width: 33%;
    padding: 2%;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 1200px) {
    h3 {
      height: ${calcRem(50)};
      font-size: ${fontSizes.base};
      margin-bottom: 0;
    }
    .icon-paragraph {
      font-size: ${fontSizes.small};
      p {
        height: ${calcRem(190)};
      }
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      text-align: center;
      font-size: ${fontSizes.xl};
      margin-bottom: ${calcRem(35)};
      line-height: ${calcRem(36)};
    }
    h3 {
      height: 30px;
      font-size: ${fontSizes.small};
      margin-bottom: 0;
    }
    .icon-paragraph {
      text-align: center;
      font-size: ${fontSizes.small};
      width: ${calcRem(304)};
      margin: 0 auto;
      p {
        height: 100%;
        margin-bottom: ${calcRem(34)};
      }
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
  svg {
    margin: 0 auto;
    margin-right: ${calcRem(40)};

    path {
      /* fill: none; */
      /* stroke: none; */
    }
  }
  @media only screen and (max-width: 768px) {
    flex-flow: column;
  }
`;

const IconParagraphLayout = ({
  title,
  contents,
  paragraphWidth,
  direction,
  textAlign,
  className
}) => {
  const { desktop } = useViewSize();
  return (
    <StyledIconExplanCardContainer>
      <FullContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledIconExplanListContainer className={className}>
          {contents.map((content, idx) => (
            <IconParagraph
              key={content.id}
              direction={desktop ? direction : 'column'}
              content={content}
              iconType={content.iconType}
              paragraphWidth={paragraphWidth}
              className="icon-paragraph"
              textAlign={
                textAlign || {
                  title: 'center',
                  content: desktop ? 'left' : 'center'
                }
              }
            />
          ))}
        </StyledIconExplanListContainer>
      </FullContainer>
    </StyledIconExplanCardContainer>
  );
};

export default IconParagraphLayout;
