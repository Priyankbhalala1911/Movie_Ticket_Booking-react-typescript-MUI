import { Box, Card, CardMedia, IconButton, Paper } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Advertisemnet1, Advertisemnet2, Advertisemnet3 } from "../../assets";

const Advertisement = [Advertisemnet1, Advertisemnet2, Advertisemnet3];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 1 },
  desktop: { breakpoint: { max: 1200, min: 768 }, items: 1 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Custom Indicator Dots
const CustomDot = ({
  onClick,
  active,
}: {
  onClick?: () => void;
  active?: boolean;
}) => (
  <button
    onClick={onClick}
    style={{
      width: "clamp(8px, 1vw, 12px)",
      height: "clamp(8px, 1vw, 12px)",
      margin: "clamp(5px, 1vw, 12px)",
      borderRadius: "50%",
      backgroundColor: active ? "#FFFFFF" : "#B0B0B0", // Active: White, Inactive: Gray
      border: "none",
      cursor: "pointer",
    }}
  />
);

const CarsoulAdv: React.FC = () => {
  return (
    <Box sx={{ my: "90px", position: "relative" }}>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows
        showDots
        customDot={<CustomDot />}
        customLeftArrow={
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              zIndex: 10,
              padding: 0,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
                height: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <ArrowBackIosNew
                sx={{ fontSize: { lg: "22px", sm: "18px", xs: "12px" } }}
              />
            </Paper>
          </IconButton>
        }
        customRightArrow={
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              zIndex: 10,
              padding: 0,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
                height: { lg: "62px", md: "52px", sm: "32px", xs: "22px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <ArrowForwardIos
                sx={{ fontSize: { lg: "22px", sm: "18px", xs: "12px" } }}
              />
            </Paper>
          </IconButton>
        }
      >
        {Advertisement.map((src, index) => (
          <Card key={index}>
            <CardMedia
              component="img"
              src={src}
              alt={`Slide ${index + 1}`}
              sx={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarsoulAdv;
