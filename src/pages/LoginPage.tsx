import React, { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputField } from "../components/InputField";


interface LoginProps {
  onLogin: (email: string) => void;
}

export const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("E-mail e senha são obrigatórios.");
      return;
    }
    if (password.length < 6) {
      setError("Senha deve ter no mínimo 6 caracteres.");
      return;
    }

    console.log("Login attempt:", { email, password });
    onLogin(email);
    toast.success("Login realizado com sucesso!");
    navigate("/list");
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Login
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail:
          </label>
          <InputField
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha:
          </label>
          <InputField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition duration-200 shadow-lg"
        >
          Entrar
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Não tem uma conta?{" "}
        <Link
          to="/register"
          className="font-medium text-indigo-600 hover:text-indigo-700"
        >
          Registre-se
        </Link>
      </p>
    </div>
  );
};
