import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 4,
    partialVisibilityGutter: 0,
  },
  tablet: { breakpoint: { max: 900, min: 600 }, items: 3 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 3 },
};

const generateDates = () => {
  const date = [];
  const today = new Date();

  for (let i = 0; i < 8; i++) {
    const futuredate = new Date();
    futuredate.setDate(today.getDate() + i);
    const formatDate = `${futuredate.getDate()} ${futuredate.toLocaleString(
      "default",
      { month: "short" }
    )}`;

    const day = futuredate
      .toLocaleString("default", { weekday: "short" })
      .toUpperCase();

    date.push({ date: formatDate, day: day });
  }
  return date;
};

const DateSelection: React.FC = () => {
  const carouselRef = useRef<any>(null);
  const dates = generateDates();
  const [selected, setSelected] = useState<string>(dates[0].date);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < dates.length - 5) {
      setCurrentIndex((prev) => prev + 1);
      carouselRef.current?.next();
    }
  };

  // Scroll to previous dates
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      carouselRef.current?.previous();
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        my="20px"
        justifyContent="space-between"
        width={{ sm: "calc(100% - 80px)", xs: "calc(100% - 60px)" }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          color="primary"
          sx={{ borderRadius: "8px" }}
        >
          <ArrowBackIosNew
            color="primary"
            sx={{ fontSize: { lg: "22px", sm: "18px", xs: "12px" } }}
          />
        </IconButton>

        {/* Date Carousel */}
        <Box
          mx="auto"
          sx={{
            width: "100%",
          }}
        >
          <Carousel
            responsive={responsive}
            arrows={false}
            ref={carouselRef}
            itemClass="item-class"
          >
            {dates.map((item, index) => (
              <Button
                key={item.date}
                variant={selected === item.date ? "contained" : "outlined"}
                onClick={() => setSelected(item.date)}
                sx={{
                  p: { lg: "18px", md: "16px", sm: "14px", xs: "12px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mx: "auto",
                  borderRadius: "8px",
                  bgcolor: selected === item.date ? "#1A2C50" : "transparent",
                  color: selected === item.date ? "white" : "#1A2C50",
                  "&:hover": {
                    bgcolor: selected === item.date ? "#1A2C50" : "#282764",
                    color: "#FFFFFF",
                  },
                }}
                disabled={index > 4 ? true : false}
              >
                <Typography variant="body1">{item.date}</Typography>
                <Typography variant="h6" fontWeight="bold">
                  {item.day}
                </Typography>
              </Button>
            ))}
          </Carousel>
        </Box>
        <IconButton
          onClick={handleNext}
          color="primary"
          sx={{ borderRadius: "8px" }}
        >
          <ArrowForwardIos
            color="primary"
            sx={{ fontSize: { lg: "22px", sm: "18px", xs: "12px" } }}
          />
        </IconButton>
      </Box>
      <Divider sx={{ my: "22px" }} />
    </>
  );
};

export default DateSelection;
