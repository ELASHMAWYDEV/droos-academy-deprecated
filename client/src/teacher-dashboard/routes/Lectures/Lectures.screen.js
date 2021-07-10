import React from "react";

//Styles
import "./style.scss";

//Assets
import { TableRow } from "./components";

const Lectures = () => {
  return (
    <div className="lectures-container">
      <div className="details-boxes">
        <div className="details-box blue-bg">
          <div className="top">
            <div className="top-left-circle">
              <span>500</span>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-right-title">
              <span>العدد الكلي</span>
            </div>
          </div>
        </div>
        <div className="details-box pink-bg">
          <div className="top">
            <div className="top-left-circle">
              <span>500</span>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-right-title">
              <span>المتاحة للمشاهدة</span>
            </div>
          </div>
        </div>
        <div className="details-box yellow-bg">
          <div className="top">
            <div className="top-left-circle">
              <span>500</span>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-right-title">
              <span>غير المتاحة</span>
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>الصورة المصغرة</th>
              <th>العنوان</th>
              <th>نبذة مختصرة</th>
              <th>السعر</th>
              <th>عمليات الشراء</th>
              <th>المشاهدات الكلية</th>
              <th>المشاهدات الفريدة </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <TableRow />
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lectures;
