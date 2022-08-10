import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import { LoginPageProvider } from "./context/LoginPageContext";
import { useContext } from "react";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path={"/"}
            element={
              <LoginPageProvider>
                <LoginPage />
              </LoginPageProvider>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
