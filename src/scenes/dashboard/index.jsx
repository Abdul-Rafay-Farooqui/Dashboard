import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DashTable } from "../../components/DashTable";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";

import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          className="dashboard-cards"
          sx={{ gridColumn: { xs: "span 5", md: "span 3" } }}
          bgcolor={colors.primary[400]}
          borderRadius={3}
          pt={3}
        >
          <StatBox
            title="90000"
            subtitle="Resgisterd Teachers"
            icon={
              <ContactsOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  fontSize: { xs: "20px", lg: "26px" },
                }}
              />
            }
          />
        </Box>
        <Box
          className="dashboard-cards"
          sx={{ gridColumn: { xs: "span 5", md: "span 3" } }}
          bgcolor={colors.primary[400]}
          borderRadius={3}
          pt={3}
        >
          <StatBox
            title="30000"
            subtitle="HST"
            icon={
              <ContactsOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  fontSize: { xs: "20px", lg: "26px" },
                }}
              />
            }
          />
        </Box>
        <Box
          className="dashboard-cards"
          sx={{ gridColumn: { xs: "span 5", md: "span 3" } }}
          bgcolor={colors.primary[400]}
          borderRadius={3}
          pt={3}
        >
          <StatBox
            title="40000"
            subtitle="PSTs"
            icon={
              <ContactsOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  fontSize: { xs: "20px", lg: "26px" },
                }}
              />
            }
          />
        </Box>
        <Box
          className="dashboard-cards"
          sx={{ gridColumn: { xs: "span 5", md: "span 3" } }}
          bgcolor={colors.primary[400]}
          borderRadius={3}
          pt={3}
        >
          <StatBox
            title="10000"
            subtitle="Subject Specialist"
            icon={
              <ContactsOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  fontSize: { xs: "20px", lg: "26px" },
                }}
              />
            }
          />
        </Box>
        <Box
          className="dashboard-cards"
          sx={{ gridColumn: { xs: "span 5", md: "span 3" } }}
          bgcolor={colors.primary[400]}
          borderRadius={3}
          pt={3}
        >
          <StatBox
            title="5000"
            subtitle="OT"
            icon={
              <ContactsOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  fontSize: { xs: "20px", lg: "26px" },
                }}
              />
            }
          />
        </Box>
        <Box
          className="dashboard-cards"
          sx={{ gridColumn: { xs: "span 5", md: "span 3" } }}
          bgcolor={colors.primary[400]}
          borderRadius={3}
          pt={3}
        >
          <StatBox
            title="5000"
            subtitle="DT"
            icon={
              <ContactsOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  fontSize: { xs: "20px", lg: "26px" },
                }}
              />
            }
          />
        </Box>
        <Box
          className="dashboard-cards"
          sx={{ gridColumn: { xs: "span 5", md: "span 3" } }}
          bgcolor={colors.primary[400]}
          borderRadius={3}
          pt={3}
        >
          <StatBox
            title="15000"
            subtitle="Non Registered Teachers"
            icon={
              <ContactsOutlinedIcon
                sx={{
                  color: colors.grey[100],
                  fontSize: { xs: "20px", lg: "26px" },
                }}
              />
            }
          />
        </Box>
      </Box>
      <Box paddingTop="2rem" paddingBottom="2rem">
        <Typography
          paddingBottom="2rem"
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          Recently Joined Teachers
        </Typography>
        <DashTable />
      </Box>
    </Box>
  );
};

export default Dashboard;
