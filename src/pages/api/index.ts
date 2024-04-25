import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { method } = req

  switch (method) {
    case 'GET':
      res.status(200).json({
        app: process.env.APP_NAME,
        description: process.env.APP_DESCRIPTION,
        version: process.env.APP_VERSION,
        hash: process.env.COMMIT_HASH.substring(0, 8)
      })
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).json({
        success: false,
        error: { message: `Method ${method} Not Allowed` }
      })
      break
  }
}
