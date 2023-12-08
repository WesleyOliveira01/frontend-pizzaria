"use client"
import { AuthContextType, SignInData, UserData } from "@/interfaces/Iauth";
import { setCookie } from "nookies";
import { ReactNode, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

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

    const data = await res.json();

    setCookie(undefined, "token", data.token, { maxAge: 60 * 60 * 1 });

    setUser({ ...data });

    router.push('/dashboard')
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
