import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        textAlign: "center"
      }}
    >
      <Typography
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#ffffff"} 
        variant="h6"
        sx={{ fontSize: { xs: 14, sm: 18 } }}
      >
        Designed and Developed By
        <Button
          sx={{
            mx: 0.5,
            fontSize: { xs: "14px", sm: "18px" },
            textTransform: "capitalize",
            color: "primary"
          }}
          variant="text"
          color="primary"
        >
          <Link
            href="https://feras-alkilani-portfolio.netlify.app/"
            underline="none"
            sx={{ color: "primary" }}
          >
            Feras Alkilani
          </Link>
        </Button>{" "}
        © 2024
      </Typography>
    </Box>
  );
}
