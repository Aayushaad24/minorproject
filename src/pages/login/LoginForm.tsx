import React from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const LoginForm = () => {
  return (
    <div className="max-w-xl w-full mx-auto p-10 rounded-xl shadow-lg bg-[#94B4C1]">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Button type="submit" variant="primary">
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
