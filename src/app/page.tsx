"use client";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
const formSchema = z.object({
  email: z.string({
    required_error: "email is required",
  }).nonempty("The email is required").email("invalid email"),
  password: z.string().min(8, "The password must have at least 8 characters"),
});

interface SignInData {
  email:string,
  password:string,
  token?:string
}

const Home = () => {

  const [session,setSession] = useState<SignInData>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode:"onBlur",
    mode:"all"
  });

  const handleFormSubmit = async (data:SignInData) => {
    const auth = await fetch('http://localhost:3005/auth',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((res) => res.json())

    setSession(auth)

  }

  return (
    <main
      className="h-[80vh] flex flex-col items-center justify-center
    "
    >
      <Image
        className="lg:w-[15%]"
        height={250}
        width={250}
        src="/logo-hd.png"
        alt="logo do pizzapp"
      />
      <form
        className="lg:w-[50%] w-[90%] lg:p-4"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Input
          {...register("email")}
          name="email"
          type="email"
          title="E-mail"
          errorAlert={errors?.email?.message}
        />
        <Input
          {...register("password")}
          name="password"
          type="password"
          title="password"
          errorAlert={errors?.password?.message}
        />

        <button
          className="bg-tomato text-mozzarella p-3 rounded-md w-full font-semibold text-xl"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </main>
  );
};

export default Home;
