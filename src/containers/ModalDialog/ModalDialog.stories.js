import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import ModalDialog from './ModalDialog';

export default {
  title: 'LVPS/Container/ModalDialog',
  component: ModalDialog,
  parameters: {
    docs: {
      description: {
        component: '**ModalDialog** 컨테이너는 Get a Quote에서 section 입니다.'
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
    <ModalDialog {...args} />
  </BrowserRouter>
);

export const ModalDialogBlock = Template.bind({});

ModalDialogBlock.args = {
  type: 'ceramic'
};

ModalDialogBlock.storyName = 'ModalDialog Section';
