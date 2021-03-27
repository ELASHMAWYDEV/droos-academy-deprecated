import React from "react";

//Styles
import "./style.scss";

//Assets

const LectureExtras = () => {
  return (
    <div className="lecture-extras-container">
      <div className="extras-navs">
        <div className="active">ملاحظات المعلم</div>
        <div>ملفات المحاضرة</div>
        <div>سؤال وجواب</div>
      </div>
      <div className="navs-content">
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
        </p>
      </div>
    </div>
  );
};

export default LectureExtras;
