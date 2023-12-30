import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RecycleType } from "./DeterminationTypes";
import { DeterminationTableItem } from "./DeterminationTableItem";
import { StyledButton } from "../../../components/StyledButton";
import { Box, Typography } from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";
import { useNavigate } from "react-router-dom";

interface DeterMinationTableProps {
  recyclesList: RecycleType[];
}

export const DeterMinationTable: React.FC<DeterMinationTableProps> = ({
  recyclesList,
}) => {
  const navigate = useNavigate();
  if (!recyclesList.length) {
    return (
      <Box className={`${flexStyles.flexCenter} my-8 flex-col gap-5`}>
        <Typography
          variant="h3"
          fontSize={30}
          className="text-textDark"
          component="h4"
        >
          لیست شما خالیست لطفا پسماند های خود را انتخاب کنید
        </Typography>
        <StyledButton
          label="انتخاب پسماند"
          type="warning"
          onClickHandler={() => navigate(-1)}
        />
      </Box>
    );
  } else {
    return (
      <TableContainer component={Paper} dir="rtl" className="my-8">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: 22, fontWeight: 600, color: "#4F4F4F" }}
                align="center"
              >
                نوع
              </TableCell>
              <TableCell
                sx={{ fontSize: 22, fontWeight: 600, color: "#4F4F4F" }}
                align="center"
              >
                مقدار&nbsp;(kg)
              </TableCell>
              <TableCell
                sx={{ fontSize: 22, fontWeight: 600, color: "#4F4F4F" }}
                align="center"
              >
                قیمت واحد&nbsp;(تومان)
              </TableCell>
              <TableCell
                sx={{ fontSize: 22, fontWeight: 600, color: "#4F4F4F" }}
                align="center"
              >
                قیمت کل&nbsp;(تومان)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recyclesList.map((item) => (
              <DeterminationTableItem key={item.id} determination={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};
