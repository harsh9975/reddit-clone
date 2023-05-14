import { AppProps } from 'next/app'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
export default function App({Component,pageProps:{session,...pageProps}}: AppProps){
    return( 
        <SessionProvider>
            <Component {...pageProps} session={session}/>
        </SessionProvider>)
}