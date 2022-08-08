import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <section>
      <form className="form">
        <div className="text">Login</div>
        <div className="wrap">
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email"
              id="email"
              placeholder="test@test.com"
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" id="password" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Auth;
