import "./App.css";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import CreateAc from "./Login/CreateAc";
import Forget from "./Login/Forget";
import ResetPassword from "./Login/ResetPassword";
import Activation from "./Login/Activation";
import ShortLink from "./ShortLink";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/accout" element={<CreateAc />}></Route>
        <Route path="/forgot" element={<Forget />}></Route>
        <Route path="/activation/:userId" element={<Activation/>}></Route>
        <Route path="/shortlink" element={<ShortLink />}></Route>
        <Route path="/reset/:userId" element={<ResetPassword/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;