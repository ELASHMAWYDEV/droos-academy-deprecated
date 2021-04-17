import React from "react";

//Styles
import "./style.scss";

//Assets

const EmployeeTableRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>1551642#</td>
      <td>مكتبة السعادة</td>
      <td>01064544529</td>
      <td className="select-item">
        <select>
          <option>مسموح</option>
          <option>معطل</option>
        </select>
        <span></span>
      </td>
      <td>200</td>
      <td> ج.م 12,126 </td>
    </tr>
  );
};

export default EmployeeTableRow;
