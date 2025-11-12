import React from "react";
import type { Task } from "../types";
import { CheckSquareIcon, SquareIcon, PencilIcon, TrashIcon } from "./Icons";

interface TaskCardProps {
  task: Task;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-300 ${task.completed ? "opacity-60 bg-slate-50" : "hover:shadow-xl"}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3
          className={`text-xl font-bold text-gray-900 ${task.completed ? "line-through" : ""}`}
        >
          {task.title}
        </h3>
        <button
          onClick={() => onToggleComplete(task.id)}
          title={
            task.completed ? "Marcar como pendente" : "Marcar como concluída"
          }
          className={`p-2 rounded-full ${task.completed ? "text-indigo-600" : "text-gray-400 hover:text-indigo-500"}`}
        >
          {task.completed ? <CheckSquareIcon /> : <SquareIcon />}
        </button>
      </div>
      <p
        className={`text-gray-600 mb-4 ${task.completed ? "line-through" : ""}`}
      >
        {task.description}
      </p>

      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(task.id)}
          className="flex items-center space-x-1 text-sm bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-3 rounded-lg transition duration-200"
        >
          <PencilIcon />
          <span>Editar</span>
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="flex items-center space-x-1 text-sm bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg transition duration-200"
        >
          <TrashIcon />
          <span>Excluir</span>
        </button>
      </div>
    </div>
  );
};
