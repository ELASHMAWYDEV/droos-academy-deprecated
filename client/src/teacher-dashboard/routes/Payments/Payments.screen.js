import React from "react";

import { TableRow } from "./components";
//Styles
import "./style.scss";

//Assets

const Payments = () => {
  return (
    <div className="payments-container">
      <div className="details-boxes">
        <div className="details-box blue-bg">
          <div className="top">
            <div className="top-left-circle">
              <span>12,256 ج.م</span>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-right-title">
              <span>الرصيد الكلي</span>
            </div>
          </div>
        </div>
        <div className="details-box pink-bg">
          <div className="top">
            <div className="top-left-circle">
              <span>12,256 ج.م</span>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-right-title">
              <span>الرصيد الحالي</span>
            </div>
          </div>
        </div>
        <div className="details-box yellow-bg">
          <div className="top">
            <div className="top-left-circle">
              <span>12,256 ج.م</span>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-right-title">
              <span>رصيد آجل</span>
            </div>
          </div>
        </div>
      </div>
      <div className="code-genertion-btn">
        <button>سحب رصيد</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>القيمة</th>
              <th>نوع العملية</th>
              <th>وقت المعاملة</th>
              <th>الحالة</th>
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

export default Payments;
