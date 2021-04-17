import React from "react";

import { TableRow } from "./components";
//Styles
import "./style.scss";

//Assets

const Codes = () => {
  return (
    <div className="codes-container">
      <div className="details-boxes">
        <div className="details-box blue-bg">
          <div className="top">
            <div className="top-right-circle">
              <span>22,150 ج.م</span>
            </div>
            <div className="top-left-circle">
              <span>1550</span>
            </div>
          </div>

          <div className="bottom-right-title">
            <span>جميع الأكواد التي تم توليدها</span>
          </div>
        </div>
        <div className="details-box pink-bg">
          <div className="top">
            <div className="top-right-circle">
              <span>22,150 ج.م</span>
            </div>
            <div className="top-left-circle">
              <span>500</span>
            </div>
          </div>

          <div className="bottom-right-title">
            <span>تم استخدامها</span>
          </div>
        </div>
        <div className="details-box yellow-bg">
          <div className="top">
            <div className="top-right-circle">
              <span>22,150 ج.م</span>
            </div>
            <div className="top-left-circle">
              <span>22500</span>
            </div>
          </div>

          <div className="bottom-right-title">
            <span>لم يتم استخدامها</span>
          </div>
        </div>
      </div>
      <div className="code-genertion-btn">
        <button>توليد أكواد جديدة</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>الكود</th>
              <th>تم استخدامه</th>
              <th>قيمة الكود</th>
              <th>وقت الإنشاء</th>
              <th>الطالب الذي استخدم الكود</th>
              <th>مولد الكود</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <TableRow />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Codes;
