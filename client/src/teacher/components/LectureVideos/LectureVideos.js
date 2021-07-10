import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets

const LectureVideos = () => {
  return (
    <div className="lecture-videos-contanier">
      <div className="title">دروس المحاضرة</div>
      <div className="videos-container">
        <div className="btns-container">
          <div className="lecture-sections-btns">
            <div className="active">
              <button>الجزء الأول</button>
            </div>
            <div>
              <button>الجزء الثاني</button>
            </div>
            <div>
              <button>الجزء الثالث</button>
            </div>
            <div>
              <button>الجزء الرابع</button>
            </div>
          </div>
          <div className="lecture-tests-btn">
            <Link to="/exam">
              <button>اختبار الجز ء الأول</button>
            </Link>
            <Link>
              <button>اختبار الجز ء الثاني</button>
            </Link>
          </div>
        </div>
        <div className="video-container"></div>
        <div className="lecture-tests-btn-hidden">
          <Link>
            <button>اختبار الجز ء الأول</button>
          </Link>
          <Link>
            <button>اختبار الجز ء الثاني</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LectureVideos;
