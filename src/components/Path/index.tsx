import { Step, StepContent, StepLabel, Stepper, styled } from "@mui/material";
import Th from "components/Th";
import Image, { StaticImageData } from "next/image";
import { InView } from "react-intersection-observer";
import { BREAKPOINT } from "theme";

interface Step {
  image: StaticImageData;
  text: string | JSX.Element;
}

interface Props {
  steps: Step[];
}

const StepperStyled = styled(Stepper)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up(BREAKPOINT)]: {
    transform: "translateX(-14px)",
    marginLeft: "50%",
  },
}));

const StyledTh = styled(Th)<{ even: boolean }>(({ theme, even }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: even && {
    transform: "translateX(-100%)",
    marginLeft: "-40px",
    textAlign: "right",
  },
}));

const StyledImage = styled(Image)<{ even: boolean }>(({ theme, even }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: even && {
    transform: "translateX(-100%)",
    marginLeft: "-40px",
    textAlign: "right",
  },
}));

const Path = ({ steps }: Props) => {
  return (
    <StepperStyled orientation="vertical">
      {steps.map(({ text, image }, index) => (
        <InView key={index}>
          {({ inView }) => (
            <Step key={index} active={inView} expanded={true}>
              <StepLabel>
                <StyledTh variant="h5" sans even={index % 2 == 0}>
                  {text}
                </StyledTh>
              </StepLabel>
              <StepContent>
                <StyledImage src={image} even={index % 2 == 0} alt="" />
              </StepContent>
            </Step>
          )}
        </InView>
      ))}
    </StepperStyled>
  );
};

export default Path;
