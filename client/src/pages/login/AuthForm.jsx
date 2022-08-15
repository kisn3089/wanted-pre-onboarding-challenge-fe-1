import React, { useState, useRef } from "react";
import { TextH1 } from "style/TextH1";
import { InputWrap } from "components/auth/style/InputWrap";
import { InputLabel, Label } from "components/auth/style/InputLabel";
import { Section } from "style/Section";
import { Form } from "components/auth/style/Form";
import { Button, ButtonWrap } from "style/Button";
import { useNavigate } from "react-router-dom";

const AuthForm = (props) => {
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
      localStorage.setItem("token", emailRef.current.value);
      console.log(emailRef.current.value);
      navigate("/");
    } else if (!isLogin) {
      setIsLogin(true);
      setSign(true);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
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

export default React.memo(AuthForm);