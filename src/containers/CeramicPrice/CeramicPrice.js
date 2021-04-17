import { PriceCardLayout } from 'components/';

const infoList = [
  [
    {
      id: 1,
      title: '4 Layers Ceramic Pro 9H',
      description: 'on all painted surfaces and trim'
    },
    {
      id: 2,
      title: '4 Layers Ceramic Pro 9H',
      description: 'on all painted surfaces and trim'
    },
    {
      id: 3,
      title: '4 Layers Ceramic Pro 9H',
      description: 'on all painted surfaces and trim'
    },
    {
      id: 4,
      title: '4 Layers Ceramic Pro 9H',
      description: 'on all painted surfaces and trim'
    }
  ]
];

const CeramicPrice = () => {
  return (
    <PriceCardLayout
      title="Ceramic Pro Automotive Packages"
      type="title"
      icon={false}
      infoList={infoList}
    />
  );
};

export default CeramicPrice;
