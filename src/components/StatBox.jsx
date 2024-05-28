import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" width="100%" m="0 30px">
      <Box justifyContent="space-between">
        <Box pt="0.5rem">{icon}</Box>
      </Box>
      <Box justifyContent="space-between" pl="1rem">
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ color: colors.greenAccent[500] }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          width="150px"
          textTransform="uppercase"
          sx={{ color: colors.grey[100] }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
