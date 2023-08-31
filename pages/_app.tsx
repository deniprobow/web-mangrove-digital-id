import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/scss/style.scss'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

  
function App({ Component }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Component />
            <Footer />
        </>
    )

}

export default App