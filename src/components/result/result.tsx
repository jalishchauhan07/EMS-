import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./result.module.css";

function Result() {
  const navigator = useNavigate();
  const { correct, incorrect } = useSelector((state: any) => state.quizSlice);
  const percentage = ((correct / (correct + incorrect)) * 100).toFixed(2);
  return (
    <div className={styles.container}>
      <div className={styles.resultCard}>
        <h2 className={styles.heading}>Exam Results</h2>
        <div className={styles.resultRow}>
          <p>Correct Answers:</p>
          <span className={styles.correct}>{correct}</span>
        </div>
        <div className={styles.resultRow}>
          <p>Incorrect Answers:</p>
          <span className={styles.incorrect}>{incorrect}</span>
        </div>
        <div className={styles.resultRow}>
          <p>Percentage:</p>
          <span className={styles.percentage}>{percentage}%</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <button
          className={styles.retestButton}
          onClick={() => {
            navigator("/");
          }}
        >
          Retake Test
        </button>
      </div>
    </div>
  );
}

export default Result;
