/* eslint-disable import/no-anonymous-default-export */
import BrandItem from 'components/BrandItem/BrandItem';
import GlobalStyle from 'styles/GlobalStyle';

export default {
  title: 'LVPS/Component/BrandItem',
  component: BrandItem,
  parameters: {
    docs: {
      description: {
        component:
          'Wheels 혹은 Tires 목록을 선택하여 브랜드 로고 목록을 보여주는 컴포넌트 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=1372%3A6625'
    }
  },
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: ['image', 'checkbox']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['wheel', 'tire']
      }
    }
  }
};

//template 만들기
const Template = args => (
  <>
    <GlobalStyle />
    <BrandItem {...args}></BrandItem>
  </>
);

//스토리 구성 객체 기본 내보내기
export const BrandItemComp = Template.bind({});

BrandItemComp.args = {
  id: 'tire_01',
  value: 'beyern',
  src: 'assets/img/tire_beyern.png',
  mode: 'checkbox',
  size: 'tire'
};
