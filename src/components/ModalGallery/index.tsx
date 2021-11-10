import { useGallery } from "@hooks"
import { t } from "@lingui/macro"
import { NavigateBefore, NavigateNext } from "@mui/icons-material"
import { ButtonBase, Dialog, Button, Typography } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import React from "react"

const useStyles = makeStyles(theme => ({
  image: {
    width: "100%",
  },
  previous: {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "50%",
    "bottom": 0,
    "& > span": {
      position: "absolute",
      left: 0,
    },
  },
  next: {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "width": "50%",
    "bottom": 0,
    "& > span": {
      position: "absolute",
      right: 0,
    },
  },
  caption: {
    backgroundColor: theme.palette.common.white,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    padding: theme.spacing(1),
    position: "absolute",
    bottom: 0,
    left: 0,
  },
}))

type Props = {
  render: (props: ReturnType<typeof useGallery>) => JSX.Element
  images: Picture[]
}

const ModalGallery: React.FC<Props> = ({ render, images }) => {
  const classes = useStyles()
  const gallery = useGallery(images)

  return (
    <>
      {render(gallery)}

      <Dialog open={!!gallery.active} onClose={gallery.close} maxWidth="md">
        {gallery.active && (
          <>
            <img className={classes.image} src={gallery.active.src} />

            {gallery.showPreviousEnabled && (
              <ButtonBase
                className={classes.previous}
                onClick={gallery.showPrevious}
              >
                <Button component="span" startIcon={<NavigateBefore />}>
                  {t`Indietro`}
                </Button>
              </ButtonBase>
            )}

            {gallery.showNextEnabled && (
              <ButtonBase className={classes.next} onClick={gallery.showNext}>
                <Button component="span" endIcon={<NavigateNext />}>
                  {t`Avanti`}
                </Button>
              </ButtonBase>
            )}

            {gallery.active.caption && (
              <Typography variant="small" className={classes.caption}>
                {gallery.active.caption}
              </Typography>
            )}
          </>
        )}
      </Dialog>
    </>
  )
}

export default ModalGallery
