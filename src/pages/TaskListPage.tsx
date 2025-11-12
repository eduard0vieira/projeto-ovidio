import React from "react";
import type { Task, Page } from "../types";
import { TaskCard } from "../components/TaskCard";

interface TaskListProps {
  tasks: Task[];
  navigateTo: (page: Page) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export const TaskListPage: React.FC<TaskListProps> = ({
  tasks,
  navigateTo,
  onDelete,
  onToggleComplete,
}) => {
  const onEdit = (id: string) => {
    console.log(`Simulando edição do item: ${id}`);
    navigateTo("form");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Minhas Tarefas</h2>
        <button
          onClick={() => navigateTo("form")}
          className="flex items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg transition duration-200 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>Adicionar Tarefa</span>
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Nenhuma tarefa encontrada. Que tal adicionar uma?
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
