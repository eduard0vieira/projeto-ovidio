import type { Task } from "../types";

export const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Estudar React Hooks",
    description: "Revisar useState, useEffect, useContext e useMemo.",
    completed: false,
  },
  {
    id: "2",
    title: "Fazer compras",
    description: "Comprar pão, leite, ovos e frutas.",
    completed: true,
  },
  {
    id: "3",
    title: "Preparar apresentação",
    description: "Montar os slides para a reunião de sexta-feira.",
    completed: false,
  },
];
