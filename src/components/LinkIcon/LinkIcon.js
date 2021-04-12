import React from 'react';
import { Button, Icon } from 'components';
import styled from 'styled-components';
import { string } from 'prop-types';
import theme from 'theme/theme';
import { bool } from 'prop-types';
import { fullWidthStyle } from 'styles/Mixin';

const { colors } = theme;
const styleIcon = {
  secondary: {
    fill: `${colors.redMain}`
  },
  primary: {
    fill: `${colors.white}`
  }
};
const styleHoverIcon = {
  secondary: {
    fill: `${colors.white}`
  },
  primary: {
    fill: `${colors.redMain}`
  },
  hoverBoxTheme: {
    fill: `${colors.redMain}`
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
  ${fullWidthStyle}
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

const LinkIcon = ({
  styledMode,
  mode,
  role,
  href,
  children,
  fullWidth,
  ...restProps
}) => {
  return (
    <LinkIconContainer fullWidth={fullWidth} styledMode={styledMode}>
      <Button
        mode={mode}
        styledMode={styledMode}
        role={role}
        href={href}
        fullWidth={fullWidth}
        {...restProps}
      >
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
  disabled: bool,
  fullWidth: bool,
  href: string,
  children: string
};

LinkIcon.defaultProps = {
  mode: 'LinkA',
  styledMode: 'primary',
  type: 'button',
  role: 'button',
  fullWidth: false,
  disabled: false,
  href: '/get-a-quote',
  children: 'Get a Free Quote'
};

LinkIconContainer.displayName = 'LinkIconContainer';
IconContainer.displayName = 'IconContainer';

export default LinkIcon;
