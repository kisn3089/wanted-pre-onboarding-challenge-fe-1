import React, { useState, useRef } from "react";
import { TextH1 } from "./TextH1";
import { InputWrap } from "./InputWrap";
import { InputLabel, Label } from "./InputLabel";
import { Section } from "./Section";
import { Form } from "./Form";
import { Button, ButtonWrap } from "./Button";

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
