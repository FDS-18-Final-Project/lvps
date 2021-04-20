import useViewSize from 'hooks/useViewSize';
import styled, { css } from 'styled-components';
import { calcInterval, calcRem, fontSizes } from 'theme/theme';

const gridStyle = css`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: ${calcRem(20)} 0;
`;

const flexStyle = css`
  display: flex;
  justify-content: space-around;
`;

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
      padding: ${({ mode }) => mode === 'desc' && '10px'};
    }
  }
`;

const StyledPriceCardHeading = styled.h2`
  font-size: ${fontSizes.titleBase};
  font-weight: 700;
  margin-bottom: ${calcRem(60)};
`;

const PriceTableContainer = styled.div`
  ${({ display }) => (display === 'grid' ? gridStyle : flexStyle)}

  & > div {
    margin-right: ${({ marginRight }) => calcRem(marginRight)};
    flex: 1;
  }

  & > div:nth-child(4) {
    margin-right: ${({ display }) => display === 'grid' && 0};
  }

  & > div:last-child {
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

const PriceCardLayout = ({
  title,
  type,
  icon,
  contents,
  children,
  cardList,
  marginRight,
  display,
  mode,
  ...restProps
}) => {
  const { desktop } = useViewSize();
  return (
    <StyledPriceCardContainer {...restProps}>
      <StyledPriceCard mode={mode}>
        <StyledPriceCardHeading>{title}</StyledPriceCardHeading>
        {desktop ? (

          <PriceTableContainer>
            {contents.map(content => (
              <PriceTable
                type={type}
                icon={icon}
                key={content.id}
                maxWidth={322}
                content={content}
                className="price-table"
              />
            ))}

          <PriceTableContainer
            marginRight={marginRight}
            display={display}
            className="card-container"
          >
            {cardList}

          </PriceTableContainer>
        ) : (
          <>{children}</>
        )}
      </StyledPriceCard>
    </StyledPriceCardContainer>
  );
};

PriceCardLayout.defaultProps = {
  display: 'flex',
  mode: 'normal'
};

export default PriceCardLayout;
