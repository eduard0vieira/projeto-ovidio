import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import type { User, Task } from "./types";
import { MOCK_TASKS } from "./data/mockData";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TaskListPage } from "./pages/TaskListPage";
import { TaskFormPage } from "./pages/TaskFormPage";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  void currentUser;
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  useEffect(() => {
    const savedSession = localStorage.getItem("crud-auth");
    if (savedSession) {
      const user: User = JSON.parse(savedSession);
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (email: string) => {
    const user: User = { id: "user-123", name: "Usuário Simulado", email };
    setIsAuthenticated(true);
    setCurrentUser(user);
    localStorage.setItem("crud-auth", JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("crud-auth");
  };

  const handleSaveTask = (taskData: Omit<Task, "id" | "completed">) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.error("Tarefa excluída.");
  };

  const handleToggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-inter">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            position: "top-right",
            duration: 3000,
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            position: "top-right",
            duration: 3000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <main className="flex-grow container mx-auto p-6 pt-24">
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route
              path="/list"
              element={
                <TaskListPage
                  tasks={tasks}
                  onDelete={handleDeleteTask}
                  onToggleComplete={handleToggleComplete}
                />
              }
            />
            <Route
              path="/form"
              element={<TaskFormPage onSave={handleSaveTask} />}
            />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
