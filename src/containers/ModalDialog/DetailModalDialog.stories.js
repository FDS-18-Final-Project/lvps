import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import DetailModalDialog from './DetailModalDialog';

export default {
  title: 'LVPS/Container/DetailModalDialog',
  component: DetailModalDialog,
  parameters: {
    docs: {
      description: {
        component:
          '**DetailModalDialog** 컨테이너는 Get a Quote에서 사용되는 다이얼로그 모달창 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/EKoyu2bLwgDjnAIHQrCwn9/LVPS-Renewal?node-id=281%3A8339'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <DetailModalDialog {...args} />
  </BrowserRouter>
);

export const DetailModalDialogblock = Template.bind({});

DetailModalDialogblock.args = {};
