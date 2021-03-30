import React from "react";
import { GrDocumentDownload } from "react-icons/gr";
import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets

const File = ({ name }) => {
  return (
    <div className="file-container">
      <Link to="">
        <div className="download-icon-container">
          <GrDocumentDownload />
        </div>
        <div>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

export default File;
