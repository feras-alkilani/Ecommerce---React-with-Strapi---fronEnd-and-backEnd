import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
  useTheme,
  ToggleButton,
  ToggleButtonGroup,
  Rating
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../Redux/product";
import CircularProgress from "@mui/material/CircularProgress";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [open, setOpen] = React.useState(false);

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setData(newValue);
    }
  };

  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const menProductsAPI =
    "products?populate=*&filters[productCategory][$eq]=Men";
  const womenProductsAPI =
    "products?populate=*&filters[productCategory][$eq]=Women";

  const [myData, setData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetProductByNameQuery(myData);

  const [clickedProduct, setClickedProduct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 11, textAlign: "center" }}>
        <Typography>
          Error loading products. <br />
          The Error is: {error.error}
          <br />
          Please Try Again Later
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in an exclusive brand selection.
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={myData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial"
            },
            flexWrap: "wrap",
            gap: 1 // Adding gap between buttons
          }}
        >
          <ToggleButton
            className="myButton"
            sx={{ color: theme.palette.text.primary }}
            value={allProductsAPI}
            aria-label="left aligned"
          >
            All products
          </ToggleButton>
          <ToggleButton
            className="myButton"
            sx={{
              mx: "16px !important",
              color: theme.palette.text.primary
            }}
            value={menProductsAPI}
            aria-label="centered"
          >
            Men Category
          </ToggleButton>
          <ToggleButton
            className="myButton"
            sx={{ color: theme.palette.text.primary }}
            value={womenProductsAPI}
            aria-label="right aligned"
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={3}
        sx={{
          "@media (max-width: 600px)": {
            justifyContent: "center" // Center items on small screens
          }
        }}
      >
        <AnimatePresence>
          {data.data.map((item, index) => {
            return (
              <Card
                component={motion.section}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                key={index}
                sx={{
                  maxWidth: 333,
                  width: "100%", // Full width for smaller screens
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    transform: "scale(1.1) rotate(1deg)",
                    transition: "0.35s"
                  },
                  "@media (max-width: 600px)": {
                    maxWidth: "100%" // Full width for smaller screens
                  }
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={`${item.attributes.productImg.data[0].attributes.url}`}
                  title={item.attributes.productTitle}
                />
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {item.attributes.productTitle}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {`${item.attributes.productPrice} $`}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setClickedProduct(item);
                    }}
                    sx={{ textTransform: "capitalize", size: "large" }}
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartOutlinedIcon fontSize="small" />}
                  >
                    Add to Cart
                  </Button>
                  <Rating
                    name="read-only"
                    value={item.attributes.productRating}
                    precision={0.1}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </AnimatePresence>
      </Stack>
      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            ":hover": {
              transform: "rotate(180deg)",
              transition: "0.3s",
              color: "red"
            },
            position: "absolute",
            top: 16,
            right: 10
          }}
        >
          <CloseIcon />
        </IconButton>
        <ProductDetails clickedProduct={clickedProduct} />
      </Dialog>
    </Container>
  );
}
