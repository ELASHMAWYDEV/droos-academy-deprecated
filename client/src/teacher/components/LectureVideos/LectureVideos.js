import React from "react";

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
            <div>
              <button>اختبار الجز ء الأول</button>
            </div>
            <div>
              <button>اختبار الجز ء الثاني</button>
            </div>
          </div>
        </div>
        <div className="video-container"></div>
        <div className="lecture-tests-btn-hidden">
            <div>
              <button>اختبار الجز ء الأول</button>
            </div>
            <div>
              <button>اختبار الجز ء الثاني</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LectureVideos;
