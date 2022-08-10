import styled from "styled-components";

const Button = styled.button`
  width: 83%;
  padding: 15px 0;
  margin: 10px auto;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 0 10px 1px #fff;
  border-color: #fff;
  cursor: pointer;
  color: #111;
  transform: translateY(0);
  transition: 0.4s ease-in-out;
  border: none;

  &:hover {
    transform: translateY(-10%);
  }

  &:disabled {
    background-color: rgba(226, 226, 226, 0.7);
    border-color: transparent;
    cursor: default;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

export { Button, ButtonWrap };
