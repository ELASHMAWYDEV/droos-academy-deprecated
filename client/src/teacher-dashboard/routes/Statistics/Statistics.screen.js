import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { DetailsBox } from "../../components";
//Styles
import "./style.scss";

//Assets
import { ReactComponent as Graph3 } from "../../../assets/img/graph3.svg";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="stat-header-container d-flex ">
        <div className="title">
          <span>عدد المشاهدات</span>
        </div>
        <div className="navs d-flex">
          <button className="right active px-4">الكل</button>
          <button className="left px-4">الفريدة</button>
        </div>
      </div>
      <div className="row">
        <div className="col boxes">
          <DetailsBox
            colorClass="blue-bg"
            title="اليوم حتي الأن"
            number="560"
            subtitle="مقارنة بالأمس"
            percentage="24"
          />
          <DetailsBox
            colorClass="pink-bg"
            title="الأمس"
            number="886"
            subtitle="مقارنة بأول أمس"
            percentage="24"
          />
          <DetailsBox
            colorClass="yellow-bg"
            title="هذا الشهر"
            number="3540"
            subtitle="مقارنة بالشهر الماضي"
            percentage="24"
          />
          <DetailsBox
            colorClass="purple-bg"
            title="الشهر الماضي"
            number="900"
            subtitle="مقارنة بالشهر السابق"
            percentage="24"
          />
        </div>
        <div className="col graph">
          <Graph3 />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
