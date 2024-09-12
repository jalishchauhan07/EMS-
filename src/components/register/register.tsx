import React from "react";
import style from "./register.module.css";

function Register() {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.section}>
          <label>Full Name</label>
          <input
            className={style.input}
            type="text"
            placeholder="Enter your Full Name"
          />
        </div>
        <div className={style.section}>
          <label>Email Address</label>
          <input
            className={style.input}
            type="text"
            placeholder="Enter your Email Address"
          />
        </div>

        <div className={style.section}>
          <label>Password</label>
          <input
            type="password"
            className={style.input}
            placeholder="Enter your Password"
          />
        </div>
        <div className={style.btnSection}>
          <button className={style.button}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
