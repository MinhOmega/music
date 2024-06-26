import { NextApiRequest, NextApiResponse } from 'next'
import { Innertube } from 'youtubei.js'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const youtube = await Innertube.create()
  const results = await youtube.search(req.body.query)
  res.json(results)
}
