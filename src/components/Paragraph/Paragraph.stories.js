import Paragraph from './Paragraph';

export default {
  title: 'MMAuto/UI/Paragraph',
  Component: Paragraph,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68',
    },
  },
  argTypes: {
    title: {
      description: '타이틀',
    },
    type: {
      description: '문단 종류',
      control: {
        type: 'select',
        options: ['normal', 'list', 'title'],
      },
    },
    headingNumber: {
      description: '해딩 타입',
      control: {
        type: 'select',
        options: [1, 2, 3],
      },
    },
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'blabla',
  type: 'normal',
  headingNumber: 3,
  children: '내용이 들어갈 자리',
};

export const List = Template.bind({});
List.args = {
  title: 'blabla',
  type: 'list',
  headingNumber: 3,
  items: ['첫 번째', '두 번째'],
};

export const Title = Template.bind({});
Title.args = {
  title: 'blabla',
  type: 'title',
  headingNumber: 1,
  children: '내용이 들어갈 자리',
  colors: { main: 'black', sub: 'gray' },
};
