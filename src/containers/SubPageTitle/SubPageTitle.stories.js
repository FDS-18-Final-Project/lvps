import SubPageTitle from './SubPageTitle';

//스토리 구성 객체
export default {
  title: 'LVPS/Container/SubPageTitle',
  components: SubPageTitle,
  parameters: {
    docs: {
      description: {
        component: '서브 페이지 SubPageTitle 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['img', 'word']
      }
    },
    title: { type: 'text' },
    imagePath: { type: 'text' },
    desc: { type: 'text' }
  }
};

const Template = args => <SubPageTitle {...args}></SubPageTitle>;

//스토리 구성 객체 기본 내보내기
export const ImageSubPageTitleBlock = Template.bind({});

ImageSubPageTitleBlock.args = {
  type: 'img',
  title: 'Ceramic Pro',
  imagePath: '/assets/ceramicPro.png',
  desc: 'Ceramic Pro'
};

//스토리 구성 객체 기본 내보내기
export const SubPageTitleBlock = Template.bind({});

SubPageTitleBlock.args = {
  type: 'word',
  title: 'Our Services',
  desc: 'Meet Our Quality Services'
};
