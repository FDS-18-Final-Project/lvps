import Icon from 'components/Icon/Icon';
import { object, func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';
import { Button } from '..';

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: 3.7rem;
  padding: ${theme.calcInterval([0, 50, 50])};
  border: ${`1px solid ${theme.colors.lightGray}`};
  font-weight: 400;
  overflow: hidden;
  position: relative;
  &:hover {
    border: ${`1px solid ${theme.colors.lightGray}`};
  }
  h3 {
    font-size: ${theme.fontSizes.lg};
    padding: ${theme.calcInterval([13, 0])};
    text-align: center;
    border-bottom: ${`1px solid ${theme.colors.lightGray}`};
    font-weight: bold;
  }

  p {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-left: -15px;
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.lightGray};

    span {
      padding: ${theme.paddings.small};
    }
  }
  div {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(-50px, -50%, 0);
  }
`;

const ItemWrapper = styled.li`
  max-width: 465px;
`;

const variants = {
  visible: {
    color: theme.colors.white,
    backgroundColor: theme.colors.redMain,
    height: 'auto',
    transition: { duration: 0.5, type: 'tween' },
  },
  hidden: {
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    height: '3.7rem',
    transition: { duration: 0.5, type: 'tween' },
  },
};

function AccordionItem({ item, onClick }) {
  return (
    <ItemWrapper>
      <StyledButton
        tag="a"
        onClick={() => onClick(item.id)}
        variants={variants}
        animate={item.active ? 'visible' : 'hidden'}
      >
        <h3>{item.title}</h3>
        <p>
          {item.description.map((des, i) => (
            <span key={i}>{des}</span>
          ))}
        </p>
        {item.active && (
          <Icon
            title="rigthArrow Link"
            type="rightArrow"
            color={theme.colors.white}
            width="16"
            height="28"
          />
        )}
      </StyledButton>
    </ItemWrapper>
  );
}

AccordionItem.propTypes = {
  item: object.isRequired,
  onClick: func.isRequired,
};

AccordionItem.defaultProps = {
  item: {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services',
    ],
    active: true,
  },
};

ItemWrapper.displayName = 'AccordionItemWrapper';
export default React.memo(AccordionItem);
