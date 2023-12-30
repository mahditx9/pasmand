import { TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RecycleType } from "./DeterminationTypes";
import { Selectors } from "../../../redux";
import { useDispatch } from "react-redux";
import { removeRecycle, updateRecycle } from "../../../redux/features/request";
import { StyledButton } from "../../../components/StyledButton";
import { DeterMinationWeightActions } from "./DeterMinationWeightActions";

interface DeterminationTableItemProps {
  determination: RecycleType;
}

export const DeterminationTableItem: React.FC<DeterminationTableItemProps> = ({
  determination,
}) => {
  const { recyclesList } = Selectors.useRequestSelector();
  const { id, title, weight, unitPrice, totalPrice } = determination;

  const dispatch = useDispatch();
  const [weightQuery, setWeightQuery] = useState(1.0);
  const foundRecycleItem = recyclesList.find(
    (item: RecycleType) => item.id === id,
  );

  useEffect(() => {
    if (!foundRecycleItem) return;
    dispatch(
      updateRecycle({
        ...determination,
        totalPrice: +(weightQuery * unitPrice).toFixed(2),
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weightQuery]);

  return (
    <TableRow
      key={title}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        sx={{ fontSize: 18, fontWeight: 500, color: "#4F4F4F" }}
        component="th"
        scope="determination"
        align="center"
      >
        {title}
      </TableCell>
      <TableCell align="center">
        <DeterMinationWeightActions
          weight={weight}
          weightQuery={weightQuery}
          setWeightQuery={setWeightQuery}
        />
      </TableCell>
      <TableCell
        sx={{ fontSize: 18, fontWeight: 500, color: "#4F4F4F" }}
        align="center"
      >
        {unitPrice} تومان
      </TableCell>
      <TableCell
        sx={{ fontSize: 18, fontWeight: 500, color: "#4F4F4F" }}
        align="center"
      >
        {totalPrice} تومان
      </TableCell>
      <TableCell align="center">
        <StyledButton
          className="flex-1"
          label="حذف"
          type="error"
          onClickHandler={() => dispatch(removeRecycle(id))}
          sx={{
            fontSize: 24,
            fontWeight: "500 !important",
            width: "15%",
            height: 35,
          }}
        />
      </TableCell>
    </TableRow>
  );
};
