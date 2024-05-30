import { useAppSelector } from '@/redux/hooks'
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, List } from 'antd'
import styles from './ParticipantsList.module.scss'

export default function ParticipantsList() {
  const { connections, isHost } = useAppSelector((state) => state.connect)
  return (
    <List
      dataSource={connections}
      renderItem={(item) => {
        return (
          <div className={styles.item}>
            <div className={styles.name}>{item.peer}</div>
            <div className={styles.controls}>
              <Button danger type={'text'} icon={<FontAwesomeIcon icon={faLinkSlash} />} />
            </div>
          </div>
        )
      }}
    />
  )
}
