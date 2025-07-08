"use client";

import { Trans } from "@lingui/react/macro";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { Button, ButtonBase, Dialog, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React, { ReactNode } from "react";
import { useGallery } from "hooks";

const ButtonBackStyled = styled(ButtonBase)({
  "& > span": {
    left: 0,
    position: "absolute",
  },
  bottom: 0,
  left: 0,
  position: "absolute",
  top: 0,
  width: "50%",
});

const ButtonNextStyled = styled(ButtonBase)({
  "& > span": {
    position: "absolute",
    right: 0,
  },
  bottom: 0,
  position: "absolute",
  right: 0,
  top: 0,
  width: "50%",
});

const ImageStyled = styled(Image)(() => ({
  height: "auto",
  width: "100%",
}));

const StyledCaption = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.warm2.main,
  bottom: 0,
  color: theme.palette.common.black,
  left: 0,
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  position: "absolute",
}));

type Props = {
  render: (props: ReturnType<typeof useGallery>) => ReactNode;
  images: Picture[];
};

const ModalGallery: React.FC<Props> = ({ render, images }) => {
  const gallery = useGallery(images);

  return (
    <>
      {render(gallery)}

      {gallery.active && (
        <Dialog open={!!gallery.active} onClose={gallery.close} maxWidth="md">
          <>
            <ImageStyled
              src={gallery.active.image}
              alt=""
              width={1000}
              height={1000}
            />

            {gallery.showPreviousEnabled && (
              <ButtonBackStyled onClick={gallery.showPrevious}>
                <Button component="span" startIcon={<NavigateBefore />}>
                  <Trans>Indietro</Trans>
                </Button>
              </ButtonBackStyled>
            )}

            {gallery.showNextEnabled && (
              <ButtonNextStyled onClick={gallery.showNext}>
                <Button component="span" endIcon={<NavigateNext />}>
                  <Trans>Avanti</Trans>
                </Button>
              </ButtonNextStyled>
            )}

            {gallery.active.caption && (
              <StyledCaption variant="caption">
                {gallery.active.caption}
              </StyledCaption>
            )}
          </>
        </Dialog>
      )}
    </>
  );
};

export default ModalGallery;
