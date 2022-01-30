import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full bg-light-grayish-cyan font-SpaceMono">
      <header>
        <img src="/logo.svg" className="mx-auto pt-12 pb-8" />
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
