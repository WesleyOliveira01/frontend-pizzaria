import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-tomato text-mozzarella p-3 rounded-md w-full font-semibold text-xl",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
