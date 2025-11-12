import React, { useState } from "react";
import type { FormEvent, FocusEvent } from "react";
import type { ViaCepData } from "../types";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputField } from "../components/InputField";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Partial<ViaCepData>>({});
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState<string | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const fetchAddress = async (cep: string) => {
    setCepLoading(true);
    setCepError(null);
    setAddress({});
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Erro ao buscar CEP.");
      }
      const data: ViaCepData = await response.json();
      if (data.erro) {
        throw new Error("CEP não encontrado.");
      }
      setAddress(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setCepError(error.message);
      } else {
        setCepError("Falha ao buscar CEP.");
      }
    } finally {
      setCepLoading(false);
    }
  };

  const handleCepBlur = (e: FocusEvent<HTMLInputElement>) => {
    const cepValue = e.target.value.replace(/\D/g, "");
    if (cepValue.length === 8) {
      fetchAddress(cepValue);
    } else if (cepValue.length > 0) {
      setCepError("CEP deve ter 8 dígitos.");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Nome é obrigatório.";
    if (!email) newErrors.email = "E-mail é obrigatório.";
    if (password.length < 6)
      newErrors.password = "Senha deve ter no mínimo 6 caracteres.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "As senhas não conferem.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Register attempt:", { name, email, password });
      toast.success("Cadastro realizado! Faça o login.");
      navigate("/login");
    } else {
      toast.error("Por favor, corrija os erros no formulário.");
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Cadastro
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome:
          </label>
          <InputField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-style"
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E-mail:
          </label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style"
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Senha:
          </label>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
            placeholder="Mínimo 6 caracteres"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirmar Senha:
          </label>
          <InputField
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-style"
            placeholder="Repita a senha"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-medium text-gray-700 px-2">
            Endereço
          </legend>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CEP:
              </label>
              <InputField
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onBlur={handleCepBlur}
                className="input-style"
                placeholder="00000-000"
                maxLength={9}
              />
              {cepLoading && (
                <p className="text-blue-500 text-xs mt-1">Buscando...</p>
              )}
              {cepError && (
                <p className="text-red-500 text-xs mt-1">{cepError}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rua:
                </label>
                <InputField
                  type="text"
                  value={address.logradouro || ""}
                  readOnly
                  className="input-style bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bairro:
                </label>
                <InputField
                  type="text"
                  value={address.bairro || ""}
                  readOnly
                  className="input-style bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cidade:
                </label>
                <InputField
                  type="text"
                  value={address.localidade || ""}
                  readOnly
                  className="input-style bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Estado (UF):
                </label>
                <InputField
                  type="text"
                  value={address.uf || ""}
                  readOnly
                  className="input-style bg-gray-100"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition duration-200 shadow-lg"
        >
          Criar Conta
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Já tem uma conta?{" "}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-700"
        >
          Faça login
        </Link>
      </p>
    </div>
  );
};
