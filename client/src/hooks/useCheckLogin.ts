import React, { useState } from "react";
import { TokenType } from "types";

const useCheckLogin = () => {
  const [authenticationToken] = useState<TokenType>(
    localStorage.getItem("auth")
  );
  return { authenticationToken };
};

export default useCheckLogin;
