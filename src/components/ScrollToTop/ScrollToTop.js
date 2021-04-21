import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') return;
    console.log(pathname);
    if (pathname === '/GetAQuoteForm') {
      // console.dir(document.querySelector('.paragraph').querySelector);
      window.scrollTo(0, 2500);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
