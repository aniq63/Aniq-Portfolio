import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'aniq-portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : 'dark'
  } catch {
    return 'dark'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {}
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
