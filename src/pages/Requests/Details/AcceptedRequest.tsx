import { Box, Container, Typography } from "@mui/material";
import { Banner } from "../../../components/Banner";
import { PageTitle } from "../../../components/PageTitle";
import { StyledCard } from "../../../components/StyledCard";
import { flexStyles } from "../../../globalStyles/styles";
import { StyledButton } from "../../../components/StyledButton";

export const AcceptedRequest: React.FC = () => {
  return (
    <Box>
      <Container maxWidth="md" className="space-y-8">
        <Banner
          imgSrc="acceptted-request.jpg"
          imgAlt="acceptted-request-cover"
        />
        <PageTitle title="درخواست شما ثبت شد با تشکر" />
        <StyledCard className="space-y-6 px-6 py-3">
          <Typography
            dir="rtl"
            variant="body1"
            fontSize={20}
            fontWeight={500}
            component="p"
          >
            جزیِات درخواست
          </Typography>
          <Box className={` flex flex-row-reverse items-center gap-5`}>
            <Typography
              dir="rtl"
              variant="body1"
              fontSize={20}
              fontWeight={500}
              component="p"
            >
              کد رهگیری :
            </Typography>
            <Typography
              dir="rtl"
              variant="body1"
              fontSize={20}
              fontWeight={500}
              component="p"
            >
              #FG6523C9623
            </Typography>
          </Box>
          <Box className={` flex flex-row-reverse items-center gap-5`}>
            <Typography
              dir="rtl"
              variant="body1"
              fontSize={20}
              fontWeight={500}
              component="p"
            >
              آدرس شما :
            </Typography>
            <Typography
              dir="rtl"
              variant="body1"
              fontSize={20}
              fontWeight={500}
              component="p"
            >
              مازندران - تنکابن - انقلاب - اندیشه
            </Typography>
          </Box>
        </StyledCard>
        <StyledCard className={``}>
          <Typography
            className="text-textDark"
            variant="body1"
            component="p"
            fontSize={25}
            align="center"
            fontWeight={600}
          >
            مشخصات پسماند
          </Typography>
          <Box className="space-y-10 p-6">
            <StyledCard className="flex w-full flex-wrap items-center justify-evenly gap-5 p-4">
              <Typography
                variant="body1"
                component="p"
                fontSize={20}
                fontWeight={500}
                className="text-textDark"
              >
                پلاستیک
              </Typography>
              <Typography
                variant="body1"
                component="p"
                fontSize={18}
                fontWeight={400}
                className="text-textDark"
              >
                وزن: 22 کیلووگرم
              </Typography>
              <Typography
                variant="body1"
                component="p"
                fontSize={18}
                fontWeight={400}
                className="text-textDark"
              >
                قیمت واحد: 3000 تومان
              </Typography>
              <Typography
                variant="body1"
                component="p"
                fontSize={18}
                fontWeight={400}
                className="text-textDark"
              >
                قیمت کل: 3000 تومان
              </Typography>
            </StyledCard>
          </Box>
        </StyledCard>
        <Box className={`${flexStyles.flexBetween}  gap-5`}>
          <StyledButton className="flex-1" type="error" label="لغو درخواست" />
          <StyledButton
            className="flex-1"
            type="success"
            label="نمایش راننده"
          />
        </Box>
      </Container>
    </Box>
  );
};
