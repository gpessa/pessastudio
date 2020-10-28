import React from "react"
import { useGallery } from "@hooks"

import { Button, Dialog, makeStyles, Typography } from "@material-ui/core"

interface WithModalGallery {
  images: Picture[];
}

export interface WithInjectedModalGalleryProps extends Pick<ReturnType<typeof useGallery>, 'open'> {
  images: Picture[];
} 

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
  },
  previous: {
    transform: 'translateY(-50%)',
    position: 'absolute',
    top: '50%',
    left: 0,
  },
  next: {
    transform: 'translateY(-50%)',
    position: 'absolute',
    top: '50%',
    right: 0,
  },
  caption: {
    padding: theme.spacing(1)
  }
}))


const withModalGallery = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithModalGallery & WithInjectedModalGalleryProps> => ({
  images,
  ...props
}: WithModalGallery) => {
  const classes = useStyles()
  const { showPreviousEnabled, showNextEnabled, showPrevious, showNext, active, close, open } = useGallery(images)

  return (
    <>
      <Component {...props as P} images={images} open={open}/>

      <Dialog open={!!active} onClose={close} >
        {active && (
          <>
            <img className={classes.image} src={active.src} />

            {showPreviousEnabled &&
              <Button color="primary" className={classes.previous} onClick={showPrevious}>
                PREV
              </Button>
            }

            {showNextEnabled &&
              <Button color="primary" className={classes.next} onClick={showNext}>
                NEXT
              </Button>
            }
            
            {active.caption && <Typography variant="caption" className={classes.caption}>{active.caption}</Typography>}
          </>
        )}
      </Dialog>
    </>
  )
}

export default withModalGallery