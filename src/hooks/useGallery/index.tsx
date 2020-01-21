import { useState } from "react";

const useGallery: (
  pictures: Picture[]
) => {
  active: Picture | null;
  showPreviousDisabled: boolean;
  showNextDisabled: boolean;
  showPrevious: () => void;
  showNext: () => void;
  close: () => void;
  open: (picture: Picture) => void;
  } = pictures => {
  const [selected, setSelected] = useState<null | number>(null);

  const close = () => setSelected(null);

  const open = (picture: Picture) => {
    const index = pictures.indexOf(picture);
    setSelected(index);
  };

  const showNext = () => setSelected(setSelected => setSelected! + 1);

  const showPrevious = () => setSelected(setSelected => setSelected! - 1);

  const showPreviousDisabled = selected! > 0 ? false : true;
  const showNextDisabled = selected! < pictures.length - 1 ? false : true;
  const active = selected != null ? pictures[selected] : null;

  return {
    showPreviousDisabled,
    showNextDisabled,
    showPrevious,
    showNext,
    active,
    close,
    open
  };
};

export default useGallery;