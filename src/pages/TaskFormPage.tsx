import React, { useState } from "react";
import type { FormEvent } from "react";
import type { Task } from "../types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputField } from "../components/InputField";

interface TaskFormProps {
  onSave: (taskData: Omit<Task, "id" | "completed">) => void;
}

export const TaskFormPage: React.FC<TaskFormProps> = ({ onSave }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title) {
      setError("O título é obrigatório.");
      return;
    }

    onSave({
      title,
      description,
    });

    setTitle("");
    setDescription("");

    toast.success("Tarefa salva com sucesso!");
    navigate("/list");
  };

  return (
    <div className="max-w-2xl w-full mx-auto bg-white p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Adicionar/Editar Tarefa
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Título:
          </label>
          <InputField
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Estudar React Hooks"
            autoComplete="off"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descrição:
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-150 resize-none"
            placeholder="Ex: Revisar useState, useEffect e props..."
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => navigate("/list")}
            className="py-2 px-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg transition duration-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="py-2 px-5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition duration-200 shadow-lg"
          >
            Salvar Tarefa
          </button>
        </div>
      </form>
    </div>
  );
};
