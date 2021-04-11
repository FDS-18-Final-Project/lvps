/* eslint-disable import/no-anonymous-default-export */
import Input from './Input';

export default {
  title: 'MMAuto/Component/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          '기본적인 Input 컴포넌트입니다. type을 지정할 수 있고 label 과 children으로 placeholder를 전달 할 수 있고 id는 필수 입니다.'
      }
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['text', 'password', 'email', 'number']
      }
    },
    width: {
      control: { type: 'range', min: 50, max: 300, step: 10 }
    },
    height: {
      control: { type: 'range', min: 50, max: 300, step: 10 }
    }
  }
};

//template 만들기
const Template = args => <Input {...args}></Input>;

//스토리 구성 객체 기본 내보내기
export const defaultInput = Template.bind({});

defaultInput.args = {
  id: 'Input',
  type: 'text',
  label: '라벨',
  children: 'placeholder',
  width: 559,
  height: 50
};
