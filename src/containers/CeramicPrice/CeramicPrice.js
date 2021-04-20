import PriceCardLayout from 'pages/Layout/PriceCardLayout';

const contents = [
  {
    id: 1,
    tagType: 'tagGold',
    tagText: 'GOLD',
    price: '1499',

    cardInfo: [
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
  },
  {
    id: 2,
    tagType: 'tagSilver',
    tagText: 'SILVER',
    price: '400',

    cardInfo: [
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
  },
  {
    id: 3,
    tagType: 'tagBronze',
    tagText: 'BRONZE',
    price: '400',

    cardInfo: [
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
  }
];

const CeramicPrice = () => {
  return (
    <PriceCardLayout
      title="Ceramic Pro Automotive Packages"
      type="title"
      icon={false}
      contents={contents}
    />
  );
};

export default CeramicPrice;
