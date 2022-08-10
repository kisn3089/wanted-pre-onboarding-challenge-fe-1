import React, { useState, useRef } from "react";
import "./AuthForm.css";
import styled from "styled-components";
import { TextH1 } from "./TextH1";
import { InputWrap } from "./InputWrap";
import { InputLabel } from "./InputLabel";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passworValid, setPasswordValid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  // 이메일 유효성
  const emailValidInput = () => {
    if (
      emailRef.current.value.includes("@") &&
      emailRef.current.value.includes(".")
    ) {
      setEmailValid(true);
    }
  };

  // 비밀번호 유효성
  const passwordValidInput = () => {
    if (passwordRef.current.value.length >= 8) {
      setPasswordValid(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("!");
  };

  return (
    <section>
      <form className="form" onSubmit={submitHandler}>
        <TextH1>{isLogin ? "LOGIN" : "SIGN UP"}</TextH1>
        <InputWrap className="form-row">
          <input
            type="email"
            className="email"
            id="email"
            placeholder="test@test.com"
            ref={emailRef}
            required
            onChange={emailValidInput}
          />
          <label htmlFor="email">Email</label>
        </InputWrap>
        <InputWrap className="form-row">
          <input
            type="password"
            className="password"
            id="password"
            ref={passwordRef}
            required
            minLength="8"
            onChange={passwordValidInput}
          />
          <label htmlFor="password">Password</label>
        </InputWrap>
        <div className="btn-wrap">
          <button type="submit" disabled={!(emailValid && passworValid)}>
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsLogin((prev) => !prev);
            }}
          >
            {isLogin ? "SIGN UP" : "LOGIN"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
