// context/AppContext.js
import { createContext, useState } from 'react';
// This context manages tasks and sessions across the app
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [sessions, setSessions] = useState([]);

  // NEW — default timer setting
  const [defaultTimer, setDefaultTimer] = useState(25);

  function addTask(title) {
    const newTask = {
      id: Date.now().toString(),
      title,
    };
    setTasks([...tasks, newTask]);
  }
// NEW — deleteTask function
  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  // UPDATED — now includes taskId
  function addSession(duration, taskId) {
    const newSession = {
      id: Date.now().toString(),
      duration,
      taskId,
      date: new Date(),
    };
    setSessions([...sessions, newSession]);
  }
// NEW — deleteSession function
  function deleteSession(id) {
  setSessions(sessions.filter((s) => s.id !== id));
}

// The context provider now includes the defaultTimer and setDefaultTimer
  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        sessions,
        addSession,
        deleteSession,

        // NEW VALUES
        defaultTimer,
        setDefaultTimer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}


