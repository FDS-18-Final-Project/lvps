/* eslint-disable import/no-anonymous-default-export */
import GlobalStyle from 'styles/GlobalStyle';
import Tag from './Tag';

export default {
  title: 'LVPS/Component/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Service option을 표시하는 Tag 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=642%3A2141'
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'tagGold',
          'tagSilver',
          'tagBronze',
          'tagPlatinum',
          'tagRed',
          'tagWhite'
        ]
      }
    },
    children: {
      type: 'text'
    }
  }
};

//template 만들기
const Template = args => (
  <>
    <GlobalStyle />
    <Tag {...args}></Tag>
  </>
);

//스토리 구성 객체 기본 내보내기
export const GoldTag = Template.bind({});

GoldTag.args = {
  type: 'tagGold',
  children: 'GOLD'
};
