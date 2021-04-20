import ServiceInfoType2 from './ServiceInfoType2';

export default {
  title: 'LVPS/Container/ServiceInfoType2',
  component: ServiceInfoType2,
  parameters: {
    docs: {
      description: {
        component:
          'ServiecInfoType2 컨테이너입니다. ServiceInfo 랑 다른 정보전달을 위한 컨테이너입니다'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=1739%3A18617'
    }
  },
  argTypes: {
    mode: {
      control: {
        type: 'radio',
        options: ['left', 'right']
      }
    }
  }
};
const ProtectionPaintFilmVinyLInfoList = [
  'Super Hydrophobic Effect',
  'Weather & UV Resistance',
  'High Gloss Finish',
  'Anti-Graffiti',
  'Advanced Chemical Resistance',
  'Oxidation & Corrosion Resistance'
];
const ceramicPro9HInfoList = [
  'Scratch Resistance (Above 9H)',
  'Super Hydrophobic Effect',
  'Weather & UV Resistance',
  'Thermal Resistance (up to 1200°C)',
  'Anti-Graffiti',
  'Advanced Chemical Resistance',
  'Oxidation & Corrosion Resistant',
  'High Gloss Finish'
];
const carbonFilmInfoList = [
  '5 Year Warranty',
  'Great solar performance with advanced UV protection',
  'No metal layers to cause interference with cell phone/radio'
];

const ceramicFilmInfoList = [
  'Lifetime Warranty',
  'Proprietary non-metallized, nonconductive nano-ceramic technology maximizes heat and ultraviolet rejection, keeping you and your vehicle cool and helping to protect from the damaging effects of the sun.'
];
//template 만들기
const Template = args => <ServiceInfoType2 {...args}></ServiceInfoType2>;

//스토리 구성 객체 기본 내보내기
export const ProtectionPaintFilmVinyLBlock = Template.bind({});

ProtectionPaintFilmVinyLBlock.args = {
  mode: 'left',
  title: 'PAINT PROTECTION FILM & VINYL',
  children:
    'Ceramic Pro PPF & Vinyl was designed as a protective coating for polyurethane film and vinyl. It protects from contamination and weathering resulting in film that is much easier to clean. It also helps reduce vinyl’s orange peel look. The complete protection program involves a base coat and top coat application.',
  subTitle: 'CERAMIC PRO PPF & VINYL',
  imagePath: './assets/service-info-image.png',
  imageLabel: 'Ceramic pro top coat',
  infoList: ProtectionPaintFilmVinyLInfoList
};

export const CeramicPro9HBlock = Template.bind({});

CeramicPro9HBlock.args = {
  mode: 'right',
  title: 'CERAMIC PRO 9H',
  children:
    'Ceramic Pro 9H forms a permanent bond with the surface and will not wash off or break down. Ceramic Pro 9H can only be removed by abrasion. It is a highly durable protective coating that protects your paintwork from damaging contaminants. 9H can be applied in multiple layers which means the thickness of the coating can be increased with additional layers allowing a thicker/harder coating with improved scratch resistance.',
  imagePath: './assets/ceramicpro9h.png',
  imageLabel: 'Ceramic prop 9h',
  infoList: ceramicPro9HInfoList
};

export const HowToCareBlock = Template.bind({});

HowToCareBlock.args = {
  mode: 'right',
  title: 'HOW TO CARE OF YOUR COATED VEHICLE',
  subTitle: 'AFTER CARE',
  children:
    'Ceramic Pro is designed to protect your factory clear coat, to provide a protective shield against the elements and to keep your vehicle looking new always. To maximize the effects of Ceramic Pro and to ensure your investment is long lasting, a few basic maintenance steps should be taken. We recommend maintaining your coating with Ceramic Pro After Care.',
  imagePath: './assets/how-to-care.png',
  imageLabel: 'ceramic pro coating bottle'
};

export const CarbonFilmBlock = Template.bind({});

CarbonFilmBlock.args = {
  mode: 'left',
  title: 'Carbon Film',
  subTitle: 'Non-Metal / Fading, Color Stable, Dyed',
  imagePath: './assets/carbon-film.png',
  imageLabel: 'A Car with Carbon Film applied',
  infoList: carbonFilmInfoList
};

export const CeramicFilmBlock = Template.bind({});

CeramicFilmBlock.args = {
  mode: 'left',
  title: 'Ceramic Film',
  subTitle: 'Non-Metal, Maximum Heat Rejection',
  imagePath: './assets/ceramic-film.png',
  imageLabel: 'A Car with Ceramic Film applied',
  infoList: ceramicFilmInfoList
};
