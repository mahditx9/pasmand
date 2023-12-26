import { Box, Container } from "@mui/material";
import { Banner } from "../../../components/Banner";
import { PageTitle } from "../../../components/PageTitle";
import { DateTimeLayout } from "./DateTimeLayout";
import { DateCard } from "./Date/DateCard";
import { TimeCard } from "./Time/TimeCard";
import { StepActions } from "../components/StepActions";

export const RequestDateAndTime: React.FC = () => {
  return (
    <Box>
      <Container maxWidth="md" className="space-y-12">
        <Banner imgSrc="home-cover.jpg" imgAlt="request-date-cover" />
        <PageTitle title="ثبت تاریخ و زمان درخواست" />
        <DateTimeLayout
          title="روز تحویل را انتخاب کنید"
          children={<DateCard />}
        />
        <DateTimeLayout
          title="زمان تحویل را انتخاب کنید"
          children={<TimeCard />}
        />
        <StepActions activeStep={5} nextRoute="/request/details" />
      </Container>
    </Box>
  );
};
