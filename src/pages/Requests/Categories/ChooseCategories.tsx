import { Box, Container } from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";
import { Category } from "./categoryTypes";
import { CardCategory } from "./CardCategory";
import { StepActions } from "../components/StepActions";
import { Banner } from "../../../components/Banner";
import { PageTitle } from "../../../components/PageTitle";
import React from "react";
import { Selectors } from "../../../redux";

const FAKE_CATEGORIES: Category[] = [
  {
    id: 1,
    title: "شیشه",
    image: "glass-of-water-water-svgrepo-com.jpg",
  },
  {
    id: 2,
    title: "کاغذ و کارتن",
    image: "carton-svgrepo-com.jpg",
  },
  {
    id: 3,
    title: "پلاستیک",
    image: "water-plastic-svgrepo-com.jpg",
  },
  {
    id: 4,
    title: "پارچه",
    image: "cloth-sweater-tshirt-svgrepo-com.jpg",
  },
  {
    id: 5,
    title: "پزشکی",
    image: "medical-search-svgrepo-com.jpg",
  },
  {
    id: 6,
    title: "الکترونیکی",
    image: "device-electronic-machine-3-svgrepo-com.jpg",
  },
  {
    id: 7,
    title: "کابل",
    image: "cable-wire-electricity-electronics-power-svgrepo-com.jpg",
  },
  {
    id: 8,
    title: "آهن",
    image: "pipes-pipe-svgrepo-com (1).jpg",
  },
  {
    id: 9,
    title: "چوب",
    image: "wood-svgrepo-com.jpg",
  },
  {
    id: 10,
    title: "خطرناک",
    image: "dangerous-goods-svgrepo-com.jpg",
  },
  {
    id: 11,
    title: "ارگانیک",
    image: "food-fruit-vegetable-vegetarian-organic-avocado-svgrepo-com.jpg",
  },
  {
    id: 12,
    title: "صنعتی",
    image: "factory-svgrepo-com.jpg",
  },
  {
    id: 13,
    title: "سایر",
    image: "other-svgrepo-com.jpg",
  },
];

export const ChooseCategories: React.FC = () => {
  const { recyclesList } = Selectors.useRequestSelector();

  const recycleListLength = recyclesList?.length;
  return (
    <Box className="space-y-3">
      <Banner imgSrc="categories-banner.jpg" imgAlt="categories-banner" />
      <PageTitle title="دسته بندیها" />
      <Box>
        <Container maxWidth="lg">
          <Box
            className={`${flexStyles.flexBetween} flex-wrap justify-evenly gap-8`}
          >
            {FAKE_CATEGORIES.map((category) => (
              <CardCategory key={category.id} category={category} />
            ))}
          </Box>
        </Container>
      </Box>
      <StepActions
        activeStep={2}
        nextRoute="/request/determination"
        disabled={!recycleListLength}
      />
    </Box>
  );
};
