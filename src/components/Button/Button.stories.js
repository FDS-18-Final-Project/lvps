import { Button, Icon } from 'components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

//스토리 구성 객체
export default {
  title: ' LVPS/Component/Button',
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
    styledmode: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    type: { type: 'text' },
    disabled: { control: 'boolean' },
    fullwidth: { control: 'boolean' },
    role: { type: 'text' },
    href: { type: 'text' },
    children: { type: 'text' },
    width: { control: { type: 'range', min: 50, max: 800, step: 10 }},
    height: { control: { type: 'range', min: 50, max: 800, step: 10 }},
    fontSize: { type: 'number' }, 
    padding: { type: 'text' },
    margin: { type: 'text' },
    fontWeight: { type: 'number' }
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
  styledmode: 'primary',
  type: 'button',
  disabled: false,
  fullwidth: false,
  children: 'Get a Free Quote'
};

export const SecondaryNormalButton = Template.bind({});

SecondaryNormalButton.args = {
  mode: 'button',
  styledmode: 'secondary',
  type: 'button',
  disabled: false,
  fullwidth: false,
  children: 'Get a Free Quote'
};

export const SecondaryNormalButtonDisabled = Template.bind({});

SecondaryNormalButtonDisabled.args = {
  mode: 'button',
  styledmode: 'secondary',
  type: 'button',
  disabled: true,
  fullwidth: false,
  children: 'Get a Free Quote'
};

export const PrimaryNormalLink = Template.bind({});

PrimaryNormalLink.args = {
  mode: 'link',
  styledmode: 'primary',
  fullwidth: false,
  to:'/get-a-quote',
  children: ['Get a Free Quote', <Icon type='rightArrow' color='white' />],
};

export const SecondaryNormalLink = Template.bind({});

SecondaryNormalLink.args = {
  mode: 'link',
  styledmode: 'secondary',
  fullwidth: false,
  to:'/get-a-quote',
  children: ['Get a Free Quote', <Icon type='rightArrow' color='red' />],
};

