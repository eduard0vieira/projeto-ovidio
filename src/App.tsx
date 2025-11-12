import React, { useState, useEffect } from "react";
import type { Page, User, Task, NotificationState } from "./types";
import { MOCK_TASKS } from "./data/mockData";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Notification } from "./components/Notification";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TaskListPage } from "./pages/TaskListPage";
import { TaskFormPage } from "./pages/TaskFormPage";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  void currentUser;

  const [page, setPage] = useState<Page>("login");

  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const [notification, setNotification] = useState<NotificationState | null>(
    null,
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, "").split("?")[0];

      switch (hash) {
        case "/register":
          setPage("register");
          break;
        case "/list":
          setPage("list");
          break;
        case "/form":
          setPage("form");
          break;
        case "/login":
        default:
          setPage("login");
          break;
      }
    };

    const savedSession = localStorage.getItem("crud-auth");
    if (savedSession) {
      const user: User = JSON.parse(savedSession);
      setIsAuthenticated(true);
      setCurrentUser(user);
    }

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const protectedPages: Page[] = ["list", "form"];

    if (protectedPages.includes(page) && !isAuthenticated) {
      console.warn("Acesso negado. Redirecionando para /login");
      setPage("login");
      window.location.hash = "/login";
    } else if ((page === "login" || page === "register") && isAuthenticated) {
      console.warn("Usuário já logado. Redirecionando para /list");
      setPage("list");
      window.location.hash = "/list";
    } else if (window.location.hash !== `/${page}`) {
      window.location.hash = `/${page}`;
    }
  }, [page, isAuthenticated]);

  const navigateTo = (targetPage: Page) => {
    setPage(targetPage);
  };

  const clearNotification = () => setNotification(null);

  const handleLogin = (email: string) => {
    const user: User = {
      id: "user-123",
      name: "Usuário Simulado",
      email: email,
    };
    setIsAuthenticated(true);
    setCurrentUser(user);

    localStorage.setItem("crud-auth", JSON.stringify(user));
    navigateTo("list");
  };

  const handleRegister = () => {
    navigateTo("login");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("crud-auth");
    navigateTo("login");
    setNotification({ type: "success", message: "Você saiu com segurança." });
  };

  const handleSaveTask = (taskData: Omit<Task, "id" | "completed">) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    console.log("Nova tarefa salva:", newTask);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setNotification({ type: "error", message: "Tarefa excluída." });
    console.log("Deletando tarefa:", id);
  };

  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
    console.log("Alternando status da tarefa:", id);
  };

  const renderPage = () => {
    switch (page) {
      case "login":
        return (
          <LoginPage
            onLogin={handleLogin}
            navigateTo={navigateTo}
            setNotification={setNotification}
          />
        );
      case "register":
        return (
          <RegisterPage
            onRegister={handleRegister}
            navigateTo={navigateTo}
            setNotification={setNotification}
          />
        );
      case "list":
        return (
          <TaskListPage
            tasks={tasks}
            navigateTo={navigateTo}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        );
      case "form":
        return (
          <TaskFormPage
            navigateTo={navigateTo}
            onSave={handleSaveTask}
            setNotification={setNotification}
          />
        );
      default:
        return (
          <LoginPage
            onLogin={handleLogin}
            navigateTo={navigateTo}
            setNotification={setNotification}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-inter">
      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        navigateTo={navigateTo}
      />

      {notification && (
        <Notification notification={notification} onClose={clearNotification} />
      )}

      <main className="grow container mx-auto p-6 pt-24">{renderPage()}</main>

      <Footer />

      <style>{`
        .input-style {
          display: block;
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #D1D5DB; /* border-gray-300 */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
        }
        .input-style:focus {
          outline: none;
          border-color: #6366F1; /* border-indigo-500 */
          box-shadow: 0 0 0 2px #A5B4FC; /* ring-indigo-300 */
        }
        .input-style.bg-gray-100 {
          background-color: #F3F4F6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default App;
