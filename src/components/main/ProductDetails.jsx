import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ProductDetails({ clickedProduct }) {
  const images = clickedProduct.attributes.productImg.data;
  const [bigImgID, setBigImgID] = useState(0);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setBigImgID(newAlignment);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 2.5,
        p: 3,
        textAlign: { xs: "center", md: "left" }
      }}
    >
      <Box>
        <img
          width="100%"
          height="auto"
          src={
            clickedProduct.attributes.productImg.data[bigImgID].attributes.url
          }
          alt="Main Product"
          style={{ borderRadius: 5, maxWidth: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          {clickedProduct.attributes.productTitle}
        </Typography>
        <Typography my={0.4} fontSize="22px" color="crimson" variant="h6">
          {clickedProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1" my={1}>
          {clickedProduct.attributes.productDescription}
        </Typography>
        <Stack
          direction="row"
          gap={1}
          my={2}
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
            flexWrap: "wrap"
          }}
        >
          <ToggleButtonGroup
            value={bigImgID}
            exclusive
            onChange={handleAlignment}
            sx={{
              ".Mui-selected": {
                opacity: 1,
                border: "1px solid royalblue !important"
              },
              display: "flex",
              flexWrap: "wrap",
              gap: 1 // Adding gap between buttons
            }}
          >
            {images.map((item, index) => (
              <ToggleButton
                key={index}
                value={index}
                sx={{
                  flex: "1 1 calc(33.33% - 8px)", // Flex basis with margin adjustment
                  maxWidth: 110,
                  height: 110,
                  p: 0,
                  opacity: 0.5,
                  transition: "0.35s",
                  "&:hover": {
                    opacity: 1
                  },
                  borderRadius: "10px !important",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    img: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px !important"
                    }
                  }}
                >
                  <img
                    src={item.attributes.url}
                    alt={`Product Thumbnail ${index + 1}`}
                  />
                </Box>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>
        <Button
          sx={{ textTransform: "capitalize", mt: 2 }}
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}
