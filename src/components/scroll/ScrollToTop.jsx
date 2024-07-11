import React from "react";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useScrollTrigger, Zoom } from "@mui/material";

export default function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
        size="small"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
