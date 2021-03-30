import React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";

import {
  Footer,
  LectureDetails,
  LectureExtras,
  LectureNavBr,
  LectureVideos,
} from "../../components";
//Styles
import "./style.scss";

const Lecture = () => {

  return (
    <div className="lecture-container">
      <LectureNavBr />
      <LectureDetails />
      <div className="dashed-line"></div>
      <LectureVideos />
      <LectureExtras />
    </div>
  );
};

export default Lecture;
