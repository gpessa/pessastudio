import React from "react"

import { makeStyles, Step, StepContent, StepLabel, Stepper } from "@material-ui/core"
import { useInView } from "react-intersection-observer";
import TH from "../TH";
import { BREAKPOINT } from "@theme";

interface Step {
  image: string
  text: string
}

interface Props {
  steps: Step[]
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    [theme.breakpoints.up(BREAKPOINT)]: {
      transform: 'translateX(-14px)',
      marginLeft: '50%'
    }
  },
  even: {
    [theme.breakpoints.up(BREAKPOINT)]: {
      transform: 'translateX(-100%)',
      marginLeft: '-40px',
      textAlign: 'right',
    }
  },
  text: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  }
}));

const Path = ({ steps }: Props) => {
  const classes = useStyles()

  return (
    <Stepper orientation="vertical" className={classes.root} >
      {steps.map(({ text, image }, index) => {
        const { ref, inView } = useInView({
          threshold: 1
        });

        return (
          <Step key={text} active={inView} expanded={true} ref={ref}>
            <StepLabel>
              <TH
                variant="h5"
                sans
                className={`
                  ${(index % 2 == 0) ? classes.even : undefined}
                  ${classes.text}
                `}
              >{text}</TH>
            </StepLabel>
            <StepContent>
              <img src={image} className={(index % 2 == 0) ? classes.even : undefined} />
            </StepContent>
          </Step>
        )
      })}
    </Stepper>
  )
}

export default Path
