import { memo } from "react";
import MyPara from "./MyPara";

const DemoOutput = ({ show }) => {
  console.log("DemoOutput RUNNING");
  return <MyPara>{show ? "Ny tekst" : ""}</MyPara>;
};

export default memo(DemoOutput);
