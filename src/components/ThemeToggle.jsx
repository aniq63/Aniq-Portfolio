import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === 'dark' ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
    </button>
  )
}
