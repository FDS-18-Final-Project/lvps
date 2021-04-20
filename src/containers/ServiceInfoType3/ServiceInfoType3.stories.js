import ServiceInfoType3 from './ServiceInfoType3';

export default {
  title: 'LVPS/Container/ServiceInfoType3',
  component: ServiceInfoType3,
  parameters: {
    docs: {
      description: {
        component:
          'ServiecInfoType3 컨테이너입니다. ServiceInfo 랑 다른 정보전달을 위한 컨테이너입니다'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=1739%3A18617'
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
    para1: {
      control: {
        type: 'text'
      }
    },
    para2: {
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
const PaintCorrectionInfoList = [
  'Scratches & Swirl Marks',
  'Paint Holograms',
  'Bird Dropping Etching',
  'Oxidation and Fading',
  'Water Spot Damage',
  'Automatic Carwash scratches'
];

//template 만들기
const Template = args => <ServiceInfoType3 {...args}></ServiceInfoType3>;

//스토리 구성 객체 기본 내보내기
export const ProtectionPaintFilmVinyLBlock = Template.bind({});

ProtectionPaintFilmVinyLBlock.args = {
  title: 'We are EXPERTS AT PAINT CORRECTION AND POLISHING',
  para1:
    "Polishing the vehicles paint permanently removes swirls and scratches. Don't get fooled with filers and waxes filling the scratches for a short period of time. After a few washes it wears off and all the scratches and swirls come back. We are trained to properly polish and correct the paint before any paint protection application. It can be hard to see all the scratches, swirls marks on your car. You can see it under special lighting like under the sunlight. Silicon free compounds must be used with a polishing machine to correct your car's paint clear coat.",
  para2:
    '1 Stage Polish to correct minor scratches and swirls starting from $300. Additional stages may be required for paint that has more scratches and swirls.',
  subTitle: 'Paint correction for the following',
  imagePath: './assets/paint-correction-and-polishing.png',
  imageLabel: 'Paint Correction And Polishing',
  infoList: PaintCorrectionInfoList
};
