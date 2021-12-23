import '@styles/common/index.scss'
import Header from '@components/ui/Header'
import LoadingProvider from '@contexts/LoadingProvider'
import AuthProvider from '@contexts/AuthProvider'
import AxiosProvider from '@contexts/AxiosProvider'
import { Provider as BusProvider } from 'react-bus'
import NextNProgress from 'nextjs-progressbar'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.push(router.asPath)
  }, [])

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>구매자가 제안해요, Offer!</title>
      </Head>
      <NextNProgress color="#F74F2A" />
      <LoadingProvider>
        <AxiosProvider>
          <AuthProvider>
            <BusProvider>
              <div className="container">
                <div className="wrapper">
                  <Header />
                  <Component {...pageProps} />
                </div>
              </div>
            </BusProvider>
          </AuthProvider>
        </AxiosProvider>
      </LoadingProvider>
    </>
  )
}

export default MyApp
