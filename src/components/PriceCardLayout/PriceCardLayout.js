import { Carousel, PriceTable } from 'components/';
import useViewSize from 'hooks/useViewSize';
import styled from 'styled-components';
import { calcInterval, calcRem, fontSizes } from 'theme/theme';

const StyledPriceCardContainer = styled.section`
  @media only screen and (max-width: 1200px) {
    padding: ${calcInterval([0, 50])};
  }
`;

const StyledPriceCard = styled.div`
  padding: ${calcInterval([75, 0])};
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  @media only screen and (max-width: 1200px) {
    li[type='card'] {
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
    }
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: ${fontSizes.xl};
      text-align: center;
    }
  }

  @media only screen and (max-width: 375px) {
    li > div {
      padding: 10px;
    }
  }
`;

const StyledPriceCardHeading = styled.h2`
  font-size: ${fontSizes.titleBase};
  font-weight: 700;
  margin-bottom: ${calcRem(60)};
`;

const PriceTableContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${calcInterval([0, 50])};
  .price-table {
    margin-right: ${calcRem(20)};
  }

  .price-table:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0;

    strong {
      font-size: 40px;
    }
    ul {
      font-size: 13px;
    }
  }
`;

const PriceCardLayout = ({ title, type, icon, contents, ...restProps }) => {
  const { desktop } = useViewSize();

  return (
    <StyledPriceCardContainer {...restProps}>
      <StyledPriceCard>
        <StyledPriceCardHeading>{title}</StyledPriceCardHeading>
        {desktop ? (
          <PriceTableContainer>
            {contents.map(content => (
              <PriceTable
                type={type}
                icon={icon}
                maxWidth={322}
                content={content}
                className="price-table"
              />
            ))}
          </PriceTableContainer>
        ) : (
          <Carousel type="card" contents={contents} title={type} icon={icon} />
        )}
      </StyledPriceCard>
    </StyledPriceCardContainer>
  );
};

export default PriceCardLayout;
