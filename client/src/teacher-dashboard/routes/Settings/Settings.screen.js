import React from "react";

import { EmployeeTableRow, DistrebutersTableRow } from "./components";
//Styles
import "./style.scss";

//Assets

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="employee-table">
        <div className="table-title">
          <div className="name">الموظفين</div>
          <div className="add-employee">
            <button>إضافة موظف</button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>الاسم</th>
                <th>اسم المستخدم</th>
                <th>البريد الالكتروني</th>
                <th>الحالة</th>
                <th>اخر تسجيل دخول</th>
                <th>تاريخ الانشاء</th>
                <th>الأجراء</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item, index) => (
                <EmployeeTableRow />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="dash-line"></div>
      <div className="employee-table">
        <div className="table-title">
          <div className="name">الموزعين</div>
          <div className="add-employee">
            <button>إضافة موزع</button>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>رقم الموزع</th>
                <th>اسم الموزع</th>
                <th>رقم الهاتف</th>
                <th>الحالة</th>
                <th>عدد الاكواد</th>
                <th>أجمالي التعاملات</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item, index) => (
                <DistrebutersTableRow />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="dash-line"></div>
    </div>
  );
};

export default Settings;
