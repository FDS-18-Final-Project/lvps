import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import PPFModalDialog from './PPFModalDialog';

export default {
  title: 'LVPS/Container/PPFModalDialog',
  component: PPFModalDialog,
  parameters: {
    docs: {
      description: {
        component:
          '**PPFModalDialog** 컨테이너는 Get a Quote에서 section 입니다.'
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
    <PPFModalDialog {...args} />
  </BrowserRouter>
);

export const PPFModalDialogBlock = Template.bind({});

PPFModalDialogBlock.args = {};
