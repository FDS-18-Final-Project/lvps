import { Button } from 'components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

//스토리 구성 객체
export default {
  title: ' MMAuto/Component/Button',
  components: Button,
  parameters: {
    docs: {
      description: {
        component:
          'tag 선택에 따라 button 또는 link 요소로 변경되는 버튼 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%88%98%EC%A0%95?node-id=3%3A476'
    }
  },
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: ['button', 'LinkA']
      }
    },
    styledMode: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'hoverBoxTheme']
      }
    },
    type: { type: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    role: { type: 'text' },
    href: { type: 'text' },
    children: { type: 'text' }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <Button {...args}></Button>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const PrimaryNormalButton = Template.bind({});

PrimaryNormalButton.args = {
  mode: 'button',
  styledMode: 'primary',
  type: 'button',
  disabled: false,
  fullWidth: false,
  children: 'Get a Free Quote'
};

export const SecondaryNormalButton = Template.bind({});

SecondaryNormalButton.args = {
  mode: 'button',
  styledMode: 'secondary',
  type: 'button',
  disabled: false,
  fullWidth: false,
  children: 'Get a Free Quote'
};

export const SecondaryNormalButtonDisabled = Template.bind({});

SecondaryNormalButtonDisabled.args = {
  mode: 'button',
  styledMode: 'secondary',
  type: 'button',
  disabled: true,
  fullWidth: false,
  children: 'Get a Free Quote'
};
