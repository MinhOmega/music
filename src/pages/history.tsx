import GoBack from '@/components/shared/GoBack'
import VerticalTracksList from '@/components/shared/VerticalTracksList'
import { enqueueTrack } from '@/redux/actions/player.actions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setApp } from '@/redux/slices/app.slice'
import styles from '@/styles/History.module.scss'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from 'antd'
import React from 'react'

export default function History() {
  const dispatch = useAppDispatch()
  const { playHistory } = useAppSelector((state) => state.app)

  return (
    <div className={styles.outer}>
      <div className={styles.header}>
        <GoBack />
        <Typography.Title>History</Typography.Title>
      </div>

      <VerticalTracksList
        tracks={playHistory}
        showFavorite={true}
        optionItems={[
          {
            key: 'add-to-playlist',
            label: 'Add to playlist',
            icon: <FontAwesomeIcon icon={faPlus} />,
            onClick: (item: any) => {
              dispatch(
                setApp({
                  addToPlaylistModal: {
                    showModal: true,
                    track: item,
                  },
                })
              )
            },
          },
          {
            key: 'enqueue',
            label: 'Add to queue',
            icon: <FontAwesomeIcon icon={faPlay} />,
            onClick: (item: any) => {
              dispatch(
                enqueueTrack({
                  track: item,
                  playNow: false,
                })
              )
            },
          },
        ]}
      />
    </div>
  )
}
