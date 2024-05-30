import SectionTitle from '@/components/app/Home/SectionTitle'
import TrackHorizontalSeries from '@/components/app/Home/TrackHorizontalSeries'
import apiService from '@/services/api.service'
import { useEffect, useState } from 'react'

export default function ExploreSection() {
  const [sections, setSections] = useState<any[]>([])
  useEffect(() => {
    ;(async () => {
      try {
        const exploreData = localStorage.getItem('explore')
        const lastExploreTimestamp = parseInt(localStorage.getItem('explore-ts') || '0')
        const now = new Date().getTime()
        const data: any =
          exploreData && now - lastExploreTimestamp < 5 * 60 * 1000
            ? JSON.parse(exploreData)
            : await apiService.getMusicExplore().then((r) => {
                localStorage.setItem('explore', JSON.stringify(r))
                localStorage.setItem('explore-ts', now.toString())
                return r
              })
        setSections(data.sections)
      } catch (error) {
        console.log('🚀 ~ file: ExploreSection.tsx:22 ~ error:', error)
      }
    })()
  }, [])

  return (
    <div>
      {sections
        .filter((section) => !section.num_items_per_column)
        .map((section) => (
          <>
            <SectionTitle title={section.header?.title?.text} />
            <TrackHorizontalSeries tracks={section.contents} />
          </>
        ))}
    </div>
  )
}
