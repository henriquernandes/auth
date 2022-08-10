import { createContext, useState } from "react";
import api from "../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      const checkAuth = async () => {
        console.debug("Token is valid");
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        if (token) {
          try {
            const res = await api.get("/me");
            setUserInfo(res.data);
            setAuth(true);
            if (location.pathname === "/") {
              navigate("/dashboard");
            }
          } catch (err) {
            console.log(err);
            logout();
          }
        }
      };
      checkAuth();
    }
  }, [location]);
  async function login(user) {
    await api
      .post("/login", user)
      .then((res) => {
        setAuth(true);
        setUserInfo(res.data.user);
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setAuth(false);
      });
  }

  function logout() {
    const token = localStorage.getItem("access_token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .post("/logout")
      .then((res) => {
        localStorage.removeItem("access_token");
        setUserInfo(null);
        setAuth(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <AuthContext.Provider value={{ userInfo, auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
