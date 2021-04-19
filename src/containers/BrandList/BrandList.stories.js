/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import BrandList from 'containers/BrandList/BrandList';
import BrandItem from 'components/BrandItem/BrandItem';
import GlobalStyle from '../../styles/GlobalStyle';

export default {
  title: 'LVPS/Container/BrandList',
  component: BrandList,
  parameters: {
    docs: {
      description: {
        component:
          '배열을 받아 BrandItem 컴포넌트로 이루어진 로고 리스트를 만드는 BrandList 컨테이너입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=1372%3A6625'
    }
  },
  argTypes: {
    title: {
      control: 'string'
    }
  }
};

const tireList = [
  {
    id: 'tire_01',
    value: 'beyern',
    src: 'assets/img/tire_beyern.png'
  },
  {
    id: 'tire_02',
    value: 'blackrhino',
    src: 'assets/img/tire_blackrhino.png'
  },
  {
    id: 'tire_03',
    value: 'enkei',
    src: 'assets/img/tire_enkei.png'
  },
  {
    id: 'tire_04',
    value: 'fastwheels',
    src: 'assets/img/tire_fastwheels.png'
  },
  {
    id: 'tire_05',
    value: 'hre',
    src: 'assets/img/tire_hre.png'
  },
  {
    id: 'tire_06',
    value: 'vorsteiner',
    src: 'assets/img/tire_vorsteiner.png'
  },
  {
    id: 'tire_07',
    value: 'gts',
    src: 'assets/img/tire_gts.png'
  },
  {
    id: 'tire_08',
    value: 'superspeed',
    src: 'assets/img/tire_superspeed.png'
  },
  {
    id: 'tire_09',
    value: 'mandrus',
    src: 'assets/img/tire_mandrus.png'
  },
  {
    id: 'tire_10',
    value: 'tirerays',
    src: 'assets/img/tire_tirerays.png'
  },
  {
    id: 'tire_11',
    value: 'replica',
    src: 'assets/img/tire_replica.png'
  },
  {
    id: 'tire_12',
    value: 'rotiform',
    src: 'assets/img/tire_rotiform.png'
  },
  {
    id: 'tire_13',
    value: 'sparco',
    src: 'assets/img/tire_sparco.png'
  },
  {
    id: 'tire_14',
    value: 'superspeedCircle',
    src: 'assets/img/tire_superspeedCircle.png'
  }
];

const wheelList = [
  {
    id: 'wheel_01',
    value: 'wheel_bfgoodrich',
    src: 'assets/img/wheel_bfgoodrich.png'
  },
  {
    id: 'wheel_02',
    value: 'wheel_bridgestone',
    src: 'assets/img/wheel_bridgestone.png'
  },
  {
    id: 'wheel_03',
    value: 'wheel_continental',
    src: 'assets/img/wheel_continental.png'
  },
  {
    id: 'wheel_04',
    value: 'wheel_dunlop',
    src: 'assets/img/wheel_dunlop.png'
  },
  {
    id: 'wheel_05',
    value: 'wheel_yokohama',
    src: 'assets/img/wheel_yokohama.png'
  },
  {
    id: 'wheel_06',
    value: 'wheel_pirelli',
    src: 'assets/img/wheel_pirelli.png'
  },
  {
    id: 'wheel_07',
    value: 'wheel_generaltire',
    src: 'assets/img/wheel_generaltire.png'
  },
  {
    id: 'wheel_08',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png'
  },
  {
    id: 'wheel_09',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png'
  },
  {
    id: 'wheel_10',
    value: 'wheel_hankook',
    src: 'assets/img/wheel_hankook.png'
  },
  {
    id: 'wheel_11',
    value: 'wheel_uniroyal',
    src: 'assets/img/wheel_uniroyal.png'
  },
  {
    id: 'wheel_12',
    value: 'wheel_rovelo',
    src: 'assets/img/wheel_rovelo.png'
  },
  {
    id: 'wheel_13',
    value: 'wheel_kapsen',
    src: 'assets/img/wheel_kapsen.png'
  },
  {
    id: 'wheel_14',
    value: 'wheel_kumhotire',
    src: 'assets/img/wheel_kumhotire.png'
  },
  {
    id: 'wheel_15',
    value: 'wheel_michelin',
    src: 'assets/img/wheel_michelin.png'
  },
  {
    id: 'wheel_16',
    value: 'wheel_maxxis',
    src: 'assets/img/wheel_maxxis.png'
  },
  {
    id: 'wheel_17',
    value: 'wheel_nexen',
    src: 'assets/img/wheel_nexen.png'
  },
  {
    id: 'wheel_18',
    value: 'wheel_toyotires',
    src: 'assets/img/wheel_toyotires.png'
  }
];

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <BrandList {...args}>
      {args.type.map((item, idx) => (
        <BrandItem key={idx} id={item.id} value={item.value} src={item.src} />
      ))}
    </BrandList>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기

export const BrandListTire = Template.bind({});

BrandListTire.args = {
  title: 'Feature Tire Brands',
  type: tireList,
  mode: 'checkbox',
  size: 'tire'
};

export const BrandListWheel = Template.bind({});

BrandListWheel.args = {
  title: 'Feature Wheel Brands',
  type: wheelList,
  mode: 'image',
  size: 'wheel'
};
