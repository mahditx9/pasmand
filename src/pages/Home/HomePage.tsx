import { Box } from "@mui/material";
import { HomeMenu } from "./components/HomeMenu/HomeMenu";
import { flexStyles } from "../../globalStyles/styles";
import { PageTitle } from "../../components/PageTitle";
export const HomePage: React.FC = () => {
  return (
    <Box>
      <Box className=" flex items-center justify-center">
        <img
          src="home-cover.jpg"
          alt="recycle-banner"
          style={{ objectFit: "cover", maxWidth: "100%", maxHeight: 400 }}
          className="max-w-full object-fill sm:max-h-[70vh]"
        />
      </Box>
      <PageTitle title="خانه" />
      <HomeMenu />
      <PageTitle title="درخواست های فعال" />
      {/* Active Requests Conatiner */}
      <Box className="flex items-center justify-center bg-bgDark py-7">
        {/* Row */}
        <Box
          className={`${flexStyles.flexCenter} flex-1 flex-col flex-wrap gap-7  xs:flex-initial xs:flex-row `}
        ></Box>
        {/* Row */}
      </Box>
      {/* Active Requests Conatiner */}
    </Box>
  );
};
