// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
  startAt: Date
  venue: string
  capacity: number
  price: number
  description: string
  isManualApprove: boolean
  privacy: string
  banner: string
  tags: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST') {
    return await fetch('https://api.supermomos-dev.com/interview/social', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })
      .then(async (r) => res.status(r.status).json(await r.json()))
      .catch((err) => res.status(err.status || 500).send(err.message))
  }
  return res.status(401)
}
