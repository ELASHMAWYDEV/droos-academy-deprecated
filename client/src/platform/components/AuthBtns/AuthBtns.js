import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets

const AuthBtns = () => {
  return (
    <div className="auth-btns-container">
      <div className="sign-in-container">
        <div className="instruction-text">
          <h3>ادخل المنصة من هنا</h3>
        </div>
        <div className="btn-container">
          <Link to="/Login">تسجيل الدخول</Link>
        </div>
      </div>
      <div className="sign-up-container">
        <div className="instruction-text">
          <h3>سجل معنا الأن</h3>
        </div>
        <div className="btn-container">
          <Link to="/SignUp">حساب جديد</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthBtns;
