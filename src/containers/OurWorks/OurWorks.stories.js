import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import OurWorks from './OurWorks';

export default {
  title: 'LVPS/Container/OurWorks',
  component: OurWorks,
  parameters: {
    docs: {
      description: {
        component: '**OurWorks** 컨테이너는 메인 화면의 한 section 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <OurWorks {...args} />
  </BrowserRouter>
);

export const OurWorksBlock = Template.bind({});

OurWorksBlock.args = {
  children: [<OurWorks.Title />, <OurWorks.Contents />]
};

OurWorksBlock.storyName = 'OurWorks Section';
