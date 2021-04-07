/* eslint-disable import/no-anonymous-default-export */
import Button from './Button';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/ulPDP3mkg0P6EvEddlMeqA/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)-(Copy)?node-id=3%3A476'
    }
  }
};

//스토리 구성 객체
// export default {
//   // 사이드 바에 표시할 컴포넌트 시스템
//   title: 'Form 디자인 | Button',
//   components: Button,
//   parameters: {
//     docs: {
//       description: {
//         component:
//           '**버튼** 컴포넌트는 이벤트를 트리거 하는 방식으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 그래픽 컨트롤입니다.'
//       }
//     }
//   },
//   argTypes: {
//     mode: {
//       control: {
//         type: 'select',
//         options: ['primary', 'secondary']
//       }
//     },
//     disabled: { control: 'boolean' },
//     fullWidth: { control: 'boolean' }
//   }
// };

//template 만들기
const Template = args => <Button {...args}></Button>;

//스토리 구성 객체 기본 내보내기
export const PrimaryNormalButton = Template.bind({});

PrimaryNormalButton.args = {
  children: '버튼',
  mode: 'primary'
};

export const PrimaryDisabledButton = Template.bind({});

PrimaryDisabledButton.args = {
  children: '버튼',
  mode: 'primary',
  disabled: true
};
export const SecondaryNormalButton = Template.bind({});

SecondaryNormalButton.args = {
  children: '버튼',
  mode: 'secondary'
};

export const SecondaryDisabledButton = Template.bind({});

SecondaryDisabledButton.args = {
  children: '버튼',
  mode: 'secondary',
  disabled: true
};
