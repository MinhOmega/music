import { NextApiRequest, NextApiResponse } from 'next'
import { Innertube } from 'youtubei.js'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const youtube = await Innertube.create({
    location: 'VN',
  })
  const results = await youtube.music.getExplore()
  console.log('🚀 ~ file: music-explore.ts:10 ~ handler ~ results:', results)
  res.json(results)
}
