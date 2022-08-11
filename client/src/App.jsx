import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Auth from "./pages/Auth";
import Todo from "./pages/Todos";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
