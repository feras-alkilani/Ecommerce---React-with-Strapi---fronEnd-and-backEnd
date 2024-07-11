import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined
} from "@mui/icons-material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import XIcon from "@mui/icons-material/X";

const options = ["AR", "EN"];

function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px"
      }}
    >
      <Container>
        {" "}
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23f57",
              borderRadius: "12px",
              fontSize: "10px",
              color: "#FFF"
            }}
            variant="body2"
          >
            HOT
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: "300px",
              color: "#FFF",
              fontSize: "18px"
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem("mode", "dark");
                  colorMode.toggleColorMode();
                }}
                sx={{ color: "#fff" }}
              >
                <LightModeOutlined fontSize="small" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem("mode", "light");
                  colorMode.toggleColorMode();
                }}
                sx={{ color: "#fff" }}
              >
                <DarkModeOutlined fontSize="small" />
              </IconButton>
            )}
          </div>

          <List component="nav" aria-label="Device settings">
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                paddingLeft: "6px",
                paddingRight: "6px",
                ".MuiListItemText-root p": { color: "#fff" }
              }}
            >
              <ListItemText secondary={options[selectedIndex]} />
              <ExpandMore sx={{ fontSize: "16px" }} />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox"
            }}
            sx={{
              color: "white !important"
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <XIcon sx={{ fontSize: "16px", color: "#fff" }}></XIcon>
          <FacebookIcon
            sx={{ fontSize: "18px", mx: 1, color: "#fff" }}
          ></FacebookIcon>
          <InstagramIcon
            sx={{ fontSize: "18px", color: "#fff" }}
          ></InstagramIcon>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header1;
