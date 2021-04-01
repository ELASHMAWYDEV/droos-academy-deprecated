import { Link } from "react-router-dom";

//Style
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import TeacherImage from "../../../assets/img/teacher-img.jpg";
import { ReactComponent as PhonIllustration } from "../../../assets/img/phone-illustration.svg";

const HomeIntro = () => {
  return (
    <div className="home-intro-container">
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} alt="Droos Academy Logo" />
        </div>
        <div className="auth-btns-container">
          <Link to="">تسجيل الدخول</Link>
          <Link to="">حساب جديد</Link>
        </div>
        <div className="humburger-menu">
          <span></span>
          <span className="mid-burger"></span>
          <span></span>
        </div>
      </div>
      <div className="flex-wrapper">
        <div className="content-container">
          <div>
            <h1>معلم اللغة العربية</h1>
            <h5>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </h5>
          </div>
          <div className="second-div">
            <h1>معلم اللغة العربية</h1>
            <h5>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </h5>
          </div>
        </div>
        <div className="shapes-container">
          <div className="illustration-container">
            <PhonIllustration className="phone-svg" />
          </div>
          <div className="teacher-container">
            <img src={TeacherImage} alt="مصطفي فريد" />
            <h1>الأستاذ / مصطفي فريد</h1>
          </div>
        </div>
      </div>
      <div className="dash-line"></div>
    </div>
  );
};

export default HomeIntro;
