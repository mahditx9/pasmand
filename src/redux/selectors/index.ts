import { useSelector } from "../hooks/useTypedSelector";

export const useRequestSelector = () => {
  const { recyclesList, address, date, requestType, time } = useSelector(
    (state) => state.request,
  );
  return { recyclesList, address, date, requestType, time };
};

export const useMapSelector = () => {
  const { address, error, latitude, loading, longitude, cities, selectedCity } =
    useSelector((state) => state.map);
  return { address, error, latitude, loading, longitude, cities, selectedCity };
};

export const useUserSelector = () => {
  const userSlice = useSelector((state) => state.user);
  return { userSlice };
};
