import { memo } from "react";
import React from "react";
const MasterLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <h1>Body</h1>
      <h1>Footer</h1>
    </>
  );
};

export default memo(MasterLayout);
