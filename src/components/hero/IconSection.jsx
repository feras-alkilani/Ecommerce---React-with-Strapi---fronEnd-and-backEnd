import React from "react";
import {
  Container,
  Box,
  Stack,
  Typography,
  Divider,
  useMediaQuery
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTheme } from "@emotion/react";

const MyBox = ({ icon, title, subTitle, isMdUp, sx }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1.6,
        mt: 2,

        justifyContent: isMdUp ? "center" : "flex-start",
        ...sx // Spread the sx prop to allow external styling
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: "300", color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default function IconSection() {
  const theme = useTheme();

  const isMdUp = useMediaQuery("(min-width:600px)");

  return (
    <Container
      sx={{ bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff", mt: 4 }}
    >
      <Stack
        sx={{
          flexWrap: "wrap"
        }}
        direction="row"
        alignItems="center"
        divider={isMdUp ? <Divider orientation="vertical" flexItem /> : null}
      >
        <MyBox
          isMdUp={isMdUp}
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subTitle={"Start from 10$"}
        />
        <MyBox
          isMdUp={isMdUp}
          icon={<AccessAlarmOutlinedIcon />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          isMdUp={isMdUp}
          icon={<WorkspacePremiumOutlinedIcon />}
          title={"Payment"}
          subTitle={"Secure System"}
        />
        <MyBox
          isMdUp={isMdUp}
          icon={<CreditScoreOutlinedIcon />}
          title={"365 Days"}
          subTitle={"For Free Return"}
        />
      </Stack>
    </Container>
  );
}
