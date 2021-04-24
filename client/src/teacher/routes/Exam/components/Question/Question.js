import React from "react";

//Styles
import "./style.scss";

//Assets

const Question = ({ questions }) => {
  return (
    <div className="question-container">
      <div className="form-container">
        <form>
          <div className="questions-container">
            {questions.length !== 0 &&
              questions.map((question, i) =>
                question.type === "radio" ? (
                  <>
                    <div className="input-item">
                      {question.label && (
                        <label className="question-label">
                          <div>{i + 1}</div>
                          <span>{question.label}</span>
                        </label>
                      )}
                      <div className="choises-container">
                        {question.choises.map((choise, c) => (
                          <>
                            <label className="container">
                              <input {...question.props} name={i} />
                              <div className="answer">{choise}</div>
                              <span className="checkmark"></span>
                            </label>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                ) : question.type === "textarea" ? (
                  <div className="input-item">
                    {question.label && (
                      <label className="question-label">
                        <div>{i + 1}</div>
                        <span>{question.label}</span>
                      </label>
                    )}
                    <textarea></textarea>
                  </div>
                ) : null
              )}
          </div>
          <div className="btn-container">
            <button className="save-btn" type="submit">
              تسليم الامتحان
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;
