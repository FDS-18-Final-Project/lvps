import React from 'react';
import { Button, Icon } from 'components';
import styled from 'styled-components';
import { string } from 'prop-types';
import theme from 'theme/theme';

const styleIcon = {
  secondary: {
    fill: `${theme.colors.redMain}`
  },
  primary: {
    fill: `${theme.colors.white}`
  }
};
const styleHoverIcon = {
  secondary: {
    fill: `${theme.colors.white}`
  },
  primary: {
    fill: `${theme.colors.redMain}`
  }
};

const LinkIconContainer = styled.div`
  position: relative;
  width: ${props => props.width || '465px'};
  height: ${props => props.height || 'auto'};
  font-weight: 700px;
  line-height: 150%;
  font-family: inherit;

  &:hover {
    path {
      ${props => styleHoverIcon[props.styledMode]}
    }
  }
`;
const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 40px;
  & div {
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
    }
    path {
      ${props => {
        return styleIcon[props.styledMode];
      }}
    }
  }
`;

const LinkIcon = ({ styledMode, mode, role, href, children, ...restProps }) => {
  return (
    <LinkIconContainer styledMode={styledMode}>
      <Button mode={mode} role={role} href={href} {...restProps}>
        {children}
        <IconContainer styledMode={styledMode}>
          <Icon type="rightArrow" color="white" />
        </IconContainer>
      </Button>
    </LinkIconContainer>
  );
};

LinkIcon.propTypes = {
  mode: string.isRequired,
  styledMode: string,
  type: string,
  role: string,
  href: string,
  children: string
};

LinkIcon.defaultProps = {
  mode: 'LinkA',
  styledMode: 'primary',
  type: 'button',
  role: 'button',
  href: '/get-a-quote',
  children: 'Get a Free Quote'
};

LinkIconContainer.displayName = 'LinkIconContainer';
IconContainer.displayName = 'IconContainer';

export default LinkIcon;
