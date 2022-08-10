import { createContext, useState } from "react";

const LoginPageContext = createContext();

function LoginPageProvider({ children }) {
  const [signUp, setSignUp] = useState(false);

  function changePage(state) {
    setSignUp(!state);
    console.log(signUp);
  }

  return (
    <LoginPageContext.Provider value={{ signUp, changePage }}>
      {children}
    </LoginPageContext.Provider>
  );
}

export { LoginPageContext, LoginPageProvider };
