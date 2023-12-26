import { Box, Container, List } from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";
import { RecycleType } from "./DeterminationTypes";
import { DeterminationItem } from "./DeterminationItem";
import { StepActions } from "../components/StepActions";
import { useSelector } from "react-redux";

const FAKE_LIST: RecycleType[] = [
  {
    id: 1,
    title: "پلاستیک",
    weight: 32.0,
    unitPrice: 3000,
    totalPrice: 6000,
  },
  {
    id: 2,
    title: "پارچه",
    weight: 32.0,
    unitPrice: 2500,
    totalPrice: 35154,
  },
  {
    id: 3,
    title: "شیشه",
    weight: 32.0,
    unitPrice: 63000,
    totalPrice: 2365000,
  },
];

export const Determination: React.FC = () => {
  const { recyclesList } = useSelector((state: any) => state.request);
  return (
    <Container maxWidth="md">
      <Box className="overflow-hidden">
        <img
          src="/categories-banner.jpg"
          className="h-[700px] w-full rounded-xl object-cover"
          alt="categories-banner"
        />
      </Box>
      <List className={`${flexStyles.flexCenter} flex-col gap-6`}>
        {recyclesList.map((item: RecycleType) => (
          <DeterminationItem key={item.id} determination={item} />
        ))}
      </List>
      <StepActions activeStep={3} nextRoute="/request/type" />
    </Container>
  );
};
