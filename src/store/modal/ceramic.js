import createModalReducer from '../../utils/createModalReducer';
import createModalAction from '../../utils/createModalAction';

const SINGLE_TOGGLE_ACTIVE = 'ceramic/SINGLE_TOGGLE_ACTIVE';
const MULTI_TOGGLE_ACTIVE = 'ceramic/MULTI_TOGGLE_ACTIVE';
const RESET = 'ceramic/RESET';

export const [
  ceramicSingleToggleActive,
  ceramicMultiToggleActive,
  ceramicReset
] = createModalAction(SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET);

const ceramicProData = {
  label: 'Ceramic Pro Product Options',
  title: 'Ceramic Pro Product ModalDialog',
  firstPackage: {
    title: 'Ceramic Pro Protection Packages',
    contents: [
      {
        id: 1,
        option: 'Gold',
        price: 1499,
        active: false,
        info: [
          {
            id: 1,
            title: '4 Layers Ceramic Pro 9H',
            description: 'on all painted surfaces and trim'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 4,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      },
      {
        id: 2,
        option: 'Silver',
        price: 899,
        active: false,

        info: [
          {
            id: 1,
            title: '1 Layers of Ceramic Pro 9H',
            description: 'on all painted surfaces and trim'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 4,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      },
      {
        id: 3,
        option: 'Bronze',
        price: 599,
        active: false,

        info: [
          {
            id: 1,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Ceramic Pro Protection Additional Options',
    contents: [
      {
        id: 1,
        active: false,
        color: 'black',
        price: 199,
        option: 'GLASS',
        mode: 'list',
        info: ['2 Layers of "Glass" on all glass and mirrors.']
      },
      {
        id: 2,
        active: false,
        color: 'black',
        price: 399,
        option: 'WHEELS & CALIPERS PROTECTION',
        info: ['1 Layer of “Wheel & Caliper” on Wheels & Calipers.']
      },
      {
        id: 3,
        active: false,
        color: 'black',
        price: 599,
        option: 'INTERIOR PROTECTION',
        info: [
          '1 Coat of "Leather" on the high traffic area and "Textile" on the carpet floor.'
        ]
      }
    ]
  },
  thirdPackage: {
    title: 'IGL Coatings',
    priceTableType: 'helmetPriceTable',
    contents: [
      {
        id: 1,
        active: false,
        color: 'green',
        price: 400,
        option: 'IGL POLY',
        info: [
          'Premium high solids silica coating',
          '8H hardness',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 1 year'
        ]
      },
      {
        id: 2,
        active: false,
        color: 'green',
        price: 600,
        option: 'IGL QUARTZ',
        info: [
          'Premium high solids silica coating',
          '9H hardness',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 2 years'
        ]
      },
      {
        id: 3,
        active: false,
        color: 'green',
        price: 800,
        option: 'IGL QUARTZ+',
        info: [
          'Premium high solids silica coating',
          '9H hardness with improved chemical resistance',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 3 years'
        ]
      },
      {
        id: 4,
        active: false,
        color: 'green',
        price: 1200,
        option: 'IGL KENZO',
        info: [
          'Premium 100% solid hybrid silica coating',
          '10H hardness with extreme silk like slick',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 5 years'
        ]
      }
    ]
  }
};

const ceramicReducer = createModalReducer('ceramic', ceramicProData);

export default ceramicReducer;

// const multiSelected = e => {
//   if (!e.target.dataset.name) return;
//   const {
//     dataset: { name },
//     id
//   } = e.target;
//   setOption({
//     ...option,
//     [name]: {
//       ...option[name],
//       contents: option[name].contents.map(content =>
//         content.id === +id ? { ...content, active: !content.active } : content
//       )
//     }
//   });
// };
// const onlyOneSelected = e => {
//   if (!e.target.dataset.name) return;

//   const {
//     dataset: { name },
//     id
//   } = e.target;
//   setOption({
//     ...option,
//     [name]: {
//       ...option[name],
//       contents: option[name].contents.map(content =>
//         content.id === +id
//           ? { ...content, active: true }
//           : { ...content, active: false }
//       )
//     }
//   });
// };
