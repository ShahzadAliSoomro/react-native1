import React from "react";
import { RingProgress } from "@ant-design/plots";

export default function Skill({ percentage }) {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: percentage,
    color: ["#143D59", "#F4B91A"],
  };
  return <RingProgress {...config} />;
}
