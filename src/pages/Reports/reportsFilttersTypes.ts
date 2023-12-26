import { OptionType } from "./../../components/SelectOptions/selectOptionsTypes";
export const years: OptionType[] = [
  {
    value: "1402",
    label: "1402",
  },
  {
    value: "1401",
    label: "1401",
  },
  {
    value: "1400",
    label: "1400",
  },
  {
    value: "1399",
    label: "1399",
  },
];
export const months: OptionType[] = [
  {
    value: "دی",
    label: "دی",
  },
  {
    value: "آذر",
    label: "آذر",
  },
  {
    value: "آبان",
    label: "آبان",
  },
  {
    value: "مهر",
    label: "مهر",
  },
];

export const days: OptionType[] = Array.from({ length: 30 }, (_, i) => {
  return { value: i + 1, label: i + 1 };
});
