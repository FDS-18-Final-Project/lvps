import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import WheelModalDialog from './WheelModalDialog';

export default {
  title: 'LVPS/Container/WheelModalDialog',
  component: WheelModalDialog,
  parameters: {
    docs: {
      description: {
        component:
          '**WheelModalDialog** 컨테이너는 Get a Quote에서 사용되는 다이얼로그 모달창 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/EKoyu2bLwgDjnAIHQrCwn9/LVPS-Renewal?node-id=272%3A99'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <WheelModalDialog {...args} />
  </BrowserRouter>
);

export const WheelModalDialogBlock = Template.bind({});

WheelModalDialogBlock.args = {};
