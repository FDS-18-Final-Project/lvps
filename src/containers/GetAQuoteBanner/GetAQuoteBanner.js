import { Button, Paragraph } from 'components';
import styled from 'styled-components';
import theme from 'theme/theme';

const GetAQuoteBannerBlock = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red_05};
  // TODO: theme으로 변경
  padding: 108px 200px;
`;

const GetAQuoteBanner = ({ children }) => {
  return <GetAQuoteBannerBlock>{children}</GetAQuoteBannerBlock>;
};

GetAQuoteBanner.Title = () => {
  return (
    <Paragraph
      type="title"
      title="Get a free quote"
      headingNum={2}
      colors={{ main: theme.colors.white, sub: theme.colors.lightGray }}
      size="24"
    >
      If you want to check our works, press the button.
    </Paragraph>
  );
};

GetAQuoteBanner.Link = () => {
  return <Button mode="secondary">Get a Free Quote</Button>;
};

export default GetAQuoteBanner;
