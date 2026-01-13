import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>

      <input
        {...props}
        className={`w-full border px-4 py-2 rounded bg-white text-gray-900
          focus:outline-none focus:ring-2 focus:ring-blue-400
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
