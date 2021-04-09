import React from 'react';
import { Button, Icon } from 'components';
import styled from 'styled-components';
import { oneOf, string } from 'prop-types';

const LinkIconContainer = styled.div`
  position: relative;
  width: 465px;
  font-weight: 700px;
  line-height: 150%;
  font-family: inherit;

  &:hover {
    path {
      ${props => styleHoverIcon[props.mode]}
    }
  }
`;
const styleIcon = {
  secondary: {
    fill: 'black',
  },
};
const styleHoverIcon = {
  secondary: {
    fill: 'white',
  },
  primary: {
    fill: 'red',
  },
};
const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 35px;
  right: 40px;
  & div {
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
    }
    path {
      ${props => styleIcon[props.mode]}
    }
  }
`;

const LinkIcon = ({ ...restProps }) => {
  return (
    <LinkIconContainer mode={restProps.mode}>
      <Button
        tag={restProps.tag}
        mode={restProps.mode}
        role={restProps.role}
        href={restProps.href}
        children={restProps.children}
      ></Button>
      <IconContainer mode={restProps.mode}>
        <Icon type="rightArrow" color="white" />
      </IconContainer>
    </LinkIconContainer>
  );
};

LinkIcon.propTypes = {
  tag: string,
  type: oneOf(['button', 'submit']),
  mode: oneOf(['primary', 'secondary']),
  role: string,
  href: string,
  children: string,
};

LinkIcon.defaultProps = {
  tag: 'a',
  type: 'button',
  mode: 'secondary',
  role: 'button',
  href: '/get-a-quote',
  children: 'Get a Free Quote',
};

LinkIconContainer.displayName = 'LinkIconContainer';
IconContainer.displayName = 'IconContainer';

export default LinkIcon;
