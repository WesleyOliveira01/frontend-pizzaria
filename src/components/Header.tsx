"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import Button from "./iu/Button";

const Header = () => {
  const router = useRouter();
  const signOut = () => {
    destroyCookie(undefined, "token");
    router.push("/");
  };
  return (
    <header className="py-4 px-8 flex justify-between items-center">
      <Image
        src="/logo-horizontal.png"
        width={350}
        height={350}
        alt="logo do PizzApp"
        className="w-[20%]"
      />
      <nav>
        <ul className="flex gap-4 items-center text-tomato font-semibold">
          <li>Cadastrar usuario</li>
          <li>Cadastrar categoria</li>
          <li>
            <Button
              className=" bg-transparent text-tomato border border-tomato hover:bg-tomato hover:text-mozzarella duration-150 p-2
        flex items-center gap-1 text-md"
              onClick={() => signOut()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Sair
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
