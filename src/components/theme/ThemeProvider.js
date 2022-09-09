import { createContext, useState } from "react";

export const ThemeContext = createContext({theme: 'light'})

export const ThemeProvider = ({children}) => {
  const [type, setType] = useState('light')
  return (
    <ThemeContext.Provider value={{type, setType}}>
      {children}
    </ThemeContext.Provider>
    )
}
    