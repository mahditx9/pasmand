import { Circle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { StyledCard } from "../StyledCard";

interface ActiveStatusProps {
  requestStatus: string;
}

export const ActiveStatus: React.FC<ActiveStatusProps> = ({
  requestStatus,
}) => {
  let statusColor: string = "unsubmitted";

  switch (requestStatus) {
    case "unsubmitted":
      statusColor = "yellow";
      break;
    case "accepted":
      statusColor = "green";
      break;
    case "canceled":
      statusColor = "red";
      break;
    default:
      break;
  }

  return (
    <StyledCard
      className={`flex flex-row-reverse items-center justify-center gap-3 px-3 py-1`}
    >
      <Typography
        variant="body1"
        className="text-textDark"
        fontWeight={600}
        fontSize={20}
        component="span"
      >
        {requestStatus === "unsubmitted" && "در انتظار تایید"}
        {requestStatus === "accepted" && "تایید شده"}
        {requestStatus === "canceled" && "لغو شده"}
      </Typography>
      <Circle style={{ color: statusColor }} />
    </StyledCard>
  );
};
