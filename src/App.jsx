import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import NewProject from "./pages/NewProject";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/NewProject" element={<NewProject />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
