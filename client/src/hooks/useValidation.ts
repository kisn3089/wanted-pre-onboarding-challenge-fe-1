import React from "react";
import { isEqual } from "utils/checkValue";

interface StateInterface {
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
}

interface ActionInterface {
  type: string;
  payload: boolean;
}

const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "PASSWORDCHECK":
      return {
        ...state,
        passwordCheck: action.payload,
      };
    default:
      return state;
  }
};

const initialState: StateInterface = {
  email: false,
  password: false,
  passwordCheck: false,
};

const useValidation = (mode: "login") => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const disabledCondition = isEqual(mode, "login")
    ? !(state.email && state.password)
    : !(state.email && state.password && state.passwordCheck);
  const checkValidation = (
    validateTarget: string,
    validationResult: boolean
  ) => {
    const toUppered = validateTarget.toUpperCase();
    dispatch({
      type: toUppered,
      payload: validationResult,
    });
  };
  return { state, disabledCondition, checkValidation };
};

export default useValidation;
