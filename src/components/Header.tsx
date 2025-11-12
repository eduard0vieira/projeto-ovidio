import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onLogout,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    toast.success("Você saiu com segurança.");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-400">
          TaskApp
        </Link>
        <nav>
          {isAuthenticated ? (
            <>
              <Link
                to="/list"
                className="mr-4 hover:text-indigo-300"
              >
                Minhas Tarefas
              </Link>
              <Link
                to="/form"
                className="mr-4 hover:text-indigo-300"
              >
                Nova Tarefa
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="mr-4 hover:text-indigo-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Registrar
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
