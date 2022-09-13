import { createContext } from "react";
import { useLocalStorage } from "../services/services";

export const ThemeContext = createContext({type: false})

export const ThemeProvider = ({children}) => {

  const [type, setType] = useLocalStorage('theme', false)

  return (
    <ThemeContext.Provider value={{type, setType}}>
      {children}
    </ThemeContext.Provider>
    )
}
    