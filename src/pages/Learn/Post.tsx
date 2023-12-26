import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledCard } from "../../components/StyledCard";
import { StyledButton } from "../../components/StyledButton";

interface PostProps {
  id: number | any;
  title: string;
  cover: string;
  description: string;
  classNames?: string;
}

export const Post: React.FC<PostProps> = ({
  title,
  cover,
  description,
  id,
  classNames,
}) => {
  return (
    <StyledCard className={`flex flex-col gap-8 pb-7 ${classNames}`}>
      <Box>
        <CardMedia
          image={`/blog/${cover}`}
          sx={{ height: 400, width: "100%", objectFit: "contain" }}
        />
      </Box>
      <CardContent className="flex flex-col gap-5">
        <Typography
          variant="h4"
          align="center"
          component="h5"
          className="text-textDark"
          fontSize={30}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          component="p"
          className="text-textDark"
          fontSize={20}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <StyledButton label="ادامه مطلب" className="w-[60%]" type="success" />
      </CardActions>
    </StyledCard>
  );
};
