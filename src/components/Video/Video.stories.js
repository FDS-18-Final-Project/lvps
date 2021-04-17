import GlobalStyle from 'styles/GlobalStyle';
import Video from './Video';

export default {
  title: 'LVPS/Component/Video',
  component: Video,
  parameters: {
    docs: {
      description: {
        component: '**Video** 컨테이너는 각 페이지의 Video section 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=830%3A709'
    },
    argTypes: {
      videoId: {
        control: {
          type: 'text'
        }
      },
      videoTitle: {
        control: {
          type: 'text'
        }
      }
    }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <Video {...args} />
  </>
);

export const YoutubePlayer = Template.bind({});

YoutubePlayer.args = {
  videoId: 'dEHu-STjB-Q',
  videoTitle: 'service-ceramic-pro-vedio'
};

YoutubePlayer.storyName = 'YoutubePlayer';
