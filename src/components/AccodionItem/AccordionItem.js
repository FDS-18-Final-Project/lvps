import React from 'react';
import { object, func } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, fontSizes, colors, calcRem } from 'theme/theme';
import { Button, Icon } from 'components';

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: ${calcRem(72)};
  padding: ${calcInterval([0, 50, 50])};
  font-weight: 400;
  overflow: hidden;
  position: relative;

  &:hover {
    border: 0;
    padding: ${calcInterval([0, 50, 50])};
  }

  h3 {
    font-size: ${fontSizes.lg};
    padding: ${calcInterval([20, 0])};
    text-align: center;
    border-bottom: ${`1px solid ${colors.lightGray}`};
    font-weight: bold;
    white-space: nowrap;
  }

  p {
    display: flex;
    flex-direction: column;
    margin-top: ${calcRem(25)};
    margin-left: ${calcRem(-15)};
    font-size: ${fontSizes.base};
    color: ${colors.lightGray};
    line-height: ${calcRem(36)};

    span {
      padding: ${calcRem(5)};
    }
  }

  div {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(-50px, -50%, 0);
  }
`;

const AccordionItemContainer = styled.li`
  max-width: ${calcRem(465)};
`;

const variants = {
  visible: {
    color: colors.white,
    backgroundColor: colors.redMain,
    height: 'auto',
    opacity: 0.8,
    transition: { duration: 0.5, type: 'tween' }
  },
  hidden: {
    color: colors.black,
    backgroundColor: colors.white,
    height: calcRem(72),
    opacity: 1,
    transition: { duration: 0.5, type: 'tween' }
  }
};

const AccordionItem = ({ item, onClick }) => {
  return (
    <AccordionItemContainer>
      <StyledButton
        mode="link"
        onClick={() => onClick(item.id)}
        to={item.active ? '/home' : '/'}
        variants={variants}
        animate={item.active ? 'visible' : 'hidden'}
        exit="hidden"
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
            color={colors.white}
            width="16"
            height="28"
          />
        )}
      </StyledButton>
    </AccordionItemContainer>
  );
};

AccordionItem.propTypes = {
  item: object.isRequired,
  onClick: func
};

AccordionItem.defaultProps = {
  item: {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: true
  }
};

AccordionItemContainer.displayName = 'AccordionItemContainer';
export default React.memo(AccordionItem);
