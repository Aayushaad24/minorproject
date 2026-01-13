import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const baseClasses =
    "w-full py-3 rounded-lg font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant || "primary"]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
