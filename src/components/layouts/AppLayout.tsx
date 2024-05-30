import PlayerProvider from '@/components/providers/PlayerProvider'
import ThemeProvider from '@/components/providers/ThemeProvider'
import styles from '@/styles/AppLayout.module.scss'
import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <ThemeProvider>
      <PlayerProvider>
        <div className={styles.outer}>{children}</div>
      </PlayerProvider>
    </ThemeProvider>
  )
}
