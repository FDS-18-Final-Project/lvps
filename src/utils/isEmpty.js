const isEmpty = items => {
  if (
    Object.prototype.toString.call(items).slice(8, -1).toLowerCase() ===
    'object'
  ) {
    return Object.values(items).every(item => item.length === 0);
  } else {
    return items.length === 0;
  }
};

export default isEmpty;
