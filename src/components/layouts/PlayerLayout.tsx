import AddTrackToPlaylistModal from '@/components/app/AddTrackToPlaylistModal'
import AudioControlModal from '@/components/app/AudioControlModal'
import CreatePlaylistModal from '@/components/app/CreatePlaylistModal'
import FooterPlayer from '@/components/app/FooterPlayer'
import PlayerModal from '@/components/app/PlayerModal'
import QueueModal from '@/components/app/QueueModal'
import styles from '@/styles/AppLayout.module.scss'
import { Layout } from 'antd'
import React, { lazy, ReactNode, useEffect, useState } from 'react'

interface PlayerLayoutProps {
  children: ReactNode
}

const PeerProvider = lazy(() => import('@/components/providers/PeerProvider'))

export default function PlayerLayout({ children }: PlayerLayoutProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <Layout className={styles.playerOuter}>
        <div className={styles.content}>
          {children}
          <FooterPlayer />
          <PlayerModal />
          <QueueModal />
          <AddTrackToPlaylistModal />
          <AudioControlModal />
          <CreatePlaylistModal />
        </div>
        {isClient && <PeerProvider />}
      </Layout>
    </>
  )
}
