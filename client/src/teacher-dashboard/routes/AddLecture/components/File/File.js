import React from "react";

//Styles
import "./style.scss";

//Assets
import { ReactComponent as Delete } from "../../../../../assets/img/remove.svg";

const File = ({ name }) => {
  return (
    <div className="file-container">
      <div className="icon">
        <Delete />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default File;
