const TOGGLE_ACTIVE = 'wheel/TOGGLE_ACTIVE';
const RESET = 'wheel/RESET';

export const wheelAndTiretoggleActive = (id, name) => ({
  type: TOGGLE_ACTIVE,
  id,
  name
});
export const wheelAndTireReset = () => ({ type: RESET });

const wheelAndTire = {
  wheelList: [
    {
      id: 'wheel_01',
      value: 'wheel_bfgoodrich',
      src: 'assets/img/wheel_bfgoodrich.png',
      active: false
    },
    {
      id: 'wheel_02',
      value: 'wheel_bridgestone',
      src: 'assets/img/wheel_bridgestone.png',
      active: false
    },
    {
      id: 'wheel_03',
      value: 'wheel_continental',
      src: 'assets/img/wheel_continental.png',
      active: false
    },
    {
      id: 'wheel_04',
      value: 'wheel_dunlop',
      src: 'assets/img/wheel_dunlop.png',
      active: false
    },
    {
      id: 'wheel_05',
      value: 'wheel_yokohama',
      src: 'assets/img/wheel_yokohama.png',
      active: false
    },
    {
      id: 'wheel_06',
      value: 'wheel_pirelli',
      src: 'assets/img/wheel_pirelli.png',
      active: false
    },
    {
      id: 'wheel_07',
      value: 'wheel_generaltire',
      src: 'assets/img/wheel_generaltire.png',
      active: false
    },
    {
      id: 'wheel_08',
      value: 'wheel_gislaved',
      src: 'assets/img/wheel_gislaved.png',
      active: false
    },
    {
      id: 'wheel_09',
      value: 'wheel_gislaved',
      src: 'assets/img/wheel_gislaved.png',
      active: false
    },
    {
      id: 'wheel_10',
      value: 'wheel_hankook',
      src: 'assets/img/wheel_hankook.png',
      active: false
    },
    {
      id: 'wheel_11',
      value: 'wheel_uniroyal',
      src: 'assets/img/wheel_uniroyal.png',
      active: false
    },
    {
      id: 'wheel_12',
      value: 'wheel_rovelo',
      src: 'assets/img/wheel_rovelo.png',
      active: false
    },
    {
      id: 'wheel_13',
      value: 'wheel_kapsen',
      src: 'assets/img/wheel_kapsen.png',
      active: false
    },
    {
      id: 'wheel_14',
      value: 'wheel_kumhotire',
      src: 'assets/img/wheel_kumhotire.png',
      active: false
    },
    {
      id: 'wheel_15',
      value: 'wheel_michelin',
      src: 'assets/img/wheel_michelin.png',
      active: false
    },
    {
      id: 'wheel_16',
      value: 'wheel_maxxis',
      src: 'assets/img/wheel_maxxis.png',
      active: false
    },
    {
      id: 'wheel_17',
      value: 'wheel_nexen',
      src: 'assets/img/wheel_nexen.png',
      active: false
    },
    {
      id: 'wheel_18',
      value: 'wheel_toyotires',
      src: 'assets/img/wheel_toyotires.png',
      active: false
    }
  ],
  tireList: [
    {
      id: 'tire_01',
      value: 'beyern',
      src: 'assets/img/tire_beyern.png',
      active: false
    },
    {
      id: 'tire_02',
      value: 'blackrhino',
      src: 'assets/img/tire_blackrhino.png',
      active: false
    },
    {
      id: 'tire_03',
      value: 'enkei',
      src: 'assets/img/tire_enkei.png',
      active: false
    },
    {
      id: 'tire_04',
      value: 'fastwheels',
      src: 'assets/img/tire_fastwheels.png',
      active: false
    },
    {
      id: 'tire_05',
      value: 'hre',
      src: 'assets/img/tire_hre.png',
      active: false
    },
    {
      id: 'tire_06',
      value: 'vorsteiner',
      src: 'assets/img/tire_vorsteiner.png',
      active: false
    },
    {
      id: 'tire_07',
      value: 'gts',
      src: 'assets/img/tire_gts.png',
      active: false
    },
    {
      id: 'tire_08',
      value: 'superspeed',
      src: 'assets/img/tire_superspeed.png',
      active: false
    },
    {
      id: 'tire_09',
      value: 'mandrus',
      src: 'assets/img/tire_mandrus.png',
      active: false
    },
    {
      id: 'tire_10',
      value: 'tirerays',
      src: 'assets/img/tire_rays.png',
      active: false
    },
    {
      id: 'tire_11',
      value: 'replica',
      src: 'assets/img/tire_replika.png',
      active: false
    },
    {
      id: 'tire_12',
      value: 'rotiform',
      src: 'assets/img/tire_rotiform.png',
      active: false
    },
    {
      id: 'tire_13',
      value: 'sparco',
      src: 'assets/img/tire_sparco.png',
      active: false
    },
    {
      id: 'tire_14',
      value: 'superspeedCircle',
      src: 'assets/img/tire_superspeedCircle.png',
      active: false
    }
  ]
};

const wheelAndTireReducer = (state = wheelAndTire, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return {
        ...state,
        [action.name]: state[action.name].map(item =>
          item.id === action.id ? { ...item, active: !item.active } : item
        )
      };
    case RESET:
      return wheelAndTire;
    default:
      return state;
  }
};

export default wheelAndTireReducer;
