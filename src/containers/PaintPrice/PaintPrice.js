import { PriceCardLayout } from 'components/';

const contents = [
  {
    id: 1,
    tagType: 'tagGold',
    tagText: 'Golds',
    price: '400',

    nonSelectedIdx: 7,
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
    tagType: 'tagSilver',
    tagText: 'Sliver',
    price: '600',

    nonSelectedIdx: 0,
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
    id: 3,
    tagType: 'tagRed',
    tagText: 'Golds',
    price: '400',

    nonSelectedIdx: 7,
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
  }
];

const PaintPrice = () => {
  return (
    <PriceCardLayout
      title="Paint Protection Film Package Options"
      type="list"
      icon={false}
      contents={contents}
    />
  );
};

export default PaintPrice;
