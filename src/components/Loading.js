import React from "react";
import { CommonLoading } from "react-loadingg";

export default ({ children, loading }) => {
  return !loading ? <>{children} </> : <CommonLoading />;
};
