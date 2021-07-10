import React from "react";


import { DetailsBox } from "../../components";
//Styles
import "./style.scss";

//Assets
import { ReactComponent as Graph3 } from "../../../assets/img/graph3.svg";
import { ReactComponent as Percentage } from "../../../assets/img/percetage.svg";

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
      <div className="data">
        <div className="details-boxes">
          <div className="details-box blue-bg">
            <div className="top">
              <div className="top-right-title">
                <span>اليوم حتي الأن</span>
              </div>
              <div className="top-left-circle">
                <span>500</span>
              </div>
            </div>

            <div className="bottom-left-subtitle">
              <div className="subtitle">
                <span>مقارنة بالأمس</span>
              </div>
              <div className="percentage">
                <Percentage />
                <span>30%</span>
              </div>
            </div>
          </div>
          <div className="details-box pink-bg">
            <div className="top">
              <div className="top-right-title">
                <span>الأمس</span>
              </div>
              <div className="top-left-circle">
                <span>3500</span>
              </div>
            </div>

            <div className="bottom-left-subtitle">
              <div className="subtitle">
                <span>مقارنة بأول أمس</span>
              </div>
              <div className="percentage">
                <Percentage />
                <span>24%</span>
              </div>
            </div>
          </div>
          <div className="details-box yellow-bg">
            <div className="top">
              <div className="top-right-title">
                <span>هذا الشهر</span>
              </div>
              <div className="top-left-circle">
                <span>3500</span>
              </div>
            </div>

            <div className="bottom-left-subtitle">
              <div className="subtitle">
                <span>مقارنة بالشهر الماضي</span>
              </div>
              <div className="percentage">
                <Percentage />
                <span>24%</span>
              </div>
            </div>
          </div>
          <div className="details-box purple-bg">
            <div className="top">
              <div className="top-right-title">
                <span>الشهر الماضي</span>
              </div>
              <div className="top-left-circle">
                <span>3500</span>
              </div>
            </div>

            <div className="bottom-left-subtitle">
              <div className="subtitle">
                <span>مقارنة بالشهر السابق</span>
              </div>
              <div className="percentage">
                <Percentage />
                <span>24%</span>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className=" graph">
          <Graph3 />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
