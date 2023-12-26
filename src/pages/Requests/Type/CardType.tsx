import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";

const StyledActionButton = styled(Button)((theme) => ({
  width: "80%",
  fontSize: 20,
  fontWeight: "bold",
}));

interface CardTypeProps {
  imgSrc: string;
  title: string;
  description: string;
}

export const CardType: React.FC<CardTypeProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <Card
      className={`${flexStyles.flexCenter} flex-1 flex-grow flex-col xs:flex-row md:flex-col`}
    >
      <CardMedia
        image={`/${imgSrc}`}
        sx={{ objectFit: "cover" }}
        className="h-[300px] w-full max-w-full border-x-borderLight"
      />
      <CardContent className={`${flexStyles.flexCenter} flex-col  gap-5`}>
        <Typography variant="h3" className="text-center" component="h6">
          {title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          component="p"
          className="text-justify"
        >
          {description}
        </Typography>
        <StyledActionButton className="p-1" variant="contained" color="success">
          انتخاب
        </StyledActionButton>
      </CardContent>
    </Card>
  );
};
