import styled from 'styled-components';
import { colors, calcRem, fontSizes } from 'theme/theme';

const MessageContainer = styled.div`
  background-color: rgba(17, 17, 17, 0.6);
  max-width: ${calcRem(995)};
  width: auto;
  height: auto;
  text-align: center;
  justify-content: center;
  margin: auto ${calcRem(20)} ${calcRem(42)} ${calcRem(20)};
  padding: ${calcRem(125)} 20%;

  h2 {
    color: ${colors.red_04};
    font-size: ${fontSizes.titleBase};
    font-weight: 700;
    margin-bottom: ${calcRem(40)};
  }

  p {
    color: ${colors.white};
    font-size: ${fontSizes.xl};
    line-height: 150%;
  }
`;

const ErrorMessage = () => {
  return (
    <MessageContainer>
      <h2>404 Page Not Found</h2>
      <p>
        Sorry, the requested URL is not found. <br />
        Please go back to the homepage.
      </p>
    </MessageContainer>
  );
};

ErrorMessage.propTypes = {};

ErrorMessage.defaultProps = {};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
