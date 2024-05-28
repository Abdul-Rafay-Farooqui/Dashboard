import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";

const data = [
  {
    id: 1,
    name: "Jamal",
    email: "Jamal@gmail.com",
    age: 35,
    phone: "(021)121-5454",
    address: "B192 block 7 area 4",
    city: "Dadu",
    joiningDate: "24-4-20",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Ahmed",
    email: "Ahmed@gmail.com",
    age: 42,
    phone: "(021)314-2288",
    address: "C375 block 7",
    city: "Karachi",
    joiningDate: "19-8-23",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Ali Hassan",
    email: "Ali@gmail.com",
    age: 45,
    phone: "(021)982-6739",
    address: "E967 block 8",
    city: "Sukhar",
    joiningDate: "13-9-22",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Imran",
    email: "Imran@gmail.com",
    age: 16,
    phone: "(021)425-6742",
    address: "F825 block 7",
    city: "Multan",
    joiningDate: "15-2-24",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Aliyan",
    email: "Aliyan@gmail.com",
    age: 31,
    phone: "(021)445-1189",
    address: "B128 block 1",
    city: "Dadu",
    joiningDate: "14-1-23",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Aisha Bibi",
    email: "aishabibi@gmail.com",
    age: 150,
    phone: "(021)545-6483",
    address: "B1234 Block 5, Gulshan-e-Iqbal, Karachi",
    city: "Karachi",
    joiningDate: "25-5-21",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Raza Ahmed",
    email: "razaahmed@gmail.com",
    age: 44,
    phone: "(021)124-0123",
    address: "C22215 Block 10, North Nazimabad, Karachi",
    city: "Karachi",
    joiningDate: "12-6-15",
    registrarId: 123512,
  },
];

const columns = [
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "age", label: "Age" },
  { id: "phone", label: "Phone" },
  { id: "address", label: "Address" },
  { id: "city", label: "City" },
  { id: "joiningDate", label: "Joining Date" },
  { id: "registrarId", label: "Registrar ID" },
];
export function DashTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper sx={{ backgroundColor: `${colors.primary[400]}` }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id} sx={{ fontSize: "14px" }}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
