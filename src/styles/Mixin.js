import { css } from 'styled-components';

export const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
