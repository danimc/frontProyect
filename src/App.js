import { Route } from "wouter";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <UserContextProvider>
      <Route component={LoginPage} path="/" />
      <Route component={RegisterPage} path="/register" />
    </UserContextProvider>
  );
}

export default App;
