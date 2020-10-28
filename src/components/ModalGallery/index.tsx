import React from "react"
import { useGallery } from "@hooks"

import { ButtonBase, Dialog, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
  },
  previous: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    bottom: 0,
    '& > span': {
      position: 'absolute',
      left: 0
    }
  },
  next: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    bottom: 0,
    '& > span': {
      position: 'absolute',
      right: 0
    }
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  caption: {
    padding: theme.spacing(1)
  }
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

      <Dialog open={!!gallery.active} onClose={gallery.close} maxWidth="md" >
        {gallery.active && (
          <>
            <img className={classes.image} src={gallery.active.src} />

            {gallery.showPreviousEnabled &&
              <ButtonBase className={classes.previous} onClick={gallery.showPrevious}>
                <span className={classes.label}>PREV</span>
              </ButtonBase>
            }

            {gallery.showNextEnabled &&
              <ButtonBase className={classes.next} onClick={gallery.showNext}>
                <span className={classes.label}>NEXT</span>
              </ButtonBase>
            }
            
            {gallery.active.caption && <Typography variant="caption" className={classes.caption}>{gallery.active.caption}</Typography>}
          </>
        )}
      </Dialog>
    </>
  )
}

export default ModalGallery