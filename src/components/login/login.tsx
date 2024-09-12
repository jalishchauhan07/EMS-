import React, { useState } from "react";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigator = useNavigate();
  function handleClick() {
    if (data.email === "admin@demo.com" && data.password === "demo@123") {
      localStorage.setItem("auth", "1");
      navigator("/");
    }
  }
  function handleChange(event: any) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.section}>
          <label>Email Address</label>
          <input
            className={style.input}
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Enter your Email Address"
          />
        </div>

        <div className={style.section}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={style.input}
            onChange={handleChange}
            placeholder="Enter your Password"
          />
        </div>
        <div className={style.btnSection}>
          <button className={style.button} onClick={handleClick}>
            Login
          </button>
        </div>
        <div className={style.footerSection}>
          <a href="/user/register">Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
