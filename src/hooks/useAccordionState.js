import { useState } from 'react';

const useAccordionState = accordionState => {
  const [accordion, setAccordion] = useState(accordionState);

  const handleClick = id => {
    setAccordion(
      accordion.map(item =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  return [accordion, handleClick];
};

export default useAccordionState;
