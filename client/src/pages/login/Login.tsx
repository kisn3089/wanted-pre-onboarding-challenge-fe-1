import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Path from "routes/Path";
import FormInput from "components/FormInput";
import { EMAIL_RULE, PASSWORD_RULE } from "utils/validate";
import useCheckLogin from "hooks/useCheckLogin";
import useValidation from "hooks/useValidation";
import { Section } from "style/Section";
import { Form } from "pages/login/styled/Form";
import { TextH1 } from "style/TextH1";

function Login() {
  const navigate = useNavigate();

  const { authenticationToken } = useCheckLogin();

  const { state, disabledCondition, checkValidation } = useValidation();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // const loginResult = await handleLogin(event);
    // if (loginResult) {
    //   alert("로그인 되었습니다.");
    //   navigate(Path.TodoItem);
    // }
  }

  useEffect(() => {
    if (authenticationToken) {
      navigate(Path.TodoItem);
    }
  }, [authenticationToken, navigate]);

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <TextH1>Login</TextH1>
        <FormInput
          type="text"
          name="email"
          text="이메일"
          placeholder="Email"
          isValid={state.email}
          regexRule={EMAIL_RULE}
          checkValidation={checkValidation}
        />
      </Form>
    </Section>
  );
}

export default React.memo(Login);
