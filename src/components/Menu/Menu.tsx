import classnames from 'classnames'
import { Props } from './types'
import useTheme, {ThemeProvider} from 'src/hooks/useTheme'
import styles from './style.module.css'

export default function Menu({ isOpen, setOpen }: Props) {
  const { theme } = useTheme()
  
  return (
    <ThemeProvider>
      <label
      className={classnames(styles.menu, { [styles.open]: isOpen, [styles.dark_theme]: theme === 'dark' })}
        title="Menu"
        onClick={() => setOpen((open) => !open)}
      >
        {[1, 2, 3].map((key) => (
          <div
            key={key}
            className={classnames(styles.line, { [styles.open_line]: isOpen })}
          ></div>
        ))}
      </label>
    </ThemeProvider>
  )
}
