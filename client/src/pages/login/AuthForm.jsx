import React, { useState, useRef } from "react";
import { TextH1 } from "style/TextH1";
import {
  InputWrap,
  Input,
  Label,
  IsValidP,
} from "pages/login/styled/InputWrap";
import { Section } from "style/Section";
import { Form } from "pages/login/styled/Form";
import { Button, ButtonWrap } from "style/Button";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
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

  let isq = false;

  return (
    <Section>
      <Form className="form" onSubmit={submitHandler}>
        <TextH1>{isLogin ? "LOGIN" : "SIGN UP"}</TextH1>
        <InputWrap className="form-row">
          <Input
            type="email"
            className="email"
            id="email"
            placeholder="test@test.com"
            ref={emailRef}
            required
            onChange={emailValidInput}
          />
          <Label htmlFor="email">Email</Label>
          <IsValidP>qwe</IsValidP>
        </InputWrap>
        <InputWrap className="form-row">
          <Input
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
