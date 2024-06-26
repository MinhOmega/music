import '@/styles/globals.css'
import AppLayout from '@/components/layouts/AppLayout'
import PlayerLayout from '@/components/layouts/PlayerLayout'
import { persistor, store } from '@/redux/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppLayout>
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        </AppLayout>
      </PersistGate>
    </Provider>
  )
}
