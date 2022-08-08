import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <section>
      <form className="form">
        <div className="text">Login</div>
        <div className="wrap">
          <div className="form-row">
            <input
              type="email"
              className="email"
              id="email"
              placeholder="test@test.com"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-row">
            <input type="password" className="password" id="password" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Auth;
