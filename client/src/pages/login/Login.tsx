import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Path from "routes/Path";
import FormInput from "components/FormInput";
import { EMAIL_RULE, PASSWORD_RULE } from "utils/validate";
import useCheckLogin from "hooks/useCheckLogin";
import useValidation from "hooks/useValidation";

function Login() {
  const navigate = useNavigate();

  const { authenticationToken } = useCheckLogin();

  //   const { state, disabledCondition, checkValidation } = useCheckLogin();

  //   return <FormInput></FormInput>;
}

// export default React.memo(Login);
