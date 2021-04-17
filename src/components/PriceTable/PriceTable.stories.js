import GlobalStyle from 'styles/GlobalStyle';
import PriceTable from './PriceTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/PriceTable',
  Component: PriceTable,
  parameters: {
    docs: {
      description: {
        component: '**PriceTable** 컴포넌트는 제목과 내용으로 구성됩니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=928%3A51057'
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['list', 'title']
      }
    },
    // tagType: {
    //   description: 'Tag의 타입 지정',
    //   control: {
    //     type: 'select',
    //     options: [
    //       'tagGold',
    //       'tagSilver',
    //       'tagBronze',
    //       'tagPlatinum',
    //       'tagRed',
    //       'tagWhite'
    //     ]
    //   }
    // },
    icon: {
      control: {
        type: 'boolean'
      }
    },
    modal: {
      control: {
        type: 'boolean'
      }
    },
    maxWidth: {
      control: { type: 'range', min: 200, max: 500, step: 10 }
    }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <PriceTable {...args} />
  </>
);

export const ListPriceTable = Template.bind({});

ListPriceTable.args = {
  type: 'list',
  maxWidth: 322,
  content: {
    id: 1,
    tagType: 'tagSilver',
    tagText: 'Gold',
    price: '400',
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
  hover: true
};

export const TitlePriceTable = Template.bind({});

TitlePriceTable.args = {
  type: 'title',
  maxWidth: 322,
  content: {
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
  },
  hover: false
};

export const IconPriceTable = Template.bind({});

IconPriceTable.args = {
  type: 'title',
  icon: true,
  maxWidth: 322,
  content: {
    id: 1,
    tagType: 'tagSilver',
    tagText: 'Gold',
    price: '400',
    iconContent: [
      { id: 1, title: 'Color Stable' },
      { id: 2, title: 'Color Stable' },
      { id: 3, title: 'Color Stable' }
    ],
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
  hover: false
};
