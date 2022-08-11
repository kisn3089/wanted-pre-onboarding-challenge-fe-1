import React, { useState, useRef, useContext } from "react";
import { TextH1 } from "../../style/TextH1";
import { InputWrap } from "./style/InputWrap";
import { InputLabel, Label } from "./style/InputLabel";
import { Section } from "../../style/Section";
import { Form } from "./style/Form";
import { Button, ButtonWrap } from "../../style/Button";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passworValid, setPasswordValid] = useState(false);
  const [sign, setSign] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // 이메일 유효성
  const emailValidInput = () => {
    if (
      emailRef.current.value.includes("@") &&
      emailRef.current.value.includes(".")
    ) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // 비밀번호 유효성
  const passwordValidInput = () => {
    if (passwordRef.current.value.length >= 8) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isLogin) {
      authCtx.login(emailRef.current.value);
      authCtx.isLoggedIn = true;
      console.log(emailRef.current.value);
      navigate("/");
    } else {
      setIsLogin(true);
      setSign(true);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
    console.log("!");
  };

  return (
    <Section>
      <Form className="form" onSubmit={submitHandler}>
        <TextH1>{isLogin ? "LOGIN" : "SIGN UP"}</TextH1>
        <InputWrap className="form-row">
          <InputLabel
            type="email"
            className="email"
            id="email"
            placeholder="test@test.com"
            ref={emailRef}
            required
            onChange={emailValidInput}
          />
          <Label htmlFor="email">Email</Label>
        </InputWrap>
        <InputWrap className="form-row">
          <InputLabel
            type="password"
            className="password"
            id="password"
            ref={passwordRef}
            required
            minLength="8"
            onChange={passwordValidInput}
          />
          <Label htmlFor="password">Password</Label>
        </InputWrap>
        {sign && "회원가입이 완료되었습니다."}
        <ButtonWrap className="btn-wrap">
          <Button type="submit" disabled={!(emailValid && passworValid)}>
            {isLogin ? "LOGIN" : "SIGN UP"}
          </Button>
          <Button
            type="button"
            onClick={() => {
              setIsLogin((prev) => !prev);
            }}
          >
            {isLogin ? "SIGN UP" : "LOGIN"}
          </Button>
        </ButtonWrap>
      </Form>
    </Section>
  );
};

export default AuthForm;
