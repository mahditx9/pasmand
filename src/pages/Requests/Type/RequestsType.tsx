import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";
import { StepActions } from "../components/StepActions";
import { CardType } from "./CardType";

export const RequestsType = () => {
  return (
    <Box>
      <Box
        className={`${flexStyles.flexCenter}  flex flex-col gap-9 md:flex-row-reverse`}
      >
        <CardType
          imgSrc="darkhast-addi.jpg"
          title="درخواست عادی"
          description="ثبت درخواست عادی به شما این امکان را میدهد که برای هر درخواست
              تاریخ و زمان و نوع و مقدار پسماند خود را تعیین کنید."
        />
        <CardType
          imgSrc="darkhast-fori.jpg"
          title="درخواست فوری"
          description="ثبت درخواست فوری در اولین زمان ممکن شما را به اولین راننده در
              دسترس وصل میکند."
        />
      </Box>
      <Paper className={`${flexStyles.flexBetween}`}>
        <StepActions activeStep={5} nextRoute="/request/date-time" />
      </Paper>
    </Box>
  );
};
