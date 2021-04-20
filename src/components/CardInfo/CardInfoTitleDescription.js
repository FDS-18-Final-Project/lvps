import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';

const CardInfoTitleDescriptionContainer = styled.ul`
  min-height: ${({ minHeight }) => calcRem(minHeight)};

  li {
    text-align: center;

    h3 {
      line-height: ${calcRem(24)};
      color: ${({ color }) => (color ? colors[color] : colors.black)};
    }

    p {
      color: ${colors.gray};
    }
  }

  li + li {
    margin-top: ${calcRem(15)};
  }
`;

const infoList = [
  {
    id: 1,
    title: '4 Layers Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 2,
    title: '4 Layers Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 3,
    title: '4 Layers Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  },
  {
    id: 4,
    title: '4 Layers Ceramic Pro 9H',
    description: 'on all painted surfaces and trim'
  }
];

const CardInfoTitleDescription = ({ infoList, minHeight, ...restProps }) => {
  return (
    <CardInfoTitleDescriptionContainer minHeight={minHeight} {...restProps}>
      {infoList.map(info => (
        <li key={info.id}>
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </li>
      ))}
    </CardInfoTitleDescriptionContainer>
  );
};

CardInfoTitleDescription.propTypes = {
  infoList: array
};

CardInfoTitleDescription.defaultProps = {
  infoList: infoList,
  padding: [0]
};

export default CardInfoTitleDescription;
