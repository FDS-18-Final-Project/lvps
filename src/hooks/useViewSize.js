const { useState, useEffect } = require('react');

const useViewSize = () => {
  const [view, setView] = useState({ desktop: true, mobile: false });

  useEffect(() => {
    window.addEventListener('resize', e => {
      e.target.innerWidth > 870
        ? setView({ desktop: true, mobile: false })
        : setView({ desktop: false, mobile: true });
    });
  }, []);

  return view;
};

export default useViewSize;
