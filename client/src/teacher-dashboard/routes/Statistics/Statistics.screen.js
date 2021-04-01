import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./style.scss";
import { Header } from "../../components";

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
    </div>
  );
};

export default Statistics;
