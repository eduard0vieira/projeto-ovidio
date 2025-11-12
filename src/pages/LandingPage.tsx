import React from "react";
import { Link } from "react-router-dom";
import { CheckSquareIcon } from "../components/Icons";

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full text-center">
      <section className="bg-white py-20 px-6 rounded-xl shadow-2xl">
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">
          Bem-vindo ao TaskApp
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          A sua solução simples e moderna para organizar tarefas, integrada com
          ferramentas que facilitam o seu dia a dia.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/register"
            className="py-3 px-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition duration-200 shadow-lg text-lg"
          >
            Comece Agora (Grátis)
          </Link>
          <Link
            to="/login"
            className="py-3 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-lg transition duration-200 text-lg"
          >
            Fazer Login
          </Link>
        </div>
      </section>

      <section className="py-20 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Funcionalidades Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-indigo-100 rounded-full mb-4">
              <CheckSquareIcon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              CRUD Completo
            </h3>
            <p className="text-gray-600">
              Crie, leia, atualize e delete suas tarefas com uma interface limpa
              e rápida.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-indigo-100 rounded-full mb-4">
              {/* Ícone de Exemplo: API */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m-5 4H4a2 2 0 01-2-2V7a2 2 0 012-2h5m9 12a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Integração com APIs
            </h3>
            <p className="text-gray-600">
              Preenchimento automático de endereço via ViaCEP durante o
              cadastro.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-indigo-100 rounded-full mb-4">
              {/* Ícone de Exemplo: Responsivo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Design Responsivo
            </h3>
            <p className="text-gray-600">
              Acesse suas tarefas em qualquer dispositivo, seja no celular,
              tablet ou desktop.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
