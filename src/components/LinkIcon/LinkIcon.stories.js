import { LinkIcon } from 'components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

export default {
  title: ' MMAuto/Component/LinkIcon',
  components: LinkIcon,
  parameters: {
    docs: {
      description: {
        component:
          'LinkIcon 컴포넌트는 Icon과 Link를 합친 컴포넌트입니다. 버튼을 눌렀을시 지정된 페이지로 이동합니다'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=3%3A476'
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
        options: ['primary', 'secondary']
      }
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    role: { type: 'text' },
    href: { type: 'text' },
    children: { type: 'text' }
  }
};

const Template = args => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LinkIcon {...args}></LinkIcon>
    </ThemeProvider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const PrimaryNormalLinkIcon = Template.bind({});

PrimaryNormalLinkIcon.args = {
  mode: 'LinkA',
  styledMode: 'primary',
  disabled: false,
  fullWidth: false,
  href: '/get-a-quote',
  children: 'Get a Free Quote'
};

export const SecondaryNormalLinkIcon = Template.bind({});

SecondaryNormalLinkIcon.args = {
  mode: 'LinkA',
  styledMode: 'secondary',
  disabled: false,
  fullWidth: false,
  href: '/get-a-quote',
  children: 'Get a Free Quote'
};
