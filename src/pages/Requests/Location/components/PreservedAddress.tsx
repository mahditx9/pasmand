import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { flexStyles } from "../../../../globalStyles/styles";
import { StyledButton } from "../../../../components/StyledButton";
import { Selectors } from "../../../../redux";
import { useDispatch } from "react-redux";
import { setAddress } from "../../../../redux/features/map";

const CustomAddButton = styled(Button)({
  fontSize: 17,
  fontWeight: 600,
  borderRadius: "32px",
  padding: ".2rem .6rem",
});
interface AddressObj {
  id: number;
  title: string;
  address: string;
}

interface PreservedAddressProps {
  key: number;
  addressItem: AddressObj;
}

export const PreservedAddress: React.FC<PreservedAddressProps> = ({
  addressItem,
}) => {
  const dispatch = useDispatch();
  const { address: selectedAddress } = Selectors.useMapSelector();
  const { id, title, address } = addressItem;
  const isSelected = selectedAddress === addressItem.address;
  return (
    <Card
      sx={{
        backgroundColor: isSelected ? "lightgreen" : "#FFFFFF",
        opacity: isSelected ? 1 : 0.8,
      }}
      className={`${flexStyles.flexBetween}  flex-col xs:flex-row-reverse `}
    >
      <CardContent
        className={`${flexStyles.flexCenter} w-full gap-2 bg-bgLightest xs:w-auto sm:min-w-[150px] sm:max-w-[220px]`}
      >
        <img
          src="/location.png"
          alt="location-mark"
          className="h-8 w-8 max-w-full"
        />
        <Typography
          className="text-primary"
          variant="h6"
          fontWeight={500}
          component="span"
        >
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          variant="h6"
          className="overflow-hidden text-ellipsis whitespace-nowrap text-textDark"
          component="p"
          align="center"
        >
          {address}
        </Typography>
      </CardContent>
      <CardActions className="">
        <CustomAddButton
          variant="contained"
          className="sm:flex-0 w-32 flex-1"
          onClick={() => dispatch(setAddress({ address: address }))}
          color="success"
        >
          {isSelected ? "انتخاب شده" : "افزودن"}
        </CustomAddButton>
      </CardActions>
    </Card>
  );
};
