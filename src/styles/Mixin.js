import { css } from 'styled-components';

export const fullWidthStyle = css`
  width: ${({ fullWidth }) => fullWidth && '100%'};
`;
