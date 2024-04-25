import type { AppProps } from 'next/app'
import { ThemeProvider } from 'src/hooks/useTheme'
import 'src/styles/globals.css'

function takeYouThere({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default takeYouThere
