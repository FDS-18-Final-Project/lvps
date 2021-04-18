import React from 'react';
import styled from 'styled-components';
import PriceTable from './PriceTable';
import { Tag } from 'components';
import { calcInterval, calcRem, fontSizes } from 'theme/theme';
import { string } from 'prop-types';

const DescriptionPriceTableContainer = styled(PriceTable)`
  padding: ${calcInterval([130, 80, 114])};

  .tag {
    position: absolute;
    top: 4%;
    left: ${calcRem(-7)};
  }

  h2 {
    font-weight: 900;
    font-size: ${fontSizes.xxxl};
    line-height: ${calcRem(45)};
    margin-bottom: ${calcRem(20)};
  }

  & > p {
    max-width: ${calcRem(380)};
    font-weight: 500;
    line-height: ${calcRem(24)};
    margin-bottom: ${calcRem(80)};
  }

  h3 {
    width: 100%;
    font-weight: 700;
    font-size: ${fontSizes.xl};
    line-height: ${calcRem(36)};
    margin-bottom: ${calcRem(30)};
  }
  ul {
    width: 100%;

    div {
      margin-right: ${calcRem(10)};
    }
  }
`;
const DescriptionContainer = ({ subject, description }) => {
  return (
    <>
      <p>{description}</p>
      <h3>{subject}</h3>
    </>
  );
};

const DescriptionPriceTable = ({
  subject,
  description,
  heading,
  ...restProps
}) => {
  return (
    <DescriptionPriceTableContainer
      descriptionContainer={
        <DescriptionContainer subject={subject} description={description} />
      }
      {...restProps}
    >
      <Tag className="tag" type="tagRed">
        CERAMIC
      </Tag>
      <h2>{heading}</h2>
    </DescriptionPriceTableContainer>
  );
};

DescriptionPriceTable.propTypes = {
  subject: string,
  description: string,
  heading: string
};

DescriptionPriceTable.defaultProps = {
  subject: 'Signature Features',
  description: `The Pinnacle Of High Performance Tint. Period.
  Offering 98% infrared heat rejection thanks to multi-layer nanoparticle technology, PRIME XR PLUS ™ combines a cool look with extreme performance. Let PRIME XR PLUS keep you comfortable and protected no matter the weather.
  `,
  heading: 'PRIME XR PLUS ™'
};

DescriptionPriceTableContainer.displayName = 'DescriptionPriceTableContainer';

export default DescriptionPriceTable;
