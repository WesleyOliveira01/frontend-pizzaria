import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  title: string;
  name: string;
  rest?: InputHTMLAttributes<HTMLInputElement>;
  type?: string;
  errorAlert: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, name, type = "text", errorAlert, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-tomato font-semibold text-xl" htmlFor={name}>{title}</label>
        <input
          className={twMerge(
            "outline-none p-2 shadow-md rounded-md",
            className
          )}
          name={name}
          id={name}
          type={type}
          {...rest}
          ref={ref}
        />
        <p className="text-red-500">{errorAlert}</p>
      </div>
    );
  }
);

export default Input;
