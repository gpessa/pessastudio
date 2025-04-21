import { Typography, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const DivStyles = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(30),
  marginTop: theme.spacing(3),
}));

const IndexProductsButtonGroup: React.FC<any> = ({ goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  return (
    <DivStyles>
      <Slider
        marks
        min={0}
        step={1}
        value={currentSlide}
        valueLabelDisplay="off"
        max={totalItems - slidesToShow}
        onChange={(_, currentSlide) => {
          goToSlide(currentSlide as number);
        }}
      />
      <strong>
        {currentSlide + 1}{" "}
        <Typography component={"span"}>
          / {totalItems - slidesToShow + 1}
        </Typography>
      </strong>
    </DivStyles>
  );
};

export default IndexProductsButtonGroup;
