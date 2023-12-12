"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import { SignInData } from "@/interfaces/Iauth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Button from "@/components/iu/Button";
import Input from "@/components/iu/Input";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string({
      required_error: "O e-mail é obrigatorio",
    })
    .email("E-mail invalido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 digitos"),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onBlur",
    mode: "all",
  });

  const { signIn, error } = useAuthContext();

  const handleFormSubmit = async (data: SignInData) => {
    await signIn({ ...data });
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
        {error && (
          <p className="text-center text-red-500">Usuário ou senha inválidos</p>
        )}

        <Button type="submit" className="hover:bg-red-500 duration-200">
          Entrar
        </Button>
      </form>

      <Link href="/signUp">
        <p className="text-center text-crust font-semibold">
          Não possui uma conta? Cadastre-se
        </p>
      </Link>
    </main>
  );
};

export default Home;
