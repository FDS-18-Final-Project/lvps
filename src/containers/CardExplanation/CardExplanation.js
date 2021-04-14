import { string, array } from 'prop-types';
import styled from 'styled-components';
import { calcRem, calcInterval, colors } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { Paragraph, Card } from 'components/';

const FullContainer = styled(Layout.FlexContainer)`
  width: ${calcRem(1200)};
  margin: 0 auto;
`;

const CardContainer = styled.div`
  padding: ${calcInterval([75])};

  h2 {
    font-size: ${calcRem(45)};
    margin-bottom: ${calcRem(15)};
  }
  h2 + p {
    font-size: ${calcRem(18)};
    color: ${colors.redMain};
  }
`;
const CardListContainer = styled.div`
  display: flex;
  margin-top: ${calcRem(30)};

  div + div {
    margin-left: 15px;
  }
`;
const CardExplanation = ({ title, desc, CardList, children }) => {
  return (
    <section>
      <FullContainer tag="CardExplanation" justifyContent="space-around">
        <CardContainer>
          <Paragraph type="title" headingNum="2" title={title}>
            {desc}
          </Paragraph>
          <CardListContainer as={title === 'LVPS Process' && 'ul'}>
            {CardList.map(card => (
              <Card
                key={card.id}
                type={card.type}
                iconType={card.iconType}
                background={card.background}
                color={card.fontColor}
                as={title === 'LVPS Process' && 'li'}
              >
                {card.desc}
              </Card>
            ))}
          </CardListContainer>
          {children}
        </CardContainer>
      </FullContainer>
    </section>
  );
};

CardExplanation.prototype = {
  title: string.isRequired,
  desc: string,
  CardList: array.isRequired,
  children: string
};
CardExplanation.defaultProps = {
  title: '',
  desc: '',
  CardList: [],
  children: ''
};
export default CardExplanation;
