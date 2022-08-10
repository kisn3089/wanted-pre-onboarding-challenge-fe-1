import styled from "styled-components";

const TextH1 = styled.h1`
  font-size: 27px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
`;

function h1({ children, ...rest }) {
  return <TextH1 {...rest}>{children}</TextH1>;
}

export default TextH1;
