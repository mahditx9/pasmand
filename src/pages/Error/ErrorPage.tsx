import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const navigation = useNavigate();
  return (
    <div>
      <h1>page not found!</h1>
      <Link to="#" onClick={() => navigation(-1)}>
        Back
      </Link>
    </div>
  );
};
