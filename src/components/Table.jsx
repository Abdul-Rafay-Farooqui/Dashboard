import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";

const columns = [
  { id: "teacherId", label: "ID", minWidth: 2 },
  { id: "teacherName", label: "Name", minWidth: 200 },
  { id: "teacherCNIC", label: "CNIC", minWidth: 400 },
  { id: "teacherDesignation", label: "Designation", minWidth: 100 },
  { id: "placeOfPosting", label: "Posting", minWidth: 500 },
  { id: "dateOfAppointment", label: "Appointment", minWidth: 100 },
  { id: "dateOfBirth", label: "Birth", minWidth: 100 },
  { id: "sex", label: "Sex", minWidth: 100 },
  { id: "qualification", label: "Qualification", minWidth: 90 },
  { id: "experiences", label: "Experiences", minWidth: 90 },
];

function createData(
  teacherId,
  teacherName,
  teacherCNIC,
  teacherDesignation,
  placeOfPosting,
  dateOfAppointment,
  dateOfBirth,
  sex,
  qualification,
  experiences
) {
  return {
    teacherId,
    teacherName,
    teacherCNIC,
    teacherDesignation,
    placeOfPosting,
    dateOfAppointment,
    dateOfBirth,
    sex,
    qualification,
    experiences,
  };
}

const rows = [
  createData(
    1,
    "Jamal",
    "12345-6789012-3",
    "Principal",
    "ABC School, Dadu",
    "2020-04-24",
    "1985-01-15",
    "Male",
    "Masters in Education",
    "10 years of teaching experience in various schools."
  ),
  createData(
    2,
    "Ahmed",
    "12345-6789012-3",
    "Vice Principal",
    "XYZ School, Karachi",
    "2023-08-19",
    "1980-05-20",
    "Male",
    "Bachelor of Education",
    "5 years of teaching experience."
  ),
  createData(
    3,
    "Ali Hassan",
    "12345-6789012-3",
    "Senior Teacher",
    "DEF School, Sukkur",
    "2022-09-13",
    "1977-11-25",
    "Male",
    "Masters in Mathematics",
    "15 years of teaching experience in high schools."
  ),
  createData(
    4,
    "Imran",
    "12345-6789012-3",
    "Teacher",
    "GHI School, Multan",
    "2024-02-15",
    "2008-03-10",
    "Male",
    "Intermediate",
    "Newly joined."
  ),
  createData(
    5,
    "Aliyan",
    "12345-6789012-3",
    "Teacher",
    "JKL School, Dadu",
    "2023-01-14",
    "1993-12-05",
    "Male",
    "Bachelor of Science",
    "2 years of teaching experience."
  ),
  createData(
    6,
    "Aisha Bibi",
    "12345-6789012-3",
    "Headmistress",
    "MNO School, Karachi",
    "2021-05-25",
    "1974-09-18",
    "Female",
    "Masters in Education",
    "12 years of teaching experience."
  ),
  createData(
    7,
    "Raza Ahmed",
    "12345-6789012-3",
    "Teacher",
    "PQR School, Karachi",
    "2015-06-12",
    "1978-07-30",
    "Male",
    "Bachelor of Arts",
    "8 years of teaching experience."
  ),
];

export function TeacherTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ overflowX: "auto", backgroundColor: `${colors.primary[400]}` }}
      >
        <Table>
          <TableHead sx={{ position: "sticky", top: -10 }}>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  width: column.minWidth,
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{ fontSize: "14px" }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
      />
    </>
    // </Paper>
  );
}
