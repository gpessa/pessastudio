import { useState } from "react";

const useGallery: (
  pictures: Picture[]
) => {
  active: Picture | null;
  showPreviousEnabled: boolean;
  showNextEnabled: boolean;
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

  const showPreviousEnabled = (selected != null && selected > 0) ? true : false;
  const showNextEnabled = (selected != null && selected < pictures.length - 1) ? true : false;
  const active = selected != null ? pictures[selected] : null;

  return {
    showPreviousEnabled,
    showNextEnabled,
    showPrevious,
    showNext,
    active,
    close,
    open
  };
};

export default useGallery;