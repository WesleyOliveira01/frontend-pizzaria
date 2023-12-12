interface SignInData {
  email: string;
  password: string;
  token?: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface UserData{
  name:string,
  email:string,
  token?:string
}

interface AuthContextType {
  isAuthenticated: boolean;
  signIn({email,password}:SignInData): Promise<void>;
  user:UserData
  error:boolean
}


export type { SignInData, SignUpData,AuthContextType,UserData };
