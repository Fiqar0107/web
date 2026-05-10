import { createContext, useContext, useState, useEffect } from 'react'

export const AppContext = createContext({
  role: 'mahasiswa',
  setRole: () => {},
  theme: 'light',
  setTheme: () => {},
  accent: 'navy',
  setAccent: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
})

export function useApp() {
  return useContext(AppContext)
}

export function AppProvider({ children }) {
  const [role, setRole] = useState('mahasiswa')
  const [theme, setTheme] = useState('light')
  const [accent, setAccent] = useState('navy')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.setAttribute('data-theme', 'dark')
    else root.removeAttribute('data-theme')
    root.setAttribute('data-accent', accent)
  }, [theme, accent])

  return (
    <AppContext.Provider value={{ role, setRole, theme, setTheme, accent, setAccent, loggedIn, setLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}
