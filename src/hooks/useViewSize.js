const { useState, useEffect } = require('react');

const useViewSize = () => {
  const [view, setView] = useState(() => {
    return window.innerWidth > 768
      ? { desktop: true, mobile: false }
      : { desktop: false, mobile: true };
  });

  useEffect(() => {
    const updateViewSize = e => {
      e.target.innerWidth > 768
        ? setView({ desktop: true, mobile: false })
        : setView({ desktop: false, mobile: true });
    };
    window.addEventListener('resize', updateViewSize);

    return () => {
      window.removeEventListener('resize', updateViewSize);
    };
  }, []);

  return view;
};

export default useViewSize;
