import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import WindowModalDialog from './WindowModalDialog';

export default {
  title: 'LVPS/Container/WindowModalDialog',
  component: WindowModalDialog,
  parameters: {
    docs: {
      description: {
        component:
          '**WindowModalDialog** 컨테이너는 Get a Quote에서 사용하는 다이얼로그 모달창 입니다.'
      }
    },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <WindowModalDialog {...args} />
  </BrowserRouter>
);

export const WindowModalDialogBlock = Template.bind({});

WindowModalDialogBlock.args = {};
