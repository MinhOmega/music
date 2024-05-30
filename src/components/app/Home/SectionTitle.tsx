import { Typography } from 'antd'
import { ReactNode } from 'react'
import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  title: string
  extras?: ReactNode
}

export default function SectionTitle({ title, extras }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      <Typography.Title level={4} className={styles.title}>
        {title}
      </Typography.Title>
      {extras}
    </div>
  )
}
