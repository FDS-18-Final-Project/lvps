import GlobalStyle from 'styles/GlobalStyle';
import Icon from './Icon';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/Icon',
  Component: Icon,
  parameters: {
    docs: {
      description: {
        component: '**Icon** 컴포넌트는 아이콘 사용을 위한 컴포넌트 입니다..'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=21%3A353'
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'facebook',
          'instagram',
          'rightArrow',
          'leftArrow',
          'map',
          // 'checkedCar',
          // 'clickHand',
          'close',
          'search',
          // 'searchGray',
          // 'like',
          'checked',
          'circle',
          'tagSilver',
          'tagBronze',
          'tagPlatinum',
          'tagWhite',
          'tagRed',
          'tagGold',
          'mobileMenuIcon',
          // 'goodWork',
          'likeCircle',
          'message',
          'openQuote',
          'closeQuote',
          'star',
          'circleCheck',
          'marker',
          'email',
          'phone',
          'iGL10H',
          'iglSilica',
          'iGLSoft',
          'iGLWarranty',
          'iGLWater',
          'iGLSpot',
          'iGLBus',
          'iGLCar',
          'iGLHand',
          'ceramicDollar',
          'ceramicLike',
          'ceramicCar',
          'ceramicCardPaint',
          'ceramicCardWashCar',
          'ceramicCardHand',
          'paintProtectionCustom',
          'paintProtectionDiscolouration',
          'paintProtectionFinish',
          'paintProtectionHealing',
          'paintProtectionShield',
          'paintProtectionWarranty'
        ]
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          'black',
          'white',
          'gray',
          'pink',
          'Gold',
          'Silver',
          'Bronze',
          'Platinum',
          'gray_02',
          'gray_03',
          'lightGray',
          'green',
          'redMain',
          'red_01',
          'red_02',
          'red_03',
          'red_04',
          'red_05',
          'red_06'
        ]
      }
    }
    // stroke: {
    //   control: {
    //     type: 'select',
    //     options: ['redMain', 'red_01', 'red_02', 'red_03']
    //   }
    // }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <Icon {...args} />
  </>
);

export const iconBlock = Template.bind({});
iconBlock.args = {
  type: 'facebook'
};

iconBlock.storyName = '아이콘';
