import HoverBox from './HoverBox';
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
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=356%3A2797'
    }
  },
  argTypes: {
    items: {
      type: 'array',
      seperator: [
        'Ceramic Coating',
        'Paint Protection Films',
        'Detailing & Paint Correction',
        'Window Tinting',
        'Detailing & Paint Correction'
      ]
    },
    styledMode: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'hoverBoxTheme']
      }
    },
    children: { type: 'text' }
  }
};
const HoverBoxItemVal = [
  'Ceramic Coating',
  'Paint Protection Films',
  'Detailing & Paint Correction',
  'Window Tinting',
  'Detailing & Paint Correction'
];

const Template = args => (
  <BrowserRouter>
    <HoverBox {...args}></HoverBox>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const NormalHoverBox = Template.bind({});

NormalHoverBox.args = {
  HoverBoxItems: HoverBoxItemVal,
  styledMode: 'hoverBoxTheme',
  children: 'HoverBox Item'
};
