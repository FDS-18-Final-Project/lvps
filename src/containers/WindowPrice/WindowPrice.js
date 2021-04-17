import { PriceCardLayout } from 'components/';

const contents = [
  {
    id: 1,
    iconContent: [
      { id: 1, title: 'Color Stable' },
      { id: 2, title: 'Color Stable' },
      { id: 3, title: 'Color Stable' }
    ],
    cardInfo: [
      'Complete exterior hand wash',
      'Complete interior vaccum',
      'Leather cleaning and conditioning',
      'Cleaning windows and mirrors',
      'Salt removal',
      'Cleaning door jams',
      'Wheel cleaning and tire dressing',
      'Removing bugs, tar, tree sap',
      'Claybar & iron paint decontamination',
      'Polish to add gloss to paint',
      'Compound and polish to remove scratches',
      'Paint sealant',
      'Engine cleaning and dressing',
      'Headlights polish'
    ]
  },
  {
    id: 2,
    iconContent: [
      { id: 1, title: 'Colors Stables' },
      { id: 2, title: 'Colors Stables' },
      { id: 3, title: 'Colors Stables' }
    ],
    cardInfo: [
      'Complete exterior hand wash',
      'Complete interior vaccum',
      'Leather cleaning and conditioning',
      'Cleaning windows and mirrors',
      'Salt removal',
      'Cleaning door jams',
      'Wheel cleaning and tire dressing',
      'Removing bugs, tar, tree sap'
    ]
  }
];

const WindowPrice = () => {
  return (
    <PriceCardLayout
      title="Ceramic Pro Automotive Packages"
      type="list"
      icon
      contents={contents}
    />
  );
};

export default WindowPrice;
