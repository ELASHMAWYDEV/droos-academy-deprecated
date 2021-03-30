import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";

//Styles
import "./style.scss";

//Assets

const LectureExtras = () => {
  const { path } = useRouteMatch();

  return (
    <div className="lecture-extras-container">
      <div className="extras-navs">
        <NavLink activeClassName="active" to={`${path}/teacher's-notes`}>
          ملاحظات المعلم
        </NavLink>
        <NavLink activeClassName="active" to={`${path}/lecture-files`}>
          ملفات المحاضرة
        </NavLink>
        <NavLink activeClassName="active" to={`${path}/Q&A`}>
          سؤال وجواب
        </NavLink>
      </div>

      <div className="navs-content">
        <Route exact path={`${path}/teacher's-notes`}>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </p>
        </Route>
        <Route exact path={`${path}/lecture-files`}>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحو
          </p>
        </Route>
      </div>
    </div>
  );
};

export default LectureExtras;
