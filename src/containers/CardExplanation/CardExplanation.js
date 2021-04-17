import { string, array } from 'prop-types';
import styled from 'styled-components';
import { calcRem, calcInterval, colors } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { Paragraph, Card } from 'components/';

const FullContainer = styled(Layout.FlexContainer)`
  width: ${calcRem(1200)};
  margin: 0 auto;
  justify-content: initial;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  width: 100%;

  h2 {
    font-size: ${calcRem(45)};
    margin-bottom: ${calcRem(15)};
  }
  h2 + p {
    font-size: ${calcRem(18)};
    color: ${colors.redMain};
  }
  span {
    line-height: 150%;
  }

  @media only screen and (max-width: 1200px) {
    padding: ${calcInterval([0, 50])};
  }
  @media only screen and (max-width: 1000px) {
    svg {
      width: ${calcRem(100)};
    }
    p {
      font-size: ${calcRem(14)};
    }
  }
`;
const CardListContainer = styled.div`
  display: grid;
  margin: ${calcInterval([30, 0, 40])};
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([0])};
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
    p {
      font-size: ${calcRem(16)};
    }
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardExplanation = ({ title, desc, cardList, children }) => {
  return (
    <section>
      <FullContainer tag="CardExplanation" justifyContent="space-around">
        <CardContainer>
          <Paragraph type="title" headingNum="2" title={title}>
            {desc}
          </Paragraph>
          <CardListContainer title={title}>
            {cardList.map((card, idx) => {
              return (
                <Card
                  key={card.id}
                  type={card.type}
                  iconType={card.iconType}
                  background={card.background}
                  color={card.fontColor}
                  zIndex={1 * (4 - idx)}
                  translateX={-10 * idx}
                  content={card.content[0]}
                  as={title === 'LVPS Process' && 'li'}
                ></Card>
              );
            })}
          </CardListContainer>
          <span>{children}</span>
        </CardContainer>
      </FullContainer>
    </section>
  );
};

CardExplanation.prototype = {
  title: string.isRequired,
  desc: string,
  cardList: array.isRequired,
  children: string
};
CardExplanation.defaultProps = {
  title: '',
  desc: '',
  cardList: [],
  children: ''
};
export default CardExplanation;
