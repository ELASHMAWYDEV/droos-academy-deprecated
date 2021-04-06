import React from "react";

//Styles
import "./style.scss";

//Assets

const TableRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>US5V8A8</td>
      <td className="is-used">
        <span>نعم</span>
      </td>
      <td>60ج.م </td>
      <td>2:00 pm 13/04/2021</td>
      <td>محمود العشماوي #1581</td>
      <td>مكتبة السعادة #13</td>
    </tr>
  );
};

export default TableRow;
