import { Typography } from "@mui/material";

interface ActiveRequestAddressProps {
  address: string;
}

export const ActiveRequestAddress: React.FC<ActiveRequestAddressProps> = ({
  address,
}) => {
  return (
    <Typography
      variant="body1"
      fontWeight={600}
      className="text-center text-textDark sm:text-start"
      fontSize={20}
      component="p"
    >
      {address}
    </Typography>
  );
};
