import { useGallery } from "src/hooks"
import { Button, Dialog, Typography } from "@mui/material"
import { styled } from "@mui/material"
import React from "react"

interface WithModalGallery {
  images: Picture[]
}

export interface WithInjectedModalGalleryProps extends Pick<ReturnType<typeof useGallery>, "open"> {
  images: Picture[]
}

const ImgStyled = styled("img")({
  width: "100%",
})

const ButtonPreviousStyled = styled(Button)({
  transform: "translateY(-50%)",
  position: "absolute",
  top: "50%",
  left: 0,
})

const ButtonNextStyled = styled(Button)({
  transform: "translateY(-50%)",
  position: "absolute",
  top: "50%",
  right: 0,
})

const withModalGallery =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithModalGallery & WithInjectedModalGalleryProps> =>
  ({ images, ...props }: WithModalGallery) => {
    const { showPreviousEnabled, showNextEnabled, showPrevious, showNext, active, close, open } = useGallery(images)

    return (
      <>
        <Component {...(props as P)} images={images} open={open} />

        <Dialog open={!!active} onClose={close}>
          {active && (
            <>
              <ImgStyled src={active.src} />

              {showPreviousEnabled && (
                <ButtonPreviousStyled color="primary" onClick={showPrevious}>
                  PREV
                </ButtonPreviousStyled>
              )}

              {showNextEnabled && (
                <ButtonNextStyled color="primary" onClick={showNext}>
                  NEXT
                </ButtonNextStyled>
              )}

              {active.caption && <Typography>{active.caption}</Typography>}
            </>
          )}
        </Dialog>
      </>
    )
  }

export default withModalGallery
