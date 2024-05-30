import styles from '@/pages/playlists/Playlist.module.scss'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { useRouter } from 'next/router'
import React from 'react'

interface GoBackProps {
  size?: SizeType
}

export default function GoBack({ size }: GoBackProps) {
  const router = useRouter()
  return (
    <Button
      className={styles.backButton}
      icon={<FontAwesomeIcon icon={faChevronLeft} />}
      shape={'round'}
      size={size || 'large'}
      onClick={() => router.back()}
    >
      Go Back
    </Button>
  )
}
