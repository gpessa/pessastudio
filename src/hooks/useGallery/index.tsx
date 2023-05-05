import { useState } from "react";

const useGallery: (images: Picture[]) => {
  images: Picture[];
  active: Picture | null;
  showPreviousEnabled: boolean;
  showNextEnabled: boolean;
  showPrevious: () => void;
  showNext: () => void;
  close: () => void;
  open: (picture: Picture) => void;
} = (images) => {
  const [selected, setSelected] = useState<null | number>(null);

  const close = () => setSelected(null);

  const open = (picture: Picture) => {
    const index = images.indexOf(picture);
    setSelected(index);
  };

  const showNext = () => setSelected((setSelected) => setSelected! + 1);

  const showPrevious = () => setSelected((setSelected) => setSelected! - 1);

  const showPreviousEnabled = selected != null && selected > 0 ? true : false;
  const showNextEnabled =
    selected != null && selected < images.length - 1 ? true : false;
  const active = selected != null ? images[selected] : null;

  return {
    showPreviousEnabled,
    showNextEnabled,
    showPrevious,
    showNext,
    images,
    active,
    close,
    open,
  };
};

export default useGallery;
