/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';
import PaintProtectionFilmOptions from './PaintProtectionFilmOptions';

export default {
  title: 'LVPS/Container/PaintProtectionFilmOptions',
  component: PaintProtectionFilmOptions,
  parameters: {
    docs: {
      description: {
        component: 'Paint Protection Film Options Container 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=172%3A3347'
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <PaintProtectionFilmOptions {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const PaintProtectionFilmOptionsBlock = Template.bind({});
PaintProtectionFilmOptionsBlock.storyName =
  'Paint Protection Film Options 컨테이너';
