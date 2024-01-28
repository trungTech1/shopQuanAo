import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepapes from "./papes/users";
import { ROUTERS } from "./utils/router";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      element: <Homepapes />,
    },
  ];

  return (
    <Routes>
      {userRouter.map((router, index) => (
        <Route key={index} path={router.path} element={router.element} />
      ))}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
