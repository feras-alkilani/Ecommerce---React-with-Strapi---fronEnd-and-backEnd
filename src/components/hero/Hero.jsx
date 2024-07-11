import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Link,
  useMediaQuery,
  Button,
  useTheme
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";

const Banner = ({ imgSrc, title, subtitle, description }) => (
  <Box sx={{ position: "relative" }}>
    <img width="100%" src={imgSrc} alt={title} />
    <Stack
      sx={{
        position: "absolute",
        top: "40%",
        padding: { xs: "16px", sm: "36px" },
        transform: "translateY(-50%)"
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: "#2b3445", fontSize: { xs: "20px", sm: "32px" } }}
      >
        {title}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: "#2b3445",
          lineHeight: "20px",
          mt: 1,
          fontSize: { xs: "18px", sm: "26px" }
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "#2b3445", fontSize: { xs: "14px", sm: "20px" } }}
      >
        {description}
      </Typography>
      <Link
        sx={{
          color: "#2b3445",
          display: "flex",
          alignItems: "center",
          lineHeight: "20px",
          gap: "5px",
          transition: "0.2s",
          mt: 1,
          "&:hover": {
            color: "#d23f57"
          }
        }}
        href="#"
        underline="none"
      >
        Shop Now
        <ArrowForward sx={{ fontSize: "13px" }} />
      </Link>
    </Stack>
  </Box>
);

const SlideContent = ({ imgSrc, title, subtitle, sale, description }) => (
  <Box sx={{ position: "relative" }}>
    <img src={imgSrc} alt={title} />
    <Box
      sx={{
        position: { xs: "static", sm: "absolute" },
        left: { sm: "10%" },
        top: { sm: "20%" },
        textAlign: { xs: "center", sm: "left" },
        p: { xs: 2, sm: 0 }
      }}
    >
      <Typography
        sx={{ color: "#222", fontSize: { xs: "16px", sm: "24px" } }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#222",
          fontWeight: "400",
          my: 1,
          fontSize: { xs: "20px", sm: "32px" }
        }}
        variant="h3"
      >
        {subtitle}
      </Typography>
      <Stack
        sx={{
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center", sm: "flex-start" },
          direction: "row",
          textAlign: { xs: "center", sm: "left" }
        }}
      >
        <Typography
          color="#333"
          mr={1}
          variant="h4"
          sx={{ fontSize: { xs: "18px", sm: "24px" } }}
        >
          SALE UP TO
        </Typography>
        <Typography
          color="#D23F57"
          variant="h4"
          sx={{ fontSize: { xs: "18px", sm: "24px" } }}
        >
          {sale}
        </Typography>
      </Stack>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "300",
          my: 1,
          fontSize: { xs: "14px", sm: "16px" }
        }}
        variant="body1"
      >
        {description}
      </Typography>
      <Button
        sx={{
          px: 3,
          py: 1,
          mt: 2,
          bgcolor: "#222",
          boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
          color: "#fff",
          fontSize: { xs: "14px", sm: "16px" },
          "&:hover": {
            backgroundColor: "#151515",
            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)"
          }
        }}
        variant="contained"
      >
        Shop Now
      </Button>
    </Box>
  </Box>
);

export default function Hero() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const banners = [
    {
      imgSrc: "./images/banner-15.jpg",
      title: "LIFESTYLE COLLECTION",
      subtitle: "MEN",
      sale: "30% OFF",
      description: "Get Free shipping on orders over $99.00"
    },
    {
      imgSrc: "./images/banner-25.jpg",
      title: "LIFESTYLE COLLECTION",
      subtitle: "WOMEN",
      sale: "30% OFF",
      description: "Get Free shipping on orders over $99.00"
    }
  ];

  const sideBanners = [
    {
      imgSrc: "./images/banner-17.jpg",
      title: "New Arrivals",
      subtitle: "SUMMER",
      description: "Sale 20% Off"
    },
    {
      imgSrc: "./images/banner-16.jpg",
      title: "Gaming 4K",
      subtitle: "Desktop &",
      description: "Laptops"
    }
  ];

  return (
    <Container>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
          mt: { xs: 4, md: 4 }
        }}
      >
        <Swiper
          loop={true}
          pagination={{ dynamicBullets: true }}
          className="mySwiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide
              key={index}
              className="parent-slider"
              sx={{ cursor: "grab" }}
            >
              <SlideContent {...banner} />
            </SwiperSlide>
          ))}
        </Swiper>
        {isMdUp && (
          <Box sx={{ display: "block", minWidth: "26.6%" }}>
            {sideBanners.map((banner, index) => (
              <Banner key={index} {...banner} />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
}
