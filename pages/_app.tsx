import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/scss/style.scss'
import { Footer } from '@/components/footer'

  
function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Mangrove Digital</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/img/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/img/favicon/manifest.json" />
                
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/img/favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="robots" content="index, follow" />
                <meta name="title" content="Mangrove Digital" />
                <meta name="keywords" content="Mangrove Digital, Digital Mangrove, Hutan Mangrove, Penghijauan, Mangrove, Tanam Mangrove, Pesan Mangrove, Pesan Tanam Mangrove" />
                <meta name="description" content="Plant Mangrove, Save The World" />
                <meta name="author" content="Mangrove Digital" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mangrove Digital" />
                <meta name="twitter:description" content="Plant Mangrove, Save The World" />
                <meta name="twitter:image" content="/img/meta/image-meta-s.jpg" />

                <meta property="og:title" content="Mangrove Digital" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="/img/meta/image-meta-s.jpg" />
                <meta property="og:url" content="https://beta.mangrovedigital.id/" />
                <meta property="og:description" content="Plant Mangrove, Save The World" />
                <meta property="og:email" content="support@mangrovedigital.id" />
                
                <link rel="image_src" href="/img/meta/image-meta-s.jpg" /> 
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    )

}

export default App