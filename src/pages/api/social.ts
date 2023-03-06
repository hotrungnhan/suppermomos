// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Social } from '@/types/social'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Social>
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
