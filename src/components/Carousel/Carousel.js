import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from 'theme/theme';
import { Icon } from 'components/';
import CarouselItem from 'components/CarouselItem/CarouselItem';
import Indicator from 'components/Indicator/Indicator';

const { colors } = theme;

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
      'Amet asperiores cum velit architecto qui provident rerum! Incidunt facilis dolorum commodi consequatur quia iste? Fuga minima consectetur odit doloribus temporibus tempora quidem modi quaerat perferendis praesentium magnam, impedit dolorem velit qui nostrum! Quis asperiores consectetur tempora temporibus, similique assumenda exercitationem architecto quod ipsum!',
  },
];

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  /* align-items: center; */
  height: 570px;

  overflow: hidden;

  .indicator {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SliderContainer = styled.div`
  width: 60%;
  overflow: hidden;
`;

const Slider = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const CarouselButton = styled(Icon)`
  position: absolute;
  top: 35%;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
  cursor: pointer;
`;

const Carousel = () => {
  const TOTAL_SLIDERS = reviews.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const isMoving = useRef(false);

  const nextSlide = () => {
    if (!isMoving.current) {
      if (currentSlide >= TOTAL_SLIDERS) setCurrentSlide(0);
      else setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (!isMoving.current) {
      if (!currentSlide) setCurrentSlide(TOTAL_SLIDERS);
      else setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 1000);
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <CarouselContainer>
      <SliderContainer>
        <Slider ref={slideRef}>
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              name={review.name}
              model={review.model}
              colors={{ main: colors.lightGray, sub: colors.white }}
            >
              {review.review}
            </CarouselItem>
          ))}
        </Slider>
      </SliderContainer>
      <CarouselButton
        type="leftArrow"
        color={colors.white}
        direction="left"
        onClick={prevSlide}
      />
      <CarouselButton
        type="rightArrow"
        color={colors.white}
        direction="right"
        onClick={nextSlide}
      />
      <Indicator
        reviews={reviews}
        current={currentSlide}
        onChange={setCurrentSlide}
        className="indicator"
      />
    </CarouselContainer>
  );
};
export default Carousel;
