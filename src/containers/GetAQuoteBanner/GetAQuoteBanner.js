import { Button, Paragraph } from 'components';
import styled from 'styled-components';

const GetAQuoteBannerBlock = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  // TODO: theme으로 변경
  background-color: red;
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
      colors={{ main: 'white', sub: 'gray' }}
    >
      If you want to check our works, press the button.
    </Paragraph>
  );
};

GetAQuoteBanner.Link = () => {
  return <Button mode="secondary">Get a Free Quote</Button>;
};

export default GetAQuoteBanner;
