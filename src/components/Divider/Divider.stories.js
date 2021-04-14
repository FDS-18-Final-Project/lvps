import { Divider } from 'components';
import { ThemeProvider } from 'styled-components';
import theme, { colors } from 'theme/theme';
import GlobalStyle from 'styles/GlobalStyle';

//스토리 구성 객체
export default {
  title: ' LVPS/Component/Divider',
  components: Divider,
  parameters: {
    docs: {
      description: {
        component: '구분선으로 사용할 수 있는 Divider 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=830%3A224'
    }
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    margin: { control: 'text' },
    bgColor: { control: 'text' }
  }
};

const Template = (...args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Divider {...args}></Divider>
  </ThemeProvider>
);

//스토리 구성 객체 기본 내보내기
export const NormalDivider = Template.bind({});

NormalDivider.args = {
  width: 110,
  height: 4,
  margin: '45 0',
  bgColor: colors.lightGray
};
