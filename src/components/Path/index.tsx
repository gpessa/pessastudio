import { Step, StepContent, StepLabel, Stepper } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import { BREAKPOINT } from "@theme"
import React from "react"
import { useInView } from "react-intersection-observer"
import TH from "../TH"
import { styled } from "@mui/system"

interface Step {
  image: string
  text: string | JSX.Element
}

interface Props {
  steps: Step[]
}

const useStyles = makeStyles(theme => ({
  even: {
    [theme.breakpoints.up(BREAKPOINT)]: {
      transform: "translateX(-100%)",
      marginLeft: "-40px",
      textAlign: "right",
    },
  },
}))

const StepperStyled = styled(Stepper)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up(BREAKPOINT)]: {
    transform: "translateX(-14px)",
    marginLeft: "50%",
  },
}))

const Path = ({ steps }: Props) => {
  const classes = useStyles()

  return (
    <StepperStyled orientation="vertical">
      {steps.map(({ text, image }, index) => {
        const { ref, inView } = useInView({
          threshold: 1,
        })

        return (
          <Step key={text} active={inView} expanded={true} ref={ref}>
            <StepLabel>
              <TH
                variant="h5"
                sans
                className={`
                  ${index % 2 == 0 ? classes.even : undefined}
                `}
              >
                {text}
              </TH>
            </StepLabel>
            <StepContent>
              <img src={image} className={index % 2 == 0 ? classes.even : undefined} />
            </StepContent>
          </Step>
        )
      })}
    </StepperStyled>
  )
}

export default Path
