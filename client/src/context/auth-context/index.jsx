import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFromData, setSignInFromData] = useState(initialSignInFormData);
  const [signUpFromData, setSignUpFromData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({ authenticate: false, user: null });
  const [loading, setLoading] = useState(true);

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
    try {
      const data = await checkAuthService();

      if (data.success) {
        setAuth({
          authenticate: true,
          user: data?.data?.user,
        });
        setLoading(false);
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (error) {
      if (!error?.response?.data?.success) {
          setAuth({
            authenticate: false,
            user: null,
          });
          setLoading(false);
      }
    }
  }

  // logout
  async function resetCredentials() {
     setAuth({
       authenticate: false,
       user: null,
     });
     setLoading(false);
  }

  useEffect(() => {
    checkAuthUser();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        signInFromData,
        setSignInFromData,
        signUpFromData,
        setSignUpFromData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
