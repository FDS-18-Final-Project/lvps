import { css } from 'styled-components';

export const fullWidthStyle = css`
  ${props => {
    console.log(props.fullWidth);
    return (
      props.fullWidth &&
      css`
        width: 100%;
      `
    );
  }}
`;
