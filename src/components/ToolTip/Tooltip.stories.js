import Tooltip from './Tooltip';

//스토리 구성객체
export default {
  title: 'LVPS/Component/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          '**툴핍** 컴포넌트는 다른 컴포넌트의 설명 또는 타이틀을 보여줄때 쓰는 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=186%3A1'
    }
  },
  argTypes: {
    message: {
      control: {
        type: 'text'
      }
    },
    direction: {
      control: {
        type: 'text'
      }
    },
    top: {
      control: {
        type: 'text'
      }
    },
    bottom: {
      control: {
        type: 'text'
      }
    },
    left: {
      control: {
        type: 'text'
      }
    },
    right: {
      control: {
        type: 'text'
      }
    }
  }
};

//template 만들기
const Template = args => <Tooltip {...args} />;

// 스토리 구성 객체 기본 내보내기
export const TopArrowTooltip = Template.bind({});

TopArrowTooltip.args = {
  message: 'click to search',
  direction: 'top',
  id: 'searchIcon'
};
