import FromText from 'components/FromText/FromText';
import createModalAction from '../../utils/createModalAction';
import createModalReducer from '../../utils/createModalReducer';

const SINGLE_TOGGLE_ACTIVE = 'window/SINGLE_TOGGLE_ACTIVE';
const MULTI_TOGGLE_ACTIVE = 'window/MULTI_TOGGLE_ACTIVE';
const RESET = 'window/RESET';

export const [
  windowSingleToggleActive,
  windowMultiToggleActive,
  windowReset
] = createModalAction(SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET);

const windowData = {
  label: 'Window Tinting Product Options',
  title: 'Window Tinting Film Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        id: 1,
        active: false,
        color: 'red_05',
        title: <FromText title="PRIME CS ™" />,
        option: 'CARBON FILM',
        price: 250,
        info: [
          'Non-Metal / Fading, Color Stable, Dyed',
          '5 Year Warranty',
          'Great solar performance with advanced UV protection',
          'No metal layers to cause interference with cell phone/radio'
        ]
      },
      {
        id: 2,
        active: false,
        color: 'red_05',
        title: <FromText title="PRIME CS ™Hybrid Film" />,
        option: 'CARBON FILM',
        price: 250,
        info: [
          'Non-Metal / Fading, Color Stable, Dyed',
          '5 Year Warranty',
          'Great solar performance with advanced UV protection',
          'No metal layers to cause interference with cell phone/radio'
        ]
      },
      {
        id: 3,
        active: false,
        color: 'black',
        option: 'CERAMIC FILM',
        title: <FromText title="PRIME XR" />,
        price: 400,
        info: [
          'Non-Metal, Maximum Heat Rejection',
          'Lifetime Warranty',
          'Proprietary non-metallized, nonconductive nano-ceramic technology maximizes heat and ultraviolet rejection, keeping you and your vehicle cool and helping to protect from the damaging effects of the sun.'
        ]
      },
      {
        id: 4,
        active: false,
        color: 'black',
        option: 'CERAMIC FILM',
        title: <FromText title="PRIME XR PLUS™" />,
        price: 600,
        info: [
          'Non-Metal, Maximum Heat Rejection',
          'Lifetime Warranty',
          'Proprietary non-metallized, nonconductive nano-ceramic technology maximizes heat and ultraviolet rejection, keeping you and your vehicle cool and helping to protect from the damaging effects of the sun.'
        ]
      }
    ]
  }
};

const windowModal = createModalReducer('window', windowData);

export default windowModal;
