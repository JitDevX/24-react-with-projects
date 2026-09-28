
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App



// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) =>
//       prev === "light" ? "dark" : "light"
//     );
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         toggleTheme
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export default ThemeProvider;