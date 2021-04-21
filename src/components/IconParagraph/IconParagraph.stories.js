/* eslint-disable import/no-anonymous-default-export */
import GlobalStyle from 'styles/GlobalStyle';
import { colors, calcRem } from 'theme/theme';
import IconParagraph from './IconParagraph';

export default {
  title: 'LVPS/Component/IconParagraph',
  component: IconParagraph,
  parameters: {
    docs: {
      description: {
        component:
          'contents, iconcolor를 받아 IconParagraph 컴포넌트를 만들어줍니다.'
      }
    }
  },
  argTypes: {
    content: {
      control: {
        type: 'string'
      }
    },
    iconType: {
      control: {
        type: 'select',
        options: ['likeCircle', 'facebook', 'instagram']
      }
    },
    iconcolor: {
      control: {
        type: 'select',
        options: [colors.red_05, colors.green]
      }
    },
    direction: {
      control: {
        type: 'radio',
        options: ['row', 'column']
      }
    },

    textAlign: {
      control: {
        type: 'object'
      }
    },
    contentWidth: {
      control: {
        type: 'string'
      }
    },
    paragraphWidth: {
      control: {
        type: 'string'
      }
    }
  }
};

const explanCeramic = {
  id: 1,
  title: 'GOOD INVESTMENT',
  content:
    'The coating will protect the vehicle’s exterior and interior from deteriorating for a lifetime. The resale market value will therefore be substantially higher! Ceramic Pro pays for itself in the end.'
};

const Template = args => (
  <>
    <GlobalStyle />
    <IconParagraph {...args} />
  </>
);

export const IconParagraphColumn = Template.bind({});

IconParagraphColumn.args = {
  direction: 'column',
  content: explanCeramic,
  iconType: 'likeCircle',
  iconcolor: colors.red_05,
  textAlign: { title: 'center', content: 'left' },
  contentWidth: '100%',
  paragraphWidth: calcRem(304)
};

IconParagraphColumn.storyName = '아이콘 설명 세로';

export const IconParagraphRow = Template.bind({});

IconParagraphRow.args = {
  direction: 'row',
  content: explanCeramic,
  iconType: 'facebook',
  iconcolor: colors.red_05,
  textAlign: { title: 'left', content: 'left' },
  contentWidth: '100%',
  paragraphWidth: calcRem(304)
};

IconParagraphRow.storyName = '아이콘 설명 가로';
