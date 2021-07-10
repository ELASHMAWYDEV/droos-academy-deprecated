import React from "react";

//Styles
import "./style.scss";

//Assets
import Thumbnail from "../../../../../assets/img/thumbnail.png";

const TableRow = () => {
  return (
    <tr>
      <td>1</td>
      <td className="thumbnail">
        <img src={Thumbnail} alt="lecture-thumbnail" />
      </td>
      <td>هذا النص يمثل عنوان المحاضرة</td>
      <td className="lecture-details">
        هذا النص يمثل نبذة مختصرة عن المحاضرة ويتم وضعها تحت عنوان الفيديو
      </td>
      <td>60ج.م </td>
      <td>12</td>
      <td>22</td>
      <td>332</td>
    </tr>
  );
};

export default TableRow;
