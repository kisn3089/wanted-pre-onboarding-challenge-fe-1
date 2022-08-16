import {
  InputWrap,
  Input,
  Label,
  IsValidP,
} from "pages/login/styled/InputWrap";
import React from "react";
import { isEqual, isFirstBiggerThanAfter } from "utils/checkValue";

interface FormInputProps {
  type: string;
  name: string;
  text: string;
  placeholder?: string;
  className: string;
  isValid?: boolean;
  checkValidation: (target: string, validationResult: boolean) => void;
  regexRule?: RegExp;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const {
      type,
      name,
      text,
      placeholder,
      isValid,
      checkValidation,
      regexRule,
    } = props;

    const inputValueCount = React.useRef<number>(0);

    const validationFailedString = isEqual(name, "passwordCheck")
      ? "비밀번호가 일치하지 않습니다."
      : "입력한 값이 형식과 맞지 않습니다.";

    const validationCondition =
      isFirstBiggerThanAfter(inputValueCount.current, 0) && !isValid;

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (regexRule && regexRule instanceof RegExp) {
        const regexResult = regexRule.test(event.currentTarget.value);
        const numberOfValidInputs = event.currentTarget.value.length;
        inputValueCount.current += numberOfValidInputs;
        checkValidation(name, regexResult);
      }
    }

    return (
      <InputWrap>
        <Input
          name={name}
          ref={ref}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Label htmlFor={name}>{text}</Label>
        {validationCondition && <IsValidP>{validationFailedString}</IsValidP>}
      </InputWrap>
    );
  }
);

export default React.memo(FormInput);
