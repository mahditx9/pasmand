import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";
import { Category } from "./categoryTypes";
import styled from "@emotion/styled";
import { AccessAlarm } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addRecycle, removeRecycle } from "../../../redux/features/request";
import { RecycleType } from "../Determination/DeterminationTypes";

interface CardCategoryProps {
  key: number;
  category: Category;
}

export const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  const { recyclesList } = useSelector((state: any) => state.request);
  const dispatch = useDispatch();
  const { id, title, image } = category;
  const isSelected: boolean = recyclesList.some(
    (item: RecycleType) => item.id === id,
  );

  const Msg = ({ text }: { text: string }) => {
    return (
      <Box className="flex items-center gap-2 bg-bgSeccondary px-4 py-2">
        <AccessAlarm />
        <Typography variant="body1" component="span" className="text-textDark">
          {text}
        </Typography>
      </Box>
    );
  };

  const handleSelect = () => {
    isSelected
      ? dispatch(removeRecycle(id))
      : dispatch(addRecycle({ id, title, unitPrice: 3000, weight: 1 }));
  };
  console.log(isSelected);

  const StyledCard = styled(Card)({
    background: isSelected ? "#0FA958" : "#FFFFFF",
  });

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
      {image && (
        <CardMedia
          sx={{ height: 70, width: 70 }}
          image={`/categories/${image}`}
        />
      )}
      {title && (
        <CardContent
          className={`${flexStyles.flexCenter} ${
            isSelected ? "text-textLight" : "text-textDark"
          }`}
        >
          <Typography variant="h5" align="center" component="span">
            {title}
          </Typography>
        </CardContent>
      )}
    </StyledCard>
  );
};
