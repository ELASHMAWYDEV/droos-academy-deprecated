import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import { Inputs, Instruction } from "../../components";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";

function SignUp() {
  return (
    <div className="signup-container">
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
              <BsArrowLeft />
            </div>
          </Link>
        </div>
      </div>
      <div className="content-container">
        <div className="instructions-container">
          <div className="title-container">
            <h2>خطوات التسجيل بسيطة</h2>
          </div>
          <Instruction
            number="1"
            Instruction="قم بإدخال اسمك بالكامل ، يفضل الاسم ثلاثي"
          />
          <Instruction
            number="2"
            Instruction="قم بإدخال رقم هاتفك المكون من 11 رقم"
          />
          <Instruction
            number="3"
            Instruction="قم بإدخال بريدك الالكتروني ، مهم جدا لاستعادة كلمة المرور"
          />
          <Instruction number="4" Instruction="قم باختيار المحافظة" />
          <Instruction
            number="5"
            Instruction="قم بكتابة اسم المدرسة / الكلية"
          />
          <Instruction number="6" Instruction="اختر السنة الدراسية" />
          <Instruction
            number="7"
            Instruction="قم بكتابة كلمة المرور وتأكيدها ، وتأكد من حفظها في مكان أمن"
          />
          <Instruction
            number="8"
            Instruction="قم بالتحديد علي الموافقة علي الشروط والسياسات الخاصة بالمنصة"
          />
          <Instruction
            number="9"
            Instruction="تهانينا ، يمكنك الأن الضغط علي تسجيل ، ويسعدنا أن نرحب بك"
          />
        </div>
        <div className="form-container">
          <Inputs
            signup="true"
            title="تسجيل حساب جديد"
            btnName="تسجيل"
            inputs={[
              {
                tag: "input",
                label: "الاسم بالكامل",

                props: {
                  type: "text",
                  name: "الاسم بالكامل",
                  maxLength: 100,
                  placeholder: "الاسم بالكامل",
                  required: true,
                },
              },
              {
                tag: "input",
                label: "رقم الهاتف",

                props: {
                  type: "number",
                  name: "رقم الهاتف",
                  maxLength: 100,
                  placeholder: "رقم الهاتف",
                  required: true,
                },
              },
              {
                tag: "input",
                label: "البريد الالكتروني",

                props: {
                  type: "text",
                  name: "البريد الالكتروني",
                  maxLength: 100,
                  placeholder: "البريد الالكتروني",
                  required: true,
                },
              },
              {
                tag: "select",
                label: "المحافظة",
                selectTitle: "اختر المحافظة",
                props: {
                  required: true,
                },
                options: [
                  {
                    label: "القاهرة",
                    value: "القاهرة",
                  },
                  {
                    label: "القليوبية",
                    value: "القليوبية",
                  },
                  {
                    label: "دمياط",
                    value: "دمياط",
                  },
                  {
                    label: "سوهاج",
                    value: "سوهاج",
                  },
                ],
              },
              {
                tag: "input",
                label: "المدرسة",

                props: {
                  type: "text",
                  name: "المدرسة",
                  maxLength: 100,
                  placeholder: "المدرسة",
                  required: true,
                },
              },
              {
                tag: "select",
                label: "السنة الدراسية",
                selectTitle: "اختر السنة الدراسية",
                props: {
                  required: true,
                  placeholder: "اختر",
                },
                options: [
                  {
                    label: "الصف الأول الأعدادي",
                    value: "الصف الأول الأعدادي",
                  },
                  {
                    label: "الصف الثاني الأعدادي",
                    value: "الصف الثاني الأعدادي",
                  },
                  {
                    label: "الصف الثالث الأعدادي",
                    value: "الصف الثالث الأعدادي",
                  },
                  {
                    label: "الصف الأول الثانوي",
                    value: "الصف الأول الثانوي",
                  },
                  {
                    label: "الصف الثاني الثانوي",
                    value: "الصف الثاني الثانوي",
                  },
                  {
                    label: "الصف الثالث الثانوي",
                    value: "الصف الثالث الثانوي",
                  },
                  {
                    label: "IGCSE ",
                    value: "IGCSE ",
                  },
                ],
              },
              {
                tag: "input",
                label: "كلمة المرور",

                props: {
                  type: "text",
                  name: "كلمة المرور",
                  maxLength: 100,
                  placeholder: "كلمة المرور",
                  required: true,
                },
              },
              {
                tag: "input",
                label: "تأكيد كلمة المرور",

                props: {
                  type: "password",
                  name: "تأكيد كلمة المرور",
                  maxLength: 100,
                  placeholder: "تأكيد كلمة المرور",
                  required: true,
                },
              },
            ]}
          />
          <div className="sign-up-btn-container">
            <div className="text">
              <h4>هل لديك حساب بالفعل ؟</h4>
            </div>
            <div className="btn">
              <Link to="/Login">الذهاب الي تسجيل الدخول</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
