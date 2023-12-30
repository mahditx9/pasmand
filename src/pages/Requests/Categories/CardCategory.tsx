import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import styled from "@emotion/styled";

import { Category } from "./categoryTypes";
import { flexStyles } from "../../../globalStyles/styles";
import { useDispatch } from "react-redux";
import { addRecycle, removeRecycle } from "../../../redux/features/request";
import { RecycleType } from "../Determination/DeterminationTypes";
import { useState } from "react";
import { Selectors } from "../../../redux";

interface CardCategoryProps {
  key: number;
  category: Category;
}

export const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { recyclesList } = Selectors.useRequestSelector();
  const dispatch = useDispatch();
  const { id, title, image } = category;
  const isSelected: boolean = recyclesList.some(
    (item: RecycleType) => item.id === id,
  );

  const StyledCard = styled(Card)({
    background: isSelected ? "#0FA958" : "#FFFFFF",
  });

  const handleSelect = () => {
    isSelected
      ? dispatch(removeRecycle(id))
      : dispatch(addRecycle({ id, title, unitPrice: 3000, weight: 1 }));
  };

  return (
    <StyledCard
      onClick={handleSelect}
      sx={{
        "&:hover": {
          backgroundColor: isSelected ? "#D80032" : "#D3FFE8",
        },
      }}
      className={`${flexStyles.flexCenter} h-[190px] w-[150px] cursor-pointer  flex-col rounded-lg border-[1px] border-[#D9D9D9]  p-2 ease-linear hover:scale-105 hover:shadow-xl`}
    >
      <CardActionArea onClick={() => setIsFlipped(!isFlipped)}></CardActionArea>
      <CardMedia
        sx={{ height: 70, width: 70 }}
        image={`/categories/${image}`}
      />
      <CardContent
        className={`${flexStyles.flexCenter} ${
          isSelected ? "text-textLight" : "text-textDark"
        }`}
      >
        <Typography variant="h5" align="center" component="span">
          {title}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
