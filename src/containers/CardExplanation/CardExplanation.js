import { string, array } from 'prop-types';
import styled from 'styled-components';
import { calcRem, calcInterval, colors } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import Card from 'components/Card/Card';

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
    margin-top: ${calcRem(75)};
    font-size: ${calcRem(45)};
    margin-bottom: ${calcRem(15)};
    font-family: Montserrat;
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
    svg {
      width: ${calcRem(100)};
    }
    p {
      font-size: ${calcRem(14)};
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1.1rem ${calcRem(75)};

    h2 {
      font-size: ${calcRem(24)};
      text-align: center;
      margin-bottom: ${calcRem(10)};
      margin-top: ${calcRem(75)};
    }
  }
`;
const CardListContainer = styled.div`
  display: grid;
  margin: ${calcInterval([30, 0, 40])};
  padding: 0 ${calcRem(30)};
  grid-template-columns: ${({ type }) =>
    `repeat(${type === 'arrow' ? 4 : 3}, 1fr)`};
  gap: 25px;

  @media only screen and (max-width: 768px) {
    padding: ${calcRem(0)};
    margin: ${calcInterval([30, 0, 0])};
    grid-template-columns: repeat(1, 1fr);
    row-gap: 25px;

    p {
      font-size: ${calcRem(16)};
    }
  }
`;
const CardExplanation = ({ title, cardList, children }) => {
  console.log(cardList);
  return (
    <section style={{ borderTop: 0 }}>
      <FullContainer justifyContent="space-around">
        <CardContainer>
          <h2>{title}</h2>
          <CardListContainer title={title} type={cardList[0].type}>
            {cardList.map((card, idx) => {
              return (
                <Card
                  key={card.id}
                  type={card.type}
                  iconType={card.iconType}
                  background={card.background}
                  color={card.fontColor}
                  translateX={-30 * idx}
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
  cardList: array.isRequired,
  children: string
};
CardExplanation.defaultProps = {
  title: '',
  cardList: [],
  children: ''
};
export default CardExplanation;
