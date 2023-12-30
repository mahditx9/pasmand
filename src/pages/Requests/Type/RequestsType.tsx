import { Box, Paper } from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";
import { StepActions } from "../components/StepActions";
import { CardType } from "./CardType";
import { Selectors } from "../../../redux";

export const RequestsType = () => {
  const { requestType } = Selectors.useRequestSelector();

  return (
    <Box>
      <Box
        className={`${flexStyles.flexCenter}  flex flex-col gap-9 md:flex-row-reverse`}
      >
        <CardType
          type="عادی"
          selectedType={requestType}
          imgSrc="darkhast-addi.jpg"
          title="درخواست عادی"
          description="ثبت درخواست عادی به شما این امکان را میدهد که برای هر درخواست
              تاریخ و زمان و نوع و مقدار پسماند خود را تعیین کنید."
        />
        <CardType
          type="فوری"
          selectedType={requestType}
          imgSrc="darkhast-fori.jpg"
          title="درخواست فوری"
          description="ثبت درخواست فوری در اولین زمان ممکن شما را به اولین راننده در
              دسترس وصل میکند."
        />
      </Box>
      <Paper className={`${flexStyles.flexBetween}`}>
        <StepActions
          disabled={requestType === ""}
          activeStep={5}
          nextRoute={
            requestType === "عادی"
              ? "/request/date-time"
              : "/request/details/1235"
          }
        />
      </Paper>
    </Box>
  );
};
