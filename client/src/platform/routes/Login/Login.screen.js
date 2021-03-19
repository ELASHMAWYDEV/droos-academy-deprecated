import React from "react";
import { Link } from "react-router-dom";

import { Inputs } from "../../components";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as AuthIllustration } from "../../../assets/img/auth-screens-shape.svg";

function Login() {
  return (
    <div className="login-container">
      <div className="nav-container">
        <div className="logo-container">
          <img src={Logo} alt="Droos Academy Logo" />
        </div>
        <div className="back-button-container">
          <Link to="">
            <div className="text-container">
              <h3>العودة</h3>
            </div>
            <div className="icon">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
          </Link>
        </div>
      </div>
      <div className="content-container">
        <div className="img-container">
          <AuthIllustration />
        </div>
        <div className="form-container">
          <Inputs
            title="تسجيل الدخول"
            btnName="تسجيل الدخول"
            inputs={[
              {
                tag: "input",
                label: "رقم الهاتف / رمز الطالب",

                props: {
                  type: "text",
                  name: "رقم الهاتف / رمز الطالب",
                  maxLength: 100,
                  placeholder: "رقم الهاتف / رمز الطالب",
                  required: true,
                },
              },
              {
                tag: "input",
                label: "كلمة المرور",

                props: {
                  type: "password",
                  name: "كلمة المرور",
                  maxLength: 100,
                  placeholder: "كلمة المرور",
                  required: true,
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
