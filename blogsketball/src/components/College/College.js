import React from "react";
import "./College.scss";
import TopSection from "./TopSection/TopSection";
import MiddleSection from "./MiddleSection/MiddleSection";
import BottomSection from "./BottomSection/BottomSection";

function College() {
  return (
    <div className="college-container">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}

export default College;
