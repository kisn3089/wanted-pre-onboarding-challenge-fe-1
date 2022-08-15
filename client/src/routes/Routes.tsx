import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "pages/login/AuthForm";
import SignUp from "pages/signup/SignUp";
import TodoItem from "pages/todo/TodoItem";
import NotFound from "pages/exceptions/NotFound";
import Home from "pages/home/Home";
import { GlobalStyle } from "style/GlobalStyle";
import Nav from "pages/nav/Nav";
import Path from "./Path";

const Routing = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path={Path.Root} element={<Home />} />
        <Route path={Path.SignUp} element={<SignUp />} />
        <Route path={Path.Auth} element={<Auth />} />
        <Route path={Path.TodoItem} element={<TodoItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default React.memo(Routing);
