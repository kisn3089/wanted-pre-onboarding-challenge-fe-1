import styled from "styled-components";

const InputLabel = styled.input`
  width: 80%;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
  &:focus + label {
    left: 80%;
    font-size: 13px;
  }
`;

const Label = styled.label`
  color: rgb(0, 153, 255);
  font-size: 18px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  transition: all 0.3s ease-in-out;
`;

export { InputLabel, Label };
