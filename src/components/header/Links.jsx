import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const alllinks = [
  [
    { text: "Dashboard1" },
    {
      text: "Products",
      subLinks: ["Add Product", "View Products", "Edit Products"]
    },
    { text: "Orders" },
    { text: "Profile" }
  ],
  [
    { text: "Dashboard2" },
    {
      text: "Products",
      subLinks: ["Add Product", "View Products", "Edit Products"]
    },
    { text: "Orders" },
    { text: "Profile" }
  ],
  [
    { text: "Dashboard3" },
    {
      text: "Products",
      subLinks: ["Add Product", "View Products", "Edit Products"]
    },
    { text: "Orders" },
    { text: "Profile" }
  ],
  [
    { text: "Dashboard4" },
    {
      text: "Products",
      subLinks: ["Add Product", "View Products", "Edit Products"]
    },
    { text: "Orders" },
    { text: "Profile" }
  ],
  [
    { text: "Dashboard5" },
    {
      text: "Products",
      subLinks: ["Add Product", "View Products", "Edit Products"]
    },
    { text: "Orders" },
    { text: "Profile" }
  ],
  [
    { text: "Dashboard6" },
    {
      text: "Products",
      subLinks: ["Add Product", "View Products", "Edit Products"]
    },
    { text: "Orders" },
    { text: "Profile" }
  ]
];

const LinkItem = ({ link }) => {
  const theme = useTheme();

  return (
    <ListItem
      disablePadding
      sx={
        link.subLinks
          ? {
              position: "relative",
              "&:hover .sub-link": {
                display: "block"
              }
            }
          : {}
      }
    >
      <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
        <ListItemText
          sx={{
            ".MuiTypography-root": {
              fontSize: "15px",
              fontWeight: "300"
            }
          }}
          primary={link.text}
        />
        <Box flexGrow={1} />
        {link.subLinks && <KeyboardArrowRightOutlined fontSize="small" />}
      </ListItemButton>
      {link.subLinks && (
        <Box
          className="sub-link"
          sx={{
            display: "none",
            position: "absolute",
            left: "100%",
            top: 0,
            minWidth: "150px",
            bgcolor:
              theme.palette.mode === "dark"
                ? theme.palette.background.paper
                : theme.palette.background.default, // لون خلفية الـ sub-link هنا
            boxShadow: 1,
            zIndex: 1
          }}
        >
          <List>
            {link.subLinks.map((subLink, subIndex) => (
              <ListItem key={subIndex} disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: "300"
                      }
                    }}
                    primary={subLink}
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </ListItem>
  );
};

export default function Links({ title }) {
  let links = [];
  switch (title) {
    case "Home":
      links = alllinks[0];
      break;
    case "Mega Menu":
      links = alllinks[1];
      break;
    case "Full screen Menu":
      links = alllinks[2];
      break;
    case "Pages":
      links = alllinks[3];
      break;
    case "User Account":
      links = alllinks[4];
      break;
    case "Vendor Account":
      links = alllinks[5];
      break;
    default:
      links = [];
  }

  return (
    <Box
      sx={{
        ":hover .show-when-hover": {
          display: "block"
        },
        position: "relative",
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none"
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              {links.map((link, index) => (
                <LinkItem key={index} link={link} />
              ))}
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
