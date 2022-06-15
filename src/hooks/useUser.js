import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
  const { token, setToken } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false });
      loginService({ email, password })
        .then((token) => {
          window.sessionStorage.setItem("token", token);
          setState({ loading: false, error: false });
          setToken(token);
        })
        .catch((err) => {
          window.sessionStorage.removeItem("token");
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setToken]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("token");
    setToken(null);
  }, [setToken]);

  return {
    isLogged: Boolean(token),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}
