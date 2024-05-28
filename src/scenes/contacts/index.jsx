import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { TeacherTable } from "../../components/Table";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ position: "relative" }}
        height="150px"
      >
        <Header
          title="TEACHERS"
          subtitle="List of Teachers for Future Reference"
        />
        <Link to="/form">
          <Button
            sx={{
              backgroundColor: `${colors.greenAccent[400]}`,
              color: "white",
              height: "50px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
          >
            Add Teacher
          </Button>
        </Link>
      </Box>
      <Box m="40px 0 0 0" height="75vh">
        <TeacherTable />
      </Box>
    </Box>
  );
};

export default Contacts;
