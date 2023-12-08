"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Button from "@/components/iu/Button";
import Input from "@/components/iu/Input";
import Image from "next/image";
import { SignUpData } from "@/interfaces/Iauth";

const formSchema = z.object({
  name: z
    .string({ invalid_type_error: "o nome deve ser um texto" })
    .min(2, { message: "insira um nome valido" }),
  email: z
    .string({
      required_error: "O e-mail é obrigatorio",
    })
    .email("E-mail invalido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 digitos"),
});



const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState<SignUpData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onBlur",
    mode: "all",
  });

  const handleFormSubmit = async (data: SignUpData) => {
    const auth = await fetch("http://localhost:3005/newUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    console.log(auth)

    setUser(auth);

    if (auth) router.push("/");
  };

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
          {...register("name")}
          name="name"
          type="text"
          title="Nome"
          errorAlert={errors?.name?.message}
        />
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
          title="senha"
          errorAlert={errors?.password?.message}
        />

        <Button type="submit" className="hover:bg-red-500 duration-200">
          Cadastrar
        </Button>
      </form>
    </main>
  );
};

export default SignUp;
