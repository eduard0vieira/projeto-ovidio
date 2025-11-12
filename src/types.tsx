export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ViaCepData {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export type Page = "login" | "register" | "list" | "form";

export type NotificationType = "success" | "error";

export interface NotificationState {
  message: string;
  type: NotificationType;
}
