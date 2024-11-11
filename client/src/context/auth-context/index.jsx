


import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFromData, setSignInFromData] = useState(initialSignInFormData);
  const [signUpFromData, setSignUpFromData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({ authenticate: false, user: null });


  // register
  async function handleRegisterUser(e) {
    e.preventDefault();
    const data = await registerService(signUpFromData);
  }


  // login 
  async function handleLoginUser(e) {
    e.preventDefault();
    const data = await loginService(signInFromData);
    sessionStorage.setItem(
      "accessToken",
      JSON.stringify(data?.data?.accessToken)
    );

    if (data.success) {
      setAuth({
        authenticate: true,
        user: data?.data?.user,
      });
    } else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  // check auth user 
  async function checkAuthUser() {
    const data = await checkAuthService();

    if (data.success) {
      setAuth({
        authenticate: true,
        user: data?.data?.user,
      });
    } else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  useEffect(() => {
    checkAuthUser()
  }, [])
  console.log(auth)

  return (
    <AuthContext.Provider
      value={{
        signInFromData,
        setSignInFromData,
        signUpFromData,
        setSignUpFromData,
        handleRegisterUser,
        handleLoginUser,
        auth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
