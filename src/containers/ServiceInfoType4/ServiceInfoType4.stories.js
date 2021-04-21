import ServiceInfoType4 from './ServiceInfoType4';

export default {
  title: 'LVPS/Container/ServiceInfoType4',
  component: ServiceInfoType4,
  parameters: {
    docs: {
      description: {
        component:
          'ServiecInfoType4 컨테이너입니다. ServiceInfo 랑 다른 정보전달을 위한 컨테이너입니다'
      }
    },
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    },
    subTitle: {
      control: {
        type: 'text'
      }
    },
    imagePath: {
      control: {
        type: 'text'
      }
    },
    imageLabel: {
      control: {
        type: 'text'
      }
    },
    infoList: {
      control: {
        type: 'object'
      }
    }
  }
};

const ceramicProTopCoatInfoList = [
  'Super Hydrophobic Effect',
  'Weather & UV Resistance',
  'High Gloss Finish',
  'Anti-Graffiti',
  'Advanced Chemical Resistance',
  'Oxidation & Corrosion Resistant'
];

//template 만들기
const Template = args => <ServiceInfoType4 {...args}></ServiceInfoType4>;

//스토리 구성 객체 기본 내보내기

export const ceramicProTopCoatInfoListBlock = Template.bind({});

ceramicProTopCoatInfoListBlock.args = {
  title: 'CERAMIC PRO TOP COAT',
  children:
    'Top Coat allows the surface to stay cleaner longer as dirt and grime will not stick to it. The super hydrophobic effect of the coating will cause water to bead up and roll off the surface along with any dirt and grime. Top Coat is usually applied over 9H in the layering process. Though not as durable as 9H, it can also be applied on its own. Top Coat also enhances gloss depth further on all painted surfaces for that wet look that is often hard to attain with synthetic waxes.',
  imagePath: './assets/ceramic-pro-top-coat.png',
  mobileImagePath: './assets/mobile-ceramic-top-coat.png',
  imageLabel: 'CERAMIC PRO TOP COAT',
  infoList: ceramicProTopCoatInfoList
};
