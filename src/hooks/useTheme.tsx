import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { ETheme, GlobalTheme } from 'src/lib/types'

const ThemeContext = createContext<GlobalTheme>({
  theme: ETheme.Earth,
  changeTheme: () => undefined
})

interface Props {
  children: React.ReactNode
  initialTheme?: ETheme
}

export const ThemeProvider = ({
  children,
  initialTheme = ETheme.Earth
}: Props) => {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as ETheme) || initialTheme)
  }, [initialTheme])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const changeTheme = useCallback(
    (mode: ETheme) => {
      setTheme(mode)
    },
    [setTheme]
  )

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default () => useContext(ThemeContext)
