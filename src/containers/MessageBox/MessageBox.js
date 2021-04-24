import styled from 'styled-components';
import { colors, calcRem, fontSizes, device } from 'theme/theme';

const MessageContainer = styled.div`
  background-color: rgba(17, 17, 17, 0.6);
  max-width: ${calcRem(995)};
  height: auto;
  text-align: center;
  justify-content: center;
  margin: auto ${calcRem(20)} ${calcRem(42)} ${calcRem(20)};
  padding: ${calcRem(125)} 20%;
  border: 2px solid ${colors.lightGray};

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
    white-space: pre-wrap;
  }

  ${device.tablet} {
    padding: ${calcRem(50)};
    h2 {
      font-size: ${fontSizes.xl};
    }

    p {
      font-size: ${fontSizes.lg};
    }
  }
`;

const MessageBox = ({ title, message, ...restProps }) => {
  return (
    <MessageContainer {...restProps}>
      <h2>{title}</h2>
      <p>{message}</p>
    </MessageContainer>
  );
};

MessageBox.displayName = 'MessageBox';

export default MessageBox;
