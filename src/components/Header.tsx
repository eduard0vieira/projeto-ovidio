import React from "react";
import type { Page } from "../types";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
  navigateTo: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onLogout,
  navigateTo,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">TaskApp</h1>
        <nav>
          {isAuthenticated ? (
            <>
              <a
                href="#/list"
                onClick={() => navigateTo("list")}
                className="mr-4 hover:text-indigo-300"
              >
                Minhas Tarefas
              </a>
              <a
                href="#/form"
                onClick={() => navigateTo("form")}
                className="mr-4 hover:text-indigo-300"
              >
                Nova Tarefa
              </a>
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <a
                href="#/login"
                onClick={() => navigateTo("login")}
                className="mr-4 hover:text-indigo-300"
              >
                Login
              </a>
              <a
                href="#/register"
                onClick={() => navigateTo("register")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Registrar
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
