import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { SearchInput } from "../../../../components/SearchInput";
import { StyledButton } from "../../../../components/StyledButton";
import { flexStyles } from "../../../../globalStyles/styles";
import axios from "axios";
import { CityDataType } from "./data";
import { List, ListItem } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  setAddress,
  setCities,
  setError,
  setLoading,
  setSelectedCity,
} from "../../../../redux/features/map";
import { Selectors } from "../../../../redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  maxWidth: "100%",
  maxheight: "100%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

interface TransitionsModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

// interface InitialStateType {
//   loading: boolean;
//   error: string;
//   searchValue: string;
//   selectedCity: string;
//   cities: CityDataType[];
// }

// const initialState: InitialStateType = {
//   loading: false,
//   error: "",
//   cities: [],
//   searchValue: "",
//   selectedCity: "",
// };

export const SearchModal: React.FC<TransitionsModalProps> = ({
  open,
  setOpen,
}) => {
  const handleClose = () => setOpen(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const [cities, setCities] = useState<CityDataType[]>([]);
  // const [selectedCity, setSelectedCity] = useState<CityDataType | null>(null);
  // const [error, setError] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    address: searchedAddress,
    cities,
    error,
    selectedCity,
    loading: isLoading,
  } = Selectors.useMapSelector();

  const getCitiesAddress = async (term: string) => {
    /**
     * TODO: implement toast to better ui notfications for this  data fetching API
     */

    try {
      if (!term || term === "") return;
      dispatch(setLoading(true));
      const result = await axios.get(
        `https://map.ir/search/v2/autocomplete?text=${term}`,
        {
          headers: {
            "x-api-key":
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEwOGFkMDVhMzI2ZTcyZDlkMDUzNjJmY2NkYmZkMmY4MzFiMTNkMDM3ODY0NDMxYTA3YmMzMGUyOWI1YTk5NmJmOGM0MzMyOGZkMGIzNDg1In0.eyJhdWQiOiIyMDcyMyIsImp0aSI6ImEwOGFkMDVhMzI2ZTcyZDlkMDUzNjJmY2NkYmZkMmY4MzFiMTNkMDM3ODY0NDMxYTA3YmMzMGUyOWI1YTk5NmJmOGM0MzMyOGZkMGIzNDg1IiwiaWF0IjoxNjczOTM4ODQ1LCJuYmYiOjE2NzM5Mzg4NDUsImV4cCI6MTY3NjQ0NDQ0NSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.FekMTze6YFADG0oRzgiSpPLGXeM1NJJdjWEIZV64q8qe5pfk1I3yfXeiRfDUni_B_DvN0bDmKu3vEKxM6bjf8EDY17KuiqO3HAZY7sleGq1OswwfnyB6sGodo6x6nR59tfBMucCwHow7-wY9ISbhBiqe8K1Hwa4w5mZqQ72YUTKuWS4kgnYKZh2R1hz6k9dISno4JN9jW_0VIq6H43sx24Mi0HGW_PP0_UthU6APTG5Xf_d5DDy5r7eViyhjOMkAtHOoaFRUUc0-r4mBzcyFCSahQJdpbNHRhqMy7v1Jkq-s4PuYSYw9U3O-Qpbt7RubO12LZFevqJWXkaiY3Xy2nA",
          },
        },
      );
      if (result.status >= 400) {
        throw new Error("مشکلی پیش آمده دوباره تلاش کنید!");
      }
      const data = result.data.value;
      const slicedData = data.slice(0, 4);
      dispatch(setCities(slicedData));
    } catch (error) {
      toast.error(`${(error as Error).message}`);
      dispatch(setError((error as Error).message));

      // if (axios.isAxiosError(error)) {
      //   const { message, status } = error?.response?.data;
      //   toast.error(`${message}`);
      //   setError(message);
      // } else {
      //   toast.error(`${(error as Error).message}`);
      //   setError((error as Error).message);
      // }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (selectedCity?.address) {
      setSearchQuery(selectedCity.address);
    }
  }, [selectedCity]);

  const handleClick = async () => {
    await getCitiesAddress(searchQuery);
  };

  const hanldeSubmit = () => {
    if (selectedCity) {
      dispatch(
        setAddress({
          address: searchQuery,
          geo: {
            latitude: selectedCity.geom.coordinates[0],
            longitude: selectedCity.geom.coordinates[1],
          },
        }),
      );
    }
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style} className={`${flexStyles.flexCenter} flex-col gap-5`}>
          <Box className={`${flexStyles.flexCenter} flex-row gap-5`}>
            <SearchInput
              _sx={{
                width: 300,
              }}
              _calssName=""
              _defaultValue={searchedAddress}
              _inputProps={{
                "aria-label": "کد رهگیری را وارد کنید",
                "default-value": { searchedAddress },
              }}
              placeHolder="جستجو آدرس"
              searchValue={searchQuery}
              setSearchValue={setSearchQuery}
              handleClick={handleClick}
            />
          </Box>
          {isLoading ? (
            <span className="loader"></span>
          ) : (
            <List className="flex flex-col gap-3" dir="rtl">
              {cities?.map((item: CityDataType, index: number) => (
                <ListItem
                  key={index + 1}
                  onClick={() => dispatch(setSelectedCity(item))}
                  className="cursor-pointer border-b-[1px] border-borderLight hover:bg-bgLightest"
                >
                  <Typography
                    variant="body1"
                    component="span"
                    fontSize={18}
                    fontWeight={500}
                    className="text-textDark"
                    textAlign="right"
                  >
                    {item.address}
                  </Typography>
                </ListItem>
              ))}
            </List>
          )}
          <StyledButton
            onClickHandler={hanldeSubmit}
            label="ثبت آدرس"
            type="success"
          />
        </Box>
      </Fade>
    </Modal>
  );
};
