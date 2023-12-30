import { Box, Container } from "@mui/material";
import { StepActions } from "../components/StepActions";
import { Selectors } from "../../../redux";
import { DeterMinationTable } from "./DeterMinationTable";

export const Determination: React.FC = () => {
  const { recyclesList } = Selectors.useRequestSelector();
  return (
    <Container maxWidth="md">
      <Box className="overflow-hidden">
        <img
          src="/categories-banner.jpg"
          className="h-[700px] w-full rounded-xl object-cover"
          alt="categories-banner"
        />
      </Box>
      <DeterMinationTable recyclesList={recyclesList} />
      <StepActions activeStep={3} nextRoute="/request/type" />
    </Container>
  );
};
