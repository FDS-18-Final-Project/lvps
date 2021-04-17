import { PriceCardLayout } from 'components/';

const cardInfolist = [
  [
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
  ],
  [
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
  ],
  [
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
];

const PriceTable = () => {
  return (
    <PriceCardLayout
      title="Ceramic Pro Automotive Packages"
      type="list"
      icon={false}
      infoList={cardInfolist}
    />
  );
};

export default PriceTable;
