import React from "react";

//Styles
import "./style.scss";

//Assets

const TableRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>60ج.م </td>
      <td>شراء المحاضرة</td>
      <td>2:00 pm 13/04/2021</td>
      <td className="is-confirmed">
        <span>قيد المراجعة</span>
      </td>
    </tr>
  );
};

export default TableRow;
