import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityDataType } from "../../pages/Requests/Location/components/data";

interface InitialMapStateType {
  address: string;
  latitude: number;
  longitude: number;
  loading: boolean;
  error: string;
  selectedCity: CityDataType | null;
  cities: CityDataType[];
}

const initialMapState: InitialMapStateType = {
  address: "",
  latitude: 0,
  longitude: 0,
  loading: false,
  error: "",
  selectedCity: null,
  cities: [],
};

interface GeoType {
  latitude: number;
  longitude: number;
}

interface AddressPayload {
  address: string;
  geo?: GeoType;
}

const mapSlice = createSlice({
  name: "map",
  initialState: initialMapState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setCities: (state, action: PayloadAction<CityDataType[]>) => {
      state.cities = action.payload;
    },
    setSelectedCity: (state, action: PayloadAction<CityDataType>) => {
      state.selectedCity = action.payload;
    },
    setAddress: (state, action: PayloadAction<AddressPayload>) => {
      state.address = action.payload.address;
      if (action.payload.geo) {
        state.latitude = action.payload.geo.latitude;
        state.longitude = action.payload.geo.longitude;
      }
    },
  },
});

export const { setAddress, setCities, setError, setLoading, setSelectedCity } =
  mapSlice.actions;

export default mapSlice.reducer;
