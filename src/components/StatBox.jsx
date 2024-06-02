import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" width="100%" m={{ xs: "0 10px", lg: "0 30px" }}>
      <Box justifyContent="space-between">
        <Box pt="0.5rem">{icon}</Box>
      </Box>
      <Box justifyContent="space-between" pl={{ xs: "0.5rem", lg: "1rem" }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            color: colors.greenAccent[500],
            fontSize: { xs: "18px", lg: "32px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          width={{ xs: "100px", md: "100px", lg: "170px" }}
          textTransform="uppercase"
          sx={{ color: colors.grey[100], fontSize: { xs: "14px", lg: "20px" } }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
