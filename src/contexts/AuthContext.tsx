"use client";
import { AuthContextType, SignInData, UserData } from "@/interfaces/Iauth";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { ReactNode, createContext, useContext, useState } from "react";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)
  const isAuthenticated = !!user;

  const router = useRouter()

  const signIn = async ({ email, password }: SignInData) => {
    const res = await fetch("http://localhost:3005/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if(!res.ok){
      setError(!error)
      console.log(error)
      return
    }
    const data = await res.json();

    if (data.token === undefined) {
      return;
    }


    setCookie(undefined, "token", data.token, { maxAge: 60 * 60 * 1 });

    setUser({ ...data });
    setLoading(!loading)
    router.push('/dashboard')
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user,error,loading,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
