import { PriceCardLayout } from 'components/';

const contents = [
  {
    id: 1,
    tagType: 'tagRed',
    tagText: 'CARBON',
    price: '899',
    iconContent: [
      { id: 1, title: 'Nont-Metal/Fading' },
      { id: 2, title: 'Color Stable' },
      { id: 3, title: 'Dyed' }
    ],
    cardInfo: ['PRIME CS™', 'Hood & Fenders 18″']
  },
  {
    id: 2,
    tagType: 'tagRed',
    tagText: 'CARBON',
    price: '899',
    iconContent: [
      { id: 1, title: 'Nont-Metal/Fading' },
      { id: 2, title: 'Color Stable' },
      { id: 3, title: 'Dyed' }
    ],
    cardInfo: ['Full Front Bumper', 'Hood & Fenders 18″']
  }
];

const WindowTintingPrice = () => {
  return (
    <PriceCardLayout
      title="Window Tinting Packages Options"
      type="list"
      icon
      maxWidth={322}
      contents={contents}
    />
  );
};

export default WindowTintingPrice;
