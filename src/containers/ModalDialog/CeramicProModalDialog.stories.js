import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import CeramicProModalDialog from './CeramicProModalDialog';

export default {
  title: 'LVPS/Container/CeramicProModalDialog',
  component: CeramicProModalDialog,
  parameters: {
    docs: {
      description: {
        component:
          '**CeramicProModalDialog** 컨테이너는 Get a Quote에서 사용되는 다이얼로그 모달창 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/EKoyu2bLwgDjnAIHQrCwn9/LVPS-Renewal?node-id=281%3A6519'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <CeramicProModalDialog {...args} />
  </BrowserRouter>
);

export const CeramicModalDialog = Template.bind({});

CeramicProModalDialog.args = {};
