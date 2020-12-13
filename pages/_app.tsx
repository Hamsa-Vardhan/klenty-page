import { AppProps } from 'next/app'
import "../styles.scss"

const DefApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
export default DefApp