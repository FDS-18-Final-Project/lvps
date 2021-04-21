import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import DetailingPaintPackage from './DetailingPaintPackage';

//스토리 구성 객체
export default {
  title: ' LVPS/Container/DetailingPaintPackage',
  components: DetailingPaintPackage,
  parameters: {
    docs: {
      description: {
        component: '페인팅 패키지 컨테이너 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%88%98%EC%A0%95?node-id=12%3A356'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <DetailingPaintPackage {...args}></DetailingPaintPackage>
  </BrowserRouter>
);

export const DetailingPaintPackageBlock = Template.bind({});

DetailingPaintPackageBlock.args = {};

DetailingPaintPackageBlock.storyName = '페인팅 패키지 컨테이너';
