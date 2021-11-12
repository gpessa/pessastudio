import { useGallery } from "@hooks"
import { t } from "@lingui/macro"
import { NavigateBefore, NavigateNext } from "@mui/icons-material"
import { Button, ButtonBase, Dialog, styled, Typography } from "@mui/material"
import React from "react"

const ButtonBackStyled = styled(ButtonBase)({
  "position": "absolute",
  "top": 0,
  "left": 0,
  "width": "50%",
  "bottom": 0,
  "& > span": {
    position: "absolute",
    left: 0,
  },
})

const ButtonNextStyled = styled(ButtonBase)({
  "position": "absolute",
  "top": 0,
  "right": 0,
  "width": "50%",
  "bottom": 0,
  "& > span": {
    position: "absolute",
    right: 0,
  },
})

const ImageStyled = styled("img")({
  width: "100%",
})

const StyledCaption = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  fontSize: theme.typography.small.fontSize,
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  padding: theme.spacing(1),
  position: "absolute",
  bottom: 0,
  left: 0,
}))

export type Picture = {
  src: string
  caption?: string | Element | React.ReactElement
}

type Props = {
  render: (props: ReturnType<typeof useGallery>) => JSX.Element
  images: Picture[]
}

const ModalGallery: React.FC<Props> = ({ render, images }) => {
  const gallery = useGallery(images)

  return (
    <>
      {render(gallery)}

      <Dialog open={!!gallery.active} onClose={gallery.close} maxWidth="md">
        {gallery.active && (
          <>
            <ImageStyled src={gallery.active.src} />

            {gallery.showPreviousEnabled && (
              <ButtonBackStyled onClick={gallery.showPrevious}>
                <Button component="span" startIcon={<NavigateBefore />}>
                  {t`Indietro`}
                </Button>
              </ButtonBackStyled>
            )}

            {gallery.showNextEnabled && (
              <ButtonNextStyled onClick={gallery.showNext}>
                <Button component="span" endIcon={<NavigateNext />}>
                  {t`Avanti`}
                </Button>
              </ButtonNextStyled>
            )}

            {gallery.active.caption && <StyledCaption>{gallery.active.caption}</StyledCaption>}
          </>
        )}
      </Dialog>
    </>
  )
}

export default ModalGallery
