import { ConfigProvider, theme } from 'antd'
import { Lexend_Deca } from 'next/font/google'
import { ReactNode } from 'react'

const lexendDeca = Lexend_Deca({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#faa800',
          fontFamily: lexendDeca.style.fontFamily,
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}
