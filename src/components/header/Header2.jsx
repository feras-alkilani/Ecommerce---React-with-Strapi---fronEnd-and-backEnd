import React from "react";
import {
  Container,
  Stack,
  Typography,
  InputBase,
  Box,
  IconButton,
  ListItem,
  useMediaQuery
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

const options = ["All categories", "Car", "Clothes", "Electronics"];

const Search = styled("div")(({ theme }) => ({
  flexGrow: 1,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333"
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}));

function Header2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
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

  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  return (
    <Container
      sx={{
        my: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 }
      }}
    >
      {isLargeScreen ? (
        <>
          <Stack alignItems="center">
            <ShoppingCartOutlinedIcon />
            <Typography variant="body2">E-commerce</Typography>
          </Stack>
          <Search
            sx={{
              display: "flex",
              borderRadius: "22px",
              justifyContent: "space-between",
              width: { xs: "100%", sm: "auto" }
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.myColor.main,
                borderBottomRightRadius: "22px",
                borderTopRightRadius: "22px",
                p: "0",
                width: "auto"
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    width: "90px",
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" }
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
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
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "14px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Search>

          <Stack direction={"row"} alignItems={"center"}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>

            <IconButton>
              <Person2OutlinedIcon />
            </IconButton>
          </Stack>
        </>
      ) : (
        <>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 24
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <ShoppingCartOutlinedIcon />
              <Typography variant="body2">E-commerce</Typography>
            </Box>

            <Box>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

              <IconButton>
                <Person2OutlinedIcon />
              </IconButton>
            </Box>
          </Stack>
          <Search
            sx={{
              display: "flex",
              borderRadius: "22px",
              justifyContent: "space-between",
              width: { xs: "100%", sm: "auto" }
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.myColor.main,
                borderBottomRightRadius: "22px",
                borderTopRightRadius: "22px",
                p: "0",
                width: "auto"
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    width: "90px",
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" }
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
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
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "14px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Search>
        </>
      )}
    </Container>
  );
}

export default Header2;
