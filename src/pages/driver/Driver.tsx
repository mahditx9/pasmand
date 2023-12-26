import { Box, Container, IconButton, Typography } from "@mui/material";
import { StyledCard } from "../../components/StyledCard";
import { Close } from "@mui/icons-material";
import { flexStyles } from "../../globalStyles/styles";
import { StyledButton } from "../../components/StyledButton";
import React from "react";

export const Driver: React.FC = () => {
  return (
    <Box>
      <Box>MAP</Box>
      <Container
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", gap: 50 }}
      >
        <StyledCard className="space-y-[30px] p-4">
          {/* HEADER */}
          <Box className={`${flexStyles.flexBetween}`}>
            <Typography
              variant="body1"
              fontSize={24}
              fontWeight={500}
              className="text-textDark"
              component="p"
            >
              مشخصات راننده
            </Typography>
            <IconButton
              sx={{
                border: "1px solid",
                borderColor: "darkgray",
                "&:hover": { bgcolor: "lightgray" },
              }}
            >
              <Close color="error" />
            </IconButton>
          </Box>
          {/* HEADER */}
          {/* INFORMATION */}
          <Box className="flex flex-row-reverse items-center gap-5">
            <Box className="flex-1">
              <img
                src="/driver.jpg"
                alt="driver-img"
                className=" w-full  rounded-3xl object-contain"
              />
            </Box>
            <Box className="flex flex-1 flex-col items-end gap-5">
              <Typography
                variant="body1"
                component="span"
                fontSize={20}
                className="text-textDark"
              >
                علیرضا بابایی
              </Typography>
              <Typography
                variant="body1"
                component="span"
                fontSize={20}
                className="text-textDark"
              >
                09999999999
              </Typography>
            </Box>
            <Box className="flex flex-1 flex-col items-end gap-5">
              <Typography
                variant="body1"
                component="span"
                fontSize={20}
                className="text-textDark"
              >
                نیسان آبی
              </Typography>
              <img
                src="/pelak.jpg"
                alt="pelak-img"
                className="w-full object-contain"
              />
            </Box>
          </Box>

          {/* INFORMATION */}
          {/* ACTIONS */}
          <Box className="flex flex-row-reverse items-center gap-5">
            <StyledButton label="لغو درخواست" type="error" className="flex-1" />
            <StyledButton
              label="تماس با راننده"
              type="success"
              className="flex-1"
            />
            <StyledButton
              label="ارسال پیام"
              type="warning"
              className="flex-1"
            />
          </Box>
          {/* ACTIONS */}
        </StyledCard>
      </Container>
    </Box>
  );
};
