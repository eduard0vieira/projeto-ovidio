import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import type { User, Task, NotificationState } from "./types";
import { MOCK_TASKS } from "./data/mockData";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Notification } from "./components/Notification";
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
  const [notification, setNotification] = useState<NotificationState | null>(
    null,
  );

  useEffect(() => {
    const savedSession = localStorage.getItem("crud-auth");
    if (savedSession) {
      const user: User = JSON.parse(savedSession);
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  }, []);

  const clearNotification = () => setNotification(null);

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
    setNotification({ type: "success", message: "Você saiu com segurança." });
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
    setNotification({ type: "error", message: "Tarefa excluída." });
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
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      {notification && (
        <Notification notification={notification} onClose={clearNotification} />
      )}

      <main className="flex-grow container mx-auto p-6 pt-24">
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/login"
            element={
              <LoginPage
                onLogin={handleLogin}
                setNotification={setNotification}
              />
            }
          />
          <Route
            path="/register"
            element={<RegisterPage setNotification={setNotification} />}
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
              element={
                <TaskFormPage
                  onSave={handleSaveTask}
                  setNotification={setNotification}
                />
              }
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
