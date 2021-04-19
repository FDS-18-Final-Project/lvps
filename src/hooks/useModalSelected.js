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
    if (!e.target.dataset.name) return;

    const {
      dataset: { name },
      id
    } = e.target;

    dispatch(single(id, name));
    // setOption({
    //   ...option,
    //   [name]: {
    //     ...option[name],
    //     contents: option[name].contents.map(content =>
    //       content.id === +id
    //         ? { ...content, active: true }
    //         : { ...content, active: false }
    //     )
    //   }
    // });
  };

  const multiSelected = e => {
    if (!e.target.dataset.name) return;
    const {
      dataset: { name },
      id
    } = e.target;

    dispatch(multi(id, name));
    // setOption({
    //   ...option,
    //   [name]: {
    //     ...option[name],
    //     contents: option[name].contents.map(content =>
    //       content.id === +id ? { ...content, active: !content.active } : content
    //     )
    //   }
    // });
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

  return { modalData, onlyOneSelected, multiSelected, addServices };
};

export default useModalSelected;
