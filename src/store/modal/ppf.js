import createModalAction from '../../utils/createModalAction';
import createModalReducer from '../../utils/createModalReducer';

const SINGLE_TOGGLE_ACTIVE = 'ppf/SINGLE_TOGGLE_ACTIVE';
const MULTI_TOGGLE_ACTIVE = 'ppf/MULTI_TOGGLE_ACTIVE';
const RESET = 'ppf/RESET';

export const [
  ppfSingleToggleActive,
  ppfMultiToggleActive,
  ppfReset
] = createModalAction(SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET);

const ppfData = {
  label: 'Paint Protection Film Product Options',
  title: 'Paint Protection Film Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        id: 1,
        active: false,
        option: 'Platinum',
        price: 1499,
        info: [
          {
            id: 1,
            description: 'Full Front & Rear Bumpers'
          },
          {
            id: 2,
            description: 'Full Hood, Fenders, Roof, Trunk'
          },
          {
            id: 3,
            description: 'Full Door Panels'
          },
          {
            id: 4,
            description: 'Full Quarter & Pillar Panels'
          },
          {
            id: 5,
            description: 'Mirror Covers'
          },
          {
            id: 6,
            description: 'Headlights & Fog Lights'
          }
        ]
      },
      {
        id: 2,
        active: false,
        option: 'Gold',
        price: 899,
        info: [
          {
            id: 1,
            description: 'Full Front Bumper'
          },
          {
            id: 2,
            description: 'Full Hood & Fenders'
          },
          {
            id: 3,
            description: 'Mirror Covers'
          },
          {
            id: 4,
            description: 'Headlights & Fog Lights'
          }
        ]
      },
      {
        id: 3,
        active: false,
        option: 'Silver',
        price: 599,
        info: [
          {
            id: 1,
            description: 'Full Front Bumper'
          },
          {
            id: 2,
            description: 'Hood & Fenders 18″'
          },
          {
            id: 3,
            description: 'Mirror Covers'
          },
          {
            id: 4,
            description: 'Headlights & Fog Lights'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Paint Protection OPTIONS',
    contents: [
      {
        id: 1,
        active: false,
        color: 'red_05',
        option: '',
        price: '250',
        info: ["18'' HOOD AND FENDERS"]
      },
      {
        id: 2,
        active: false,
        color: 'red_05',
        option: '',
        price: '300',
        info: ["24'' HOOD AND FENDERS"]
      },
      {
        id: 3,
        active: false,
        color: 'red_05',
        option: '',
        price: '80',
        info: ['Trunk Strip Paint Protection Coverage']
      },
      {
        id: 4,
        active: false,
        color: 'red_05',
        option: '',
        price: '250',
        info: ['Rocker Panel Paint Protection coverage']
      },
      {
        id: 5,
        active: false,
        color: 'red_05',
        option: '',
        price: '150',
        info: ['Front Headlight Paint Protection Coverage']
      },
      {
        id: 6,
        active: false,
        color: 'red_05',
        option: '',
        price: '600',
        info: ['Full Bumper Paint Protection Coverage']
      },
      {
        id: 7,
        active: false,
        color: 'red_05',
        option: '',
        price: '600',
        info: ['Full Hood Paint Protection Coverage']
      },
      {
        id: 8,
        active: false,
        color: 'red_05',
        option: '',
        price: '300',
        info: ['Pillars Paint Protection Coverage(A-PILLARS AND FRONT OF ROOF)']
      }
    ]
  }
};

const ppfReducer = createModalReducer('ppf', ppfData);

export default ppfReducer;
