/* eslint-disable import/no-anonymous-default-export */
import Input from './Input';

//스토리 구성 객체
export default {
  // 사이드 바에 표시할 컴포넌트 시스템
  title: 'Form 디자인 | Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          '**툴팁** 컴포넌트는 이벤트를 트리거 하는 방식으로 사용자와 상호작용(interaction) 하여 제어(contorl) 하는 그래픽 컨트롤입니다.'
      }
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['email', 'password', 'text']
      }
    },
    inputed: {
      control: {
        type: 'select',
        options: ['normal', 'inputed']
      }
    },
    visible: {
      control: {
        type: 'select',
        options: ['Default', 'true', 'false']
      }
    },
    invalid: {
      control: {
        type: 'boolean'
      }
    }
  }
};

//template 만들기
const Template = args => <Input {...args}></Input>;

//스토리 구성 객체 기본 내보내기
export const EmailInput = Template.bind({});

EmailInput.args = {
  type: 'email'
};

export const EmailInputed = Template.bind({});

EmailInputed.args = {
  type: 'email',
  inputed: 'inputed',
  children: 'hello'
};

export const InvalidEmailInput = Template.bind({});

InvalidEmailInput.args = {
  type: 'email',
  invalid: true
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  type: 'password'
};

export const PasswordVisibleInputed = Template.bind({});

PasswordVisibleInputed.args = {
  type: 'password',
  visible: 'true',
  inputed: 'inputed',
  children: 'hello'
};

export const InvalidPasswordInputed = Template.bind({});

InvalidPasswordInputed.args = {
  type: 'password',
  visible: 'true',
  inputed: 'inputed',
  children: 'hello',
  invalid: true
};

export const PasswordInvisibleInputed = Template.bind({});

PasswordInvisibleInputed.args = {
  type: 'password',
  visible: 'false',
  inputed: 'inputed',
  children: 'hello'
};
