import { Route } from "wouter";
import "./App.css";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <Route component={LoginPage} path="/" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
}

export default App;
