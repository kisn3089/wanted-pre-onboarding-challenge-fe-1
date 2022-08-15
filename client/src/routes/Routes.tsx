import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "pages/login/AuthForm";
import Todo from "pages/todo/Todos";
import NotFound from "pages/exceptions/NotFound";
import Home from "pages/home/Home";
import Path from "./Path";
import { GlobalStyle } from "style/GlobalStyle";
import Nav from "pages/nav/Nav";

const Routing = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path={Path.Root} element={<Home />} />
        <Route path={Path.Auth} element={<Auth />} />
        <Route path={Path.Todo} element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default React.memo(Routing);
