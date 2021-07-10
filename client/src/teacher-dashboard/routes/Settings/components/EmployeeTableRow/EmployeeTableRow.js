import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

//Styles
import "./style.scss";

//Assets

const EmployeeTableRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>محمود</td>
      <td>mahmoud</td>
      <td>elashmawydev@gmail.com</td>
      <td className="select-item">
        <select>
          <option>مفعل</option>
          <option>معطل</option>
        </select>
        <span></span>
      </td>
      <td>2:00 pm 13/04/2021</td>
      <td>2:00 pm 13/04/2021</td>
      <td className="action">
        <div>
          <button>
            <AiFillDelete />
          </button>
          <button>
            <MdModeEdit />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
