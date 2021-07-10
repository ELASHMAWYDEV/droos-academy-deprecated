import React from "react";

import { FiUpload } from "react-icons/fi";

//Styles
import "./style.scss";

//Assets

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="title">شحن الرصيد</div>
      <div className="by-code-container">
        <div className="title">شحن عن طريق الكود</div>
        <div className="form-container">
          <form>
            <div className="code">
              <input type="text" name="code" placeholder="أدخل الكود" />
            </div>
            <div className="btn">
              <button type="submit">شحن</button>
            </div>
          </form>
        </div>
      </div>
      <div className="other-payments-container">
        <div className="title">طرق الدفع المختلفة</div>
        <div className="select-way">
          <form>
            <div className="select-container">
              <select>
                <option disabled selected>
                  فودافون كاش
                </option>
              </select>
              <span></span>
            </div>
            <div className="how-to-pay">
              <div>كيف أدفع ؟</div>
              <p>
                قم بتحويل المبلغ الذي تريد شحنه الي رقم 01064544529 ورفع صورة
                المعاملة وسوف يقوم أحد موظفينا بإضافة الرصيد الي حسابك
              </p>
            </div>
            <div className="dash-line"></div>
            <div className="value-container">
              <input type="number" name="paymentValue" placeholder="المبلغ" />
            </div>
            <div className="adding-transaction-img">
              <div>
                <span>
                  <FiUpload />
                </span>
              </div>
              <div>رفع صورة المعاملة</div>
            </div>
            <div className="submit-btn">
              <button type="submit">تأكيد</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
