import { Typography } from "@mui/material";

interface PageTitleProps {
  title: string;
  classNames?:string;
  fontSize?:number|string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title,classNames ,fontSize}) => {
  return (
    <Typography
      variant="h2"
      component="h2"
      fontSize={fontSize||36}
      className={`py-9 text-center text-primary ${classNames}`}
      fontWeight={700}
    >
      {title}
    </Typography>
  );
};
