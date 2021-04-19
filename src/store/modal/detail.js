import createModalAction from '../../utils/createModalAction';
import createModalReducer from '../../utils/createModalReducer';

const SINGLE_TOGGLE_ACTIVE = 'detail/SINGLE_TOGGLE_ACTIVE';
const MULTI_TOGGLE_ACTIVE = 'detail/MULTI_TOGGLE_ACTIVE';
const RESET = 'detail/RESET';

export const [
  detailSingleToggleActive,
  detailMultiToggleActive,
  detailReset
] = createModalAction(SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET);

const detailAndPaintCorrectionData = {
  label: 'Detailing and Paint Correction Product Options',
  title: 'Detailing and Paint Correction Product ModalDialog',
  firstPackage: {
    title: 'Package Options',
    contents: [
      {
        id: 1,
        active: false,
        option: 'Gold',
        price: 499.99,
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          },
          {
            id: 9,
            description: 'Claybar & iron paint decontamination'
          },
          {
            id: 10,
            description: 'Compound and polish to remove scratches'
          },
          {
            id: 11,
            description: 'Polish to add gloss to paint'
          },
          {
            id: 12,
            description: 'Compound and polish to remove scratches'
          },
          {
            id: 13,
            description: 'Paint sealant'
          },
          {
            id: 14,
            description: 'Engine cleaning and dressing'
          },
          {
            id: 15,
            description: 'Headlights polish'
          }
        ]
      },
      {
        id: 2,
        active: false,
        option: 'Silver',
        price: 399.99,
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          },
          {
            id: 9,
            description: 'Claybar & iron paint decontamination'
          },
          {
            id: 10,
            description: 'Polish to add gloss to paint'
          }
        ]
      },
      {
        id: 3,
        active: false,
        option: 'Bronze',
        price: 199.99,
        info: [
          {
            id: 1,
            description: 'Complete exterior hand wash'
          },
          {
            id: 2,
            description: 'Complete interior vacuum'
          },
          {
            id: 3,
            description: 'Leather cleaning and conditioning'
          },
          {
            id: 4,
            description: 'Cleaning windows and mirrors'
          },
          {
            id: 5,
            description: 'Salt removal'
          },
          {
            id: 6,
            description: 'Cleaning door jams'
          },
          {
            id: 7,
            description: 'Wheel cleaning and tire dressing'
          },
          {
            id: 8,
            description: 'Removing bugs, tar, tree sap'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Paint Correction',
    contents: [
      {
        id: 1,
        color: 'black',
        price: 300,
        option: 'PAINT CORRECTION',
        info: ['1 Stage Polish to correct minor scratches and swirls']
      }
    ]
  }
};

const detailModalReducer = createModalReducer(
  'detail',
  detailAndPaintCorrectionData
);

export default detailModalReducer;
