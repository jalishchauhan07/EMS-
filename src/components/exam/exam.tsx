import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchQuestions,
  nextQuestion,
  correctAns,
  incorrectAns,
} from "../../redux/reducer";
import style from "./exam.module.css";

function Exam() {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, status, error } = useSelector(
    (state: any) => state.quizSlice
  );
  const navigator = useNavigate();

  const [ans, setAns] = useState("");

  const [options, setOptions]: any = useState([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, [dispatch, status]);

  const currentQuestion = questions && questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      const shuffledOptions = shuffleArray([
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ]);
      setOptions(shuffledOptions);
      setAns("");
    }
  }, [currentQuestion]);

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleNextClick = () => {
    if (ans === "") {
      alert("Please select an answer.");
      return;
    }

    if (currentQuestion.correct_answer === ans) {
      dispatch(correctAns());
    } else {
      dispatch(incorrectAns());
    }

    if (currentQuestionIndex === questions.length - 1) {
      navigator("/result");
    } else {
      dispatch(nextQuestion());
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.questionSection}>
        <label>
          {currentQuestion &&
            `${currentQuestionIndex + 1}.)  ${currentQuestion.question}`}
        </label>
      </div>

      <div className={style.optionSection}>
        {options.map((el: string, index: number) => (
          <div key={index} className={style.gridItem}>
            <label>
              <input
                type="radio"
                name="mcqOption"
                value={el}
                checked={ans === el}
                onChange={(event) => {
                  setAns(event.target.value);
                }}
              />
              {el}
            </label>
          </div>
        ))}
      </div>

      <div className={style.buttonSection}>
        <button onClick={handleNextClick}>
          {currentQuestionIndex >= questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Exam;
