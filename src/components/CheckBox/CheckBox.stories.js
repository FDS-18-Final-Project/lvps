/* eslint-disable import/no-anonymous-default-export */
import CheckBox from './CheckBox';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

export default {
  title: 'LVPS/Component/CheckBox',
  component: CheckBox,
  parameters: {
    docs: {
      description: {
        component:
          'Get a Quote 용 CheckBox 입니다. imagePath와 label을 전달할 수 있습니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=172%3A3347'
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <CheckBox {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const GetAQuoteCheckBox = Template.bind({});

GetAQuoteCheckBox.args = {
  imagePath: 'assets/dummy_background.png',
  label: 'Ceramic Pro'
};
