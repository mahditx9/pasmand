import { Box, Container } from "@mui/material";
import React from "react";

interface BannerProps {
  imgSrc: string;
  imgAlt: string;
  sx?: any;
}

export const Banner: React.FC<BannerProps> = ({ imgSrc, imgAlt, sx }) => {
  return (
    <Container maxWidth="md" className="overflow-hidden" sx={sx}>
      <img
        src={`/${imgSrc}`}
        className="w-full rounded-xl object-cover xs:h-[300px] md:h-[500px]"
        alt={imgAlt}
      />
    </Container>
  );
};
