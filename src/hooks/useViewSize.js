const { useState, useEffect } = require('react');

const useViewSize = () => {
  const [view, setView] = useState({ desktop: true, mobile: false });

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
