import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MuiPickersUtilsProvider>
  )
}
export default MyApp
