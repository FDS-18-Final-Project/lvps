import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addService } from 'store/service/service';

const useModalSelected = (
  modalState,
  single,
  multi,
  onChange,
  confirmCheck
) => {
  const modalData = useSelector(state => state[modalState]);

  const dispatch = useDispatch();

  const onlyOneSelected = e => {
    if (!e.target.closest('div').dataset.name) return;

    const {
      dataset: { name },
      id
    } = e.target.closest('div');

    dispatch(single(id, name));
  };

  const multiSelected = e => {
    if (!e.target.closest('div').dataset.name) return;

    const {
      dataset: { name },
      id
    } = e.target.closest('div');

    dispatch(multi(id, name));
  };

  const addServices = (key, firstPackage, secondPackage, thirdPackage) => {
    return () => {
      const selectedItem = [
        ...firstPackage.contents.filter(content => content.active),
        ...(secondPackage?.contents?.filter(content => content.active) || []),
        ...(thirdPackage?.contents?.filter(content => content.active) || [])
      ].map(item => ({ price: item.price, name: item.option }));

      dispatch(addService(selectedItem, key));
      onChange();
      confirmCheck();
    };
  };

  const checkActive = (firstPackage, secondPackage, thirdPackage) => {
    const selectedItem = [
      ...firstPackage.contents.filter(content => content.active),
      ...(secondPackage?.contents?.filter(content => content.active) || []),
      ...(thirdPackage?.contents?.filter(content => content.active) || [])
    ];

    return !selectedItem.length;
  };

  const totalPrice = (firstPackage, secondPackage, thirdPackage) => {
    const selectedItem = [
      ...firstPackage.contents.filter(content => content.active),
      ...(secondPackage?.contents?.filter(content => content.active) || []),
      ...(thirdPackage?.contents?.filter(content => content.active) || [])
    ];

    return selectedItem.reduce((acc, cur) => acc + cur.price, 0);
  };

  useEffect(() => {
    const closeModal = e => {
      if (!e.target.matches('.dim')) return;
      onChange();
    };
    document.body.addEventListener('click', closeModal);

    return () => {
      document.body.removeEventListener('click', closeModal);
    };
  });

  return {
    modalData,
    onlyOneSelected,
    multiSelected,
    addServices,
    checkActive,
    totalPrice
  };
};

export default useModalSelected;
