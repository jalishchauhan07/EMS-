import React, { useEffect } from "react";

import style from "./dashboard.module.css";
import Exam from "../exam/exam";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigator = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth") !== "1") {
      navigator("/user/login");
    }
  }, []);
  return (
    <div className={style.container}>
      <Exam />;
    </div>
  );
}

export default Dashboard;
