import HoverBox from './HoverBox'
import { BrowserRouter } from 'react-router-dom';

//스토리 구성 객체
export default {
  title: ' MMAuto/Component/HoverBox',
  components: HoverBox,
  parameters: {
    docs: {
      description: {
        component: '네비게이션 Service 탭의 호버박스입니다.'
      }
    },
    design: {
      type: 'figma',
      url: '',
    }
  },
  argTypes: {
    to: { type: 'text' },
    children: { type: 'text' },
  }
};

const Template = args => <BrowserRouter><HoverBox {...args}></HoverBox></BrowserRouter>;

//스토리 구성 객체 기본 내보내기
export const NormalHoverBox = Template.bind({});

NormalHoverBox.args = {
  to: '/',
  children: '',
};