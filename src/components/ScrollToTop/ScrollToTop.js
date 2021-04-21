import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') return;
    console.log(pathname);
    if (pathname === '/GetAQuoteForm') {
      // console.dir(document.querySelector('.paragraph').getBoundingClientRect());
      const targetEl = document.getElementById('paragraph'); //위치를 구하고자 하는 Element
      const clientRect = targetEl.getBoundingClientRect(); //Element의 속성 값 반환
      const relativeTopPosition = clientRect.top; //Viewport 기준으로 상대적인 Y좌표 값(top margin 값)

      //절대 위치 구하기
      const scrolledTopPosition = window.pageYOffset; //window전체를 기준으로 스크롤된 길이
      const absoluteTopPosition = scrolledTopPosition + relativeTopPosition; //절대 좌표
      console.log(absoluteTopPosition);
      window.scrollTo(0, absoluteTopPosition);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
