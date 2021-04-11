/* eslint-disable import/no-anonymous-default-export */
import GlobalStyle from '../../styles/GlobalStyle';
import { Carousel } from 'components/';

export default {
  title: 'MMAuto/Component/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: '배열을 받아 Carousel을 만들어주는 Carousel 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    contents: {
      control: {
        type: 'string',
        options: [
          {
            id: 1,
            name: 'ADEL GHQYEM',
            model: 'Mercedes Benz GLC300',
            review:
              'After buying my brand new car I wanted to protect it. I inquired with LVPS about Ceramic Coating. I got offered with a Ceramic Pro Silver package! I am very happy with the end results. My car looks like new after every car wash. Will definitely recommend LVPS services to everyone!',
          },
          {
            id: 2,
            name: 'Andy',
            model: 'Honda',
            review:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dicta dolores minima cumque qui vitae totam! Aliquid ut in facere obcaecati incidunt illo eum, laudantium animi corrupti, iste itaque dicta?',
          },
          {
            id: 3,
            name: 'Breanna',
            model: 'Toyota',
            review:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore vero dolorum, culpa provident exercitationem similique possimus ab ad corrupti!',
          },
          {
            id: 4,
            name: 'Conrad',
            model: 'Ford',
            review:
              'Aut corrupti quod ipsum exercitationem natus non dolore nam voluptas laborum voluptatem numquam necessitatibus hic commodi pariatur, inventore optio libero delectus! Non, corrupti similique odio expedita saepe dolore! Iusto reprehenderit, ea magnam necessitatibus doloremque provident accusantium enim incidunt ratione rerum repellendus facilis?',
          },
          {
            id: 5,
            name: 'Eavan',
            model: 'Chevrolet',
            review:
              'Incidunt facilis dolorum commodi consequatur quia iste? Fuga minima consectetur odit doloribus temporibus tempora quidem modi quaerat perferendis praesentium magnam, impedit dolorem velit qui nostrum! Quis asperiores consectetur tempora temporibus, similique assumenda exercitationem architecto quod ipsum!',
          },
        ],
      },
    },
  },
};

const reviews = [
  {
    id: 1,
    name: 'ADEL GHQYEM',
    model: 'Mercedes Benz GLC300',
    review:
      'After buying my brand new car I wanted to protect it. I inquired with LVPS about Ceramic Coating. I got offered with a Ceramic Pro Silver package! I am very happy with the end results. My car looks like new after every car wash. Will definitely recommend LVPS services to everyone!',
  },
  {
    id: 2,
    name: 'Andy',
    model: 'Honda',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dicta dolores minima cumque qui vitae totam! Aliquid ut in facere obcaecati incidunt illo eum, laudantium animi corrupti, iste itaque dicta?',
  },
  {
    id: 3,
    name: 'Breanna',
    model: 'Toyota',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore vero dolorum, culpa provident exercitationem similique possimus ab ad corrupti!',
  },
  {
    id: 4,
    name: 'Conrad',
    model: 'Ford',
    review:
      'Aut corrupti quod ipsum exercitationem natus non dolore nam voluptas laborum voluptatem numquam necessitatibus hic commodi pariatur, inventore optio libero delectus! Non, corrupti similique odio expedita saepe dolore! Iusto reprehenderit, ea magnam necessitatibus doloremque provident accusantium enim incidunt ratione rerum repellendus facilis?',
  },
  {
    id: 5,
    name: 'Eavan',
    model: 'Chevrolet',
    review:
      'Incidunt facilis dolorum commodi consequatur quia iste? Fuga minima consectetur odit doloribus temporibus tempora quidem modi quaerat perferendis praesentium magnam, impedit dolorem velit qui nostrum! Quis asperiores consectetur tempora temporibus, similique assumenda exercitationem architecto quod ipsum!',
  },
];

//template 만들기
const Template = (args) => (
  <>
    <GlobalStyle />
    <Carousel {...args} />
  </>
);

//스토리 구성 객체 기본 내보내기
export const CarouselBlock = Template.bind({});

CarouselBlock.args = {
  contents: reviews,
};

CarouselBlock.storyName = '캐러셀';
