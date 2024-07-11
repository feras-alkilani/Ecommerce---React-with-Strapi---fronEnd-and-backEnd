import React, { useState } from "react";
import {
  Container,
  Button,
  Menu,
  MenuItem,
  Typography,
  Box,
  IconButton,
  ListItemIcon,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerState, setDrawerState] = useState({
    top: false
  });

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: { xs: 2, sm: 5 },
        flexDirection: "row",
        gap: { xs: 2, sm: 0 }
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          startIcon={<WindowIcon />}
          sx={{
            width: { xs: "100%", sm: 222 },
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary
          }}
        >
          <Typography
            sx={{
              mx: 1,
              padding: "0",
              textTransform: "capitalize",
              flexGrow: 1,
              textAlign: "left"
            }}
          >
            Categories
          </Typography>
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button"
          }}
          PaperProps={{
            sx: {
              width: { xs: "100%", sm: 222 },
              bgcolor: theme.palette.myColor.main
            }
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Games
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Bikes
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Electrics
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Books
          </MenuItem>
        </Menu>
      </Box>

      {isLargeScreen ? (
        <Stack
          gap={4}
          direction={"row"}
          alignItems={"center"}
          sx={{
            zIndex: 1000
          }}
        >
          <Links title="Home" />
          <Links title="Mega Menu" />
          <Links title="Full screen Menu" />
          <Links title="Pages" />
          <Links title="User Account" />
          <Links title="Vendor Account" />
        </Stack>
      ) : (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor="top"
        open={drawerState.top}
        onClose={toggleDrawer("top", false)}
        PaperProps={{
          sx: {
            height: "100%"
          }
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: 844 },
            mx: "auto",
            mt: 6,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            pt: 10
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
              position: "absolute",
              top: 16,
              right: 10
            }}
          >
            <CloseIcon />
          </IconButton>

          <Stack direction="column" sx={{ width: "100%" }}>
            {[
              { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
              { mainLink: "Mega Menu", subLink: ["Link1", "Link2"] },
              {
                mainLink: "Full Screen Menu",
                subLink: ["Link1", "Link2", "Link3"]
              },
              { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
              {
                mainLink: "User Account",
                subLink: ["Link1", "Link2", "Link3"]
              },
              {
                mainLink: "Vendor Account",
                subLink: ["Link1", "Link2", "Link3"]
              }
            ].map((item, index) => (
              <Accordion key={index} elevation={0} sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.mainLink}
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((Link) => (
                    <ListItem key={Link} sx={{ py: 0, my: 0 }}>
                      <ListItemButton>
                        <ListItemText primary={Link} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Accordion>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Container>
  );
}
