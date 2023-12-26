import { Box } from "@mui/material";
import React from "react";
import { Banner } from "../../components/Banner";
import { PageTitle } from "../../components/PageTitle";
import { Post } from "./Post";

export const LearnPage: React.FC = () => {
  return (
    <Box>
      <Banner imgSrc="magazine_cover.jpg" imgAlt="learn-page-cover" />
      <PageTitle
        title="آموزش"
        classNames="border-t-[1px] border-b-[1px] border-borderLight "
      />
      <Box className="py-6">
        <Post
          id="b1"
          cover="handson.jpg"
          title="تفکیک پسماندها"
          description="لورم ایپسوم متن ساز آینده دارد خاموش میشود برای نیازمنندیهای اگی
              های عادی لورم ایپسوم متن ساز آینده دارد خاموش میشود برای
              نیازمنندیهای اگی های عادی لورم ایپسوم متن ساز آینده دارد خاموش
              میشود برای نیازمنندیهای اگی های عادی"
        />
      </Box>
    </Box>
  );
};
