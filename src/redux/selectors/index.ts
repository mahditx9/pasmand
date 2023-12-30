import { useSelector } from "../hooks/useTypedSelector";

export const useRequestSelector = () => {
  const { recyclesList, address, date, requestType, time } = useSelector(
    (state) => state.request,
  );
  return { recyclesList, address, date, requestType, time };
};

export const useUserSelector = () => {
  const userSlice = useSelector((state) => state.user);
  return { userSlice };
};
