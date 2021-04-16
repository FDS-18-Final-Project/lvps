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
          'contents, iconColor를 받아 IconParagraph 컴포넌트를 만들어줍니다.'
      }
    }
  },
  argTypes: {
    contents: {
      control: {
        type: 'string'
      }
    },
    iconColor: {
      control: {
        type: 'string'
      }
    },
    direction: {
      control: {
        type: 'string'
      }
    }
  }
};

const explanCeramic = [
  {
    id: 1,
    title: 'GOOD INVESTMENT',
    content:
      'The coating will protect the vehicle’s exterior and interior from deteriorating for a lifetime. The resale market value will therefore be substantially higher! Ceramic Pro pays for itself in the end.'
  },
  {
    id: 2,
    title: 'LOOK NEW ALL THE TIME',
    content:
      'Once the coating is applied you will see a mirror effect, glossiness and color depth, incomparable to anything else! With proper maintenance your car’s finish will shine for many years to come.'
  },
  {
    id: 3,
    title: 'LESS MAINTENANCE',
    content:
      'The slick coated surface won’t allow dirt, brake dust and tar to stick to your paint, wheels or glass. This makes washing your vehicle less labor intensive and less frequent. Waxing is now obsolete.'
  }
];

//template 만들기
const Template = args => (
  <>
    <GlobalStyle />
    <IconParagraph {...args} />
  </>
);

//스토리 구성 객체 기본 내보내기
export const IconParagraphColumn = Template.bind({});

IconParagraphColumn.args = {
  direction: 'column',
  content: explanCeramic[0],
  iconType: 'likeCircle',
  iconColor: colors.red_05,
  textAlign: { title: 'center', content: 'left' },
  contentWidth: '100%',
  paragraphWidth: calcRem(304)
};

IconParagraphColumn.storyName = '아이콘 설명 세로';

export const IconParagraphRow = Template.bind({});

IconParagraphRow.args = {
  direction: 'row',
  content: explanCeramic[0],
  iconType: 'facebook',
  iconColor: colors.red_05,
  textAlign: { title: 'left', content: 'left' },
  contentWidth: '100%',
  paragraphWidth: calcRem(304)
};

IconParagraphRow.storyName = '아이콘 설명 가로';
