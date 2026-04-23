import { createContext, useState } from 'react'; // Importing createContext and useState from React to create a context and manage state within the application.
// Add AppContext to manage state of tasks.
export const AppContext = createContext(); // Creating a context called AppContext which will be used to share state across the application.
// The AppContext will hold the state for tasks and sessions, allowing any component that consumes this context to access and update these states without needing to pass props down through multiple levels of the component tree.
export function AppProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [sessions, setSessions] = useState([]);
// The AppProvider component is a context provider that wraps around the children components. It initializes two pieces of state: tasks and sessions, both starting as empty arrays. The setTasks and setSessions functions are used to update these states.
  return (
    <AppContext.Provider value={{ tasks, setTasks, sessions, setSessions }}>
      {children}
    </AppContext.Provider> 
  );
}
