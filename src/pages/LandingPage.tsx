import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckSquareIcon } from "../components/Icons";

export const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full min-h-screen">

      <section className="relative overflow-hidden py-32 px-6">

        <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-purple-50 -z-10" />
        

        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Organize suas{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                tarefas
              </span>
              <br />
              de forma simples
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              A solução moderna e intuitiva para gerenciar suas tarefas diárias.
              <br />
              Fácil de usar, rápido e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/register"
                className="group relative px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
              >
                <span className="relative z-10">Começar Agora</span>
                <div className="absolute inset-0 bg-linear-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:scale-105 transform"
              >
                Fazer Login
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 px-6 bg-white rounded-tl-3xl rounded-tr-3xl shadow-cyan-500/50">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar suas tarefas com eficiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
            <div
              className={`group relative bg-linear-to-br from-white to-indigo-50 p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <CheckSquareIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  CRUD Completo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Crie, leia, atualize e delete suas tarefas com uma interface
                  limpa e intuitiva. Total controle sobre suas atividades.
                </p>
              </div>
            </div>

            
            <div
              className={`group relative bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m-5 4H4a2 2 0 01-2-2V7a2 2 0 012-2h5m9 12a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Integração com APIs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Preenchimento automático de endereço via ViaCEP durante o
                  cadastro. Economize tempo e evite erros.
                </p>
              </div>
            </div>

            
            <div
              className={`group relative bg-linear-to-br from-white to-pink-50 p-8 rounded-t-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Design Responsivo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Acesse suas tarefas em qualquer dispositivo. Interface
                  adaptável para celular, tablet e desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-linear-to-r from-indigo-600 to-purple-600 rounded-bl-3xl rounded-br-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
            >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de usuários que já estão organizando suas
              tarefas de forma mais eficiente.
            </p>
            <Link
              to="/register"
              className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
              Criar Conta Grátis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
