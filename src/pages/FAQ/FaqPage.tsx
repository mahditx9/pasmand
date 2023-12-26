import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
// import { Banner } from "../../components/Banner";
import { ExpandMore } from "@mui/icons-material";

export const FaqPage: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box>
      {/* <Banner imgSrc="" imgAlt="" /> */}
      <Box>
        <Accordion
          dir="rtl"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              border: "1px solid",
              borderColor: "lightgray",
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
            }}
          >
            <Typography
              className="text-textDark"
              fontWeight={600}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              چگونه یک درخواست ثبت کنم؟{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-bgLightest">
            <Typography className="text-textDark">
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
